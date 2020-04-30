const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Performance } = require('../../../../models');

router.get('/', asyncHandler(async (req, res) => {
    const performances = await Performance.findAll();

    res.send(performances)
}));

router.post('/', asyncHandler(async (req, res) => {
    await Performance.create({
        ...req.body
    });
}));

router.put('/:id', asyncHandler(async (req, res) => {
    await Performance.update(req.body);
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    await Performance.destroy({
        where: {
            id: req.params.id
        }
    })
}));

module.exports = router;