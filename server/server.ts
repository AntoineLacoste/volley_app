// ESM
import Fastify from 'fastify'
import teamRoutes from './routes/team'
import sequelize from './database/sequelize'
import cors from '@fastify/cors'

const fastify = Fastify({
    logger: true
})

fastify.register(teamRoutes);

(async () => {
    await sequelize.sync({ force: false });

    await fastify.register(cors, {
        origin: "*"
    })

    fastify.listen({ port: 3001 }, function (err, address) {
        if (err) {
            fastify.log.error(err)
            process.exit(1)
        }
        // Server is now listening on ${address}
    })
})();