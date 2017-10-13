var NaturalLanguage = require('watson-developer-cloud').NaturalLanguageUnderstandingV1;

var naturalLanguage = new NaturalLanguage({
    username: '7f12ed54-fb10-4774-83c3-0a684fa938f6',
    password: 'NcOw468QMogN',
    version_date: NaturalLanguage.VERSION_DATE_2017_02_27
});

module.exports = naturalLanguage;