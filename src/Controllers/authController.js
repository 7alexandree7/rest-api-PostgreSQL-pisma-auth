import { prisma } from '../dataBase/db.js';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/generateToken.js';

const register = async (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Please provide name, email and password' });
    }

    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })

    const token = generateToken(user.id, res)

    return res.status(201).json({
        status: 'success',
        data: {
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            },
            token
        }
    });

}


const login = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Please provide email and password' });
    }

    const user = await prisma.user.findUnique({ where: { email } })
    const isPasswordValid = bcrypt.compareSync(password, user.password)

    if (!user) {
        return res.status(400).json({ error: 'User not found' });
    }

    if (!isPasswordValid) {
        return res.status(400).json({ error: 'Invalid password' });
    }

    const token = generateToken(user.id, res)

    return res.status(201).json({
        status: 'success',
        data: {
            user: {
                id: user.id,
                email: user.email,
                password: user.password
            },
            token
        }
    });

}


const logout = (req, res) => {
    res.clearCookie('jwt');
    res.status(200).json({
        status: 'success',
        message: 'User logged out successfully'
    });
}


export {
    register,
    login,
    logout
};