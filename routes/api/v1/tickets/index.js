const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Ticket } = require('../../../../models');
const faker = require('faker');

router.get('/', asyncHandler(async (req, res) => {
    const tickets = await Ticket.findAll();

    res.send(tickets)
}));

router.post('/', asyncHandler(async (req, res) => {
    await Ticket.create({
        ...req.body
    });
}));

router.put('/:id', asyncHandler(async (req, res) => {
    await Ticket.update(req.body);
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    await Ticket.destroy({
        where: {
            id: req.params.id
        }
    })
}));

module.exports = router;