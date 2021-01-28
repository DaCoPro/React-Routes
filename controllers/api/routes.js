const Route = require('../../models/route');

module.exports = {
    index,
    create,
}

async function index(req, res) {
    const routes = await Route.find({});
    res.status(200).json(routes);
}

async function create(req, res) {
    const route = await Route.create(req.body);
    res.status(201).json(route);
  }