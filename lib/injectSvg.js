const path = require('path');
var fs = require('fs');
const svg = require("svgo");

const svgo = new svg({
    plugins: [{
        removeDoctype: true
    },
    {
        removeComments: true
    },
    {
        removeXMLNS: true
    }
    ]
});

module.exports = {
    default: function (options) {
        options = options || {};
        options.root = options.root || '.';

        const projectRoot = path.resolve(options.root);

        return function (tree) {
            tree.match({ tag: 'img' }, img => {

                var testSvg = /^.*.(svg)$/i;

                let code;

                if (testSvg.test(img.attrs.src)) {
                    code = fs.readFileSync(projectRoot + '/' + img.attrs.src).toString();
                }
                else {
                    return img
                }

                return code;
            });

            return tree;
        };
    }
};

function optimizeSvg(inlineSvg) {

    const svgo = new svg({
        plugins: [{
            removeDoctype: true
        },
        {
            removeComments: true
        },
        {
            removeXMLNS: true
        }
        ]
    });

    return new Promise((resolve, reject) => {
        svgo.optimize(inlineSvg).then(result => {
            resolve(result);
        }) ;
    });
}