export default function (plop) {
    plop.setGenerator('shared', {
        description: 'Логика переиспользуемой сущности(shared)',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Введите название создаваемого элемента(shared):'
        }],
        actions: [
        {
            type: 'add',
            path: '../../src/shared/ui/{{name}}/{{name}}.tsx',
            templateFile: '../templates/shared/shared.template.hbs'
        },
        {
            type: 'add',
            path: '../../src/shared/ui/{{name}}/{{name}}.module.scss',
            templateFile: '../templates/shared/style.template.hbs'
        },
        {
            type: 'add',
            path: '../../src/shared/ui/{{name}}/types.ts',
            templateFile: '../templates/shared/types.template.hbs'
        }
    ],
    });
};
