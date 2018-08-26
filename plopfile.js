module.exports = function (plop) {
    // controller generator
    plop.setGenerator('component', {
        description: 'create stateless component',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'component name please'
        }],
        actions: [{
            type: 'add',
            path: 'src/components/{{name}}/{{name}}.js',
            templateFile: 'plop-templates/component.js'
        }, {
                type: 'add',
                path: 'src/components/{{name}}/{{name}}.test.js',
                templateFile: 'plop-templates/component.test.js'
        }]
    });
};