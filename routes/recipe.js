const express = require('express');
const router = express.Router();

const recipeBook = [
    { id: 'a', name: 'meat', content: 'recipe meat'},
    { id: 'b', name: 'salat', content: 'recipe salat'},
    { id: 'c', name: 'pie', content: 'recipe pie'}
];

router.get('/list', (req, res) => {
    const recipeList = recipeBook.map(val => {
        return { id: val.id, name: val.name }
    });

    res.json({
        status: 'ok',
        result: { 
            list: recipeList
        }
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const recipe = recipeBook.find(val => val.id === id);

    if (!recipe){
        res.json({
            status: 'not exist'
        });
        return;
    };

    res.json({
        status: 'ok',
        result: {
            result: { recipe }
        }
    });
});

module.exports = router;
