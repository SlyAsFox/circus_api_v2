const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Inventory } = require('../../../../models');
const faker = require('faker');

router.get('/', asyncHandler(async (req, res) => {
    const inventory = await Inventory.findAll();

    res.send(inventory)
}));

router.post('/', asyncHandler(async (req, res) => {
    await Inventory.create({
        ...req.body
    });
}));

router.put('/:id', asyncHandler(async (req, res) => {
    await Inventory.update(req.body);
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    await Inventory.destroy({
        where: {
            id: req.params.id
        }
    })
}));

module.exports = router;
