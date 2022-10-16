"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
exports.default = new sequelize_typescript_1.Sequelize('volley', 'root', 'root', {
    host: 'localhost',
    dialect: 'mariadb',
    models: [__dirname + '/models']
});
//# sourceMappingURL=sequelize.js.map