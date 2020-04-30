const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Animal } = require('../../../../models');

router.get('/', asyncHandler(async (req, res) => {
    const animals = await Animal.findAll();

    res.send(animals)
}));

router.post('/', asyncHandler(async (req, res) => {
    await Animal.create({
        ...req.body
    });
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const animal = await Animal.update(req.body);

    res.send({
        data: animal
    })
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const animal = await Animal.destroy({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: animal
    })
}));

module.exports = router;