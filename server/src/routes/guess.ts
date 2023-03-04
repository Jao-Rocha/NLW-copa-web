import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function guessRoutes(fastify: FastifyInstance) {
  //rota de contagem de palpites
  fastify.get('/guesses/count', async () => {
    const count = await prisma.guess.count()

    return { count }
  })
}
