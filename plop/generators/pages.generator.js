export default function (plop) {
    plop.setGenerator('pages', {
        description: 'Создание страницы(pages)',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Введите название страницы(pages):'
        }],
        actions: [
        {
            type: 'add',
            path: '../../src/pages/{{name}}/ui/{{name}}.tsx',
            templateFile: '../templates/pages/pages.template.hbs'
        },
        {
            type: 'add',
            path: '../../src/pages/{{name}}/ui/{{name}}.module.scss',
            templateFile: '../templates/pages/style.template.hbs'
        },
        {
            type: 'add',
            path: '../../src/pages/{{name}}/index.lazy.ts',
            templateFile: '../templates/pages/lazy.template.hbs'
        }
    ],
    });
};
