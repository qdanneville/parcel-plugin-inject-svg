const path = require('path');
var fs = require('fs');

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