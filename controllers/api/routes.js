const Route = require('../../models/route');

module.exports = {
    index,
    create,
    show
}

async function index(req, res) {
    const routes = await Route.find({});
    res.status(200).json(routes);
}

async function create(req, res) {
    const route = await Route.create(req.body);
    res.status(201).json(route);
}

async function show(req, res) {
    const route = await Route.findById(req.params.id);
    res.status(200).json(route);
}