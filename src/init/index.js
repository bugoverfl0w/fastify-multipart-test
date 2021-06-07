import FastifyPlugin from 'fastify-plugin'
import FastifyExpress from 'fastify-express'
import Cors from 'cors'
import Middlewares from 'init/Middlewares'

async function init (fastify, opts) {
  await fastify.register(FastifyExpress)
  fastify.use(Cors())

  fastify.register(Middlewares)
}

module.exports = FastifyPlugin(init)
