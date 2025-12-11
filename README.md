# 🎬 Movie Watchlist API  
API REST construída com **Node.js**, **Express**, **PostgreSQL**, **Prisma ORM**, **Zod**, **JWT** e uma arquitetura modular limpa.  
Permite que usuários se registrem, façam login, visualizem filmes e adicionem títulos à própria watchlist.

---

## 🚀 Tecnologias Utilizadas

- Node.js + Express  
- PostgreSQL  
- Prisma ORM  
- Zod (validação)  
- JWT (autenticação)  
- dotenv  
- Arquitetura dividida em Controllers, Routes, Middlewares, Validators e Utils  

---

## 📁 Estrutura de Pastas

src/
├── Controllers/
│ ├── authController.js
│ └── watchlistController.js
├── dataBase/
│ └── db.js
├── middleware/
│ ├── authMiddleware.js
│ └── validateRequest.js
├── routes/
│ ├── authRoutes.js
│ ├── moviesRoutes.js
│ └── watchlistRoutes.js
├── utils/
│ └── ...
├── validators/
│ ├── userValidator.js
│ └── watchlistValidator.js
└── server.js

---

## 🔐 Autenticação

A API utiliza **JWT** armazenado em cookie HTTPOnly.  
Para acessar rotas protegidas:


---

## 🧰 Middlewares & Validators

Middlewares
authMiddleware → valida o token JWT
validateRequest → aplica os schemas do Zod
Validators (Zod)
userValidator → valida registro/login
watchlistValidator → valida entrada da watchlist
Essas camadas tornam o fluxo seguro, organizado e previsível.

---


## 🎯 Objetivo do Projeto

Projeto desenvolvido para praticar:
Arquitetura limpa no Node.js
Relações e queries com Prisma
Autenticação segura com JWT
Validação profissional com Zod
Uso de PostgreSQL em ambiente real
Organização de API em camadas

---
