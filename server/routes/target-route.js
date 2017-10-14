var router = require('express').Router();
var bodyParser = require('body-parser');
var NaturalLanguage = require('../config/natural-languange');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.use('/target', function(req, res, next) {
    if (req.body.text) {
        req.body.text = req.body.text.replace(/,|;|`|:|-|'/g, '');
    }
    next();
});

router.post('/target', function(req, res) {
    var targetText = req.body.text;

    NaturalLanguage.analyze({
        text: targetText,
        features: {
            keywords: {
                emotion: true,
                limit: 1
            },
            emotion: {
                targets: [targetText],
                document: false
            }
        }
    }, function (err, response) {
        res.json(response || JSON.stringify(err.error));
    });
});

module.exports = router;