import { FastifyInstance } from "fastify"
import { Team } from "../database/models/Team"
import { teamNameRequest } from '../types/teamNameRequest';

/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */

async function teamRoutes(fastify: FastifyInstance, options: Object) {

    fastify.get<{ Params: teamNameRequest }>('/addTeam/:teamName', async (request, reply) => {
        const { teamName }= request.params;
        const team = await Team.create({ name: teamName });
        return { team: teamName + ' created' }
    })

    fastify.get('/getAllTeam', async (request, reply) => {
        const teams = await Team.findAll();
        return { teams }
    })
    
}

export default teamRoutes