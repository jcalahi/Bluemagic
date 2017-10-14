var router = require('express').Router();
var bodyParser = require('body-parser');
var jsonData = require('../data/henry_iv.json');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/chardata', function(req, res) {
    var selectedName = req.body.name;

    var results = jsonData.filter(function(data) {
        return data.speaker === selectedName;
    }).map(function(target) {
        //return target.text_entry;
        return {
            lineId: target.line_id,
            lineNumber: target.line_number,
            textEntry: target.text_entry
        };
    });

    res.json({
        entries: results
    });
});


module.exports = router;