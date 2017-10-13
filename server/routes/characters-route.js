var router = require('express').Router();
var jsonData = require('../data/henry_iv.json');

router.get('/characters', function(req, res) {
    if (jsonData) {
        var characterList = jsonData.map(function(result) {
            return result.speaker;
        }).reduce(function(prev, cur) {
            prev[cur] = (prev[cur] || 0) + 1;
            return prev;
        }, {});
    }

    res.json({ 
        list: characterList || []
    });
});

module.exports = router;