const React = require('react')

function Def(html) {
    return (
        <htmt>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </htmt>
    )
}

module.exports = Def
