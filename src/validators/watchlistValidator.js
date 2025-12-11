import {z} from "zod"

const addToWatchlistSchema = z.object({
    movieId: z.string().uuid(),
    status: z.enum(['PLANNED', 'WATCHING', 'COMPLETED', 'DROPPED'], {
        error: () => ({
            message: 'Status must be one of PLANNED, WATCHING, COMPLETED, DROPPED'
        })
    }).optional(),
    rating: z.coerce.number().int("Rating must be an integer between 0 and 10").min(0).max(10).optional(),
    notes: z.string().optional(),
})


export {
    addToWatchlistSchema,
}