import FastifyPlugin from 'fastify-plugin'
import PublicController from 'controllers/PublicController'

async function allRoutes (fastify, opts, next) {
  fastify.post('/test', PublicController.test)

  next()
}

module.exports = FastifyPlugin(allRoutes)
