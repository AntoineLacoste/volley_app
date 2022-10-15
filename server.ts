// ESM
import Fastify from 'fastify'
import teamRoutes from './routes/team'
import sequelize from './database/sequelize';

const fastify = Fastify({
    logger: true
})

fastify.register(teamRoutes);

(async () => {
    await sequelize.sync({force: true});
  
    fastify.listen({ port: 3000 }, function (err, address) {
        if (err) {
            fastify.log.error(err)
            process.exit(1)
        }
        // Server is now listening on ${address}
    })
  })();