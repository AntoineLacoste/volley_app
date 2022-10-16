import {Sequelize} from 'sequelize-typescript'

export default new Sequelize('volley', 'root', 'root', {
    host: 'localhost',
    dialect: 'mariadb',
    models: [__dirname + '/models']
})