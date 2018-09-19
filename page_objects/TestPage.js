module.exports= {
    url: 'http://nightwatchjs.org/api/#assert-visible',
    elements:{
        body: 'body',
        heading: '#expect-api',
        languageHeading: 'html body section#api-container.secondary div.container.bs-docs-container div.row div.col-md-9 div.docs-section div.apimethod h3#expect-chains'
    }
    ,
    commands: [{
        Fieldlabels: function(expectedHeading, expectedLanguageHeading) {
             return this
                .assert.containsText('@heading', expectedHeading)
                .assert.containsText('@languageHeading', expectedLanguageHeading)
        }
    }]
}