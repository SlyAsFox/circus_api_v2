const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Artist } = require('../../../../models');
const faker = require('faker');

router.get('/', asyncHandler(async (req, res) => {
    const artists = await Artist.findAll();

    res.send(artists)
}));

router.post('/', asyncHandler(async (req, res) => {
    await Artist.create({
        ...req.body
    });
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const animal = await Artist.update(req.body);

    res.send({
        data: animal
    })
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const animal = await Artist.destroy({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: animal
    })
}));

module.exports = router;