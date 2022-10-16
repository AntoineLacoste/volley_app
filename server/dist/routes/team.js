"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Team_1 = require("../database/models/Team");
/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
function teamRoutes(fastify, options) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.get('/addTeam/:teamName', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            const { teamName } = request.params;
            const team = yield Team_1.Team.create({ name: teamName });
            return { team: teamName + ' created' };
        }));
        fastify.get('/getAllTeam', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            const teams = yield Team_1.Team.findAll();
            return { teams };
        }));
    });
}
exports.default = teamRoutes;
//# sourceMappingURL=team.js.map