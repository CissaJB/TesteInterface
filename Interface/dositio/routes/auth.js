import { NOT_FOUND } from '../libs/errors.js';

/** @type{import('fastify').FastifyPluginAsync<>} */
export default async function auth(app, options) {
    const usuar = app.mongo.db.collection('users');
    app.post('/auth', async (req, rep) => {
        let user = req.body;
        let result = await usuar.findOne({username: user.username})
        if (result)
            return {
                'x-access-token': app.jwt.sign(user)
            }
        else
            throw new NOT_FOUND();
    });
}