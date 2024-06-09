const axios = require('axios');

// CommonJs
const fastify = require('fastify')({
  logger: true
})

// Declare a route
fastify.get('/pokemon/:name', async (request, reply) => {
    const result = await axios.get('https://pokeapi.co/api/v2/pokemon/'+request.params.name+'')
    return { response: result.data }
  })
  fastify.get('/location', async (request, reply) => {
    const result = await axios.get('https://pokeapi.co/api/v2/location/canalave-city')
    return { response: result.data }
  })

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3001 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
