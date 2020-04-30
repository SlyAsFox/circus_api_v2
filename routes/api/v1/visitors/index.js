const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Visitor } = require('../../../../models');
const faker = require('faker');

router.get('/', asyncHandler(async (req, res) => {
    const visitors = await Visitor.findAll();

    res.send(visitors)
}));

router.post('/', asyncHandler(async (req, res) => {
    await Visitor.create({
        ...req.body
    });
}));

router.put('/:id', asyncHandler(async (req, res) => {
    await Visitor.update(req.body);
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    await Visitor.destroy({
        where: {
            id: req.params.id
        }
    })
}));

module.exports = router;