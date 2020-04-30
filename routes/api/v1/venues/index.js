const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Venue } = require('../../../../models');
const faker = require('faker');

router.get('/', asyncHandler(async (req, res) => {
    const venues = await Venue.findAll();

    res.send(venues)
}));

router.post('/', asyncHandler(async (req, res) => {
    await Venue.create({
        ...req.body
    });
}));

router.put('/:id', asyncHandler(async (req, res) => {
    await Venue.update(req.body);
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    await Venue.destroy({
        where: {
            id: req.params.id
        }
    })
}));

module.exports = router;