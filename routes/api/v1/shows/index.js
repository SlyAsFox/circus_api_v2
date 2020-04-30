const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Show } = require('../../../../models');

router.get('/', asyncHandler(async (req, res) => {
    const shows = await Show.findAll();

    res.send(shows)
}));

router.post('/', asyncHandler(async (req, res) => {
    await Show.create({
        ...req.body
    });
}));

router.put('/:id', asyncHandler(async (req, res) => {
    await Show.update(req.body);
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    await Show.destroy({
        where: {
            id: req.params.id
        }
    })
}));

module.exports = router;