import { FastifyInstance } from "fastify"
import { Team } from "../database/models/Team"

/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
async function teamRoutes(fastify: FastifyInstance, options: Object) {
    fastify.get('/', async (request, reply) => {
        const team = await Team.create({ id_team: 1, name: "vball" });
        console.log(team.toJSON()); // This is good!
        return { team: 'vball created' }
    })
}

export default teamRoutes