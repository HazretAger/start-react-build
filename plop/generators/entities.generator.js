export default function (plop) {
  plop.setGenerator('entities', {
    description: 'Создание сущности(entities)',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Введите название сущности(entities):',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/entities/{{name}}/api/queries/get{{name}}ByIdQuery.ts',
        templateFile: '../templates/entities/api/queries/query.template.hbs',
      },
      {
        type: 'add',
        path: '../../src/entities/{{name}}/api/requests/get{{name}}ById.ts',
        templateFile: '../templates/entities/api/requests/request.template.hbs',
      },
      {
        type: 'add',
        path: '../../src/entities/{{name}}/ui/{{name}}.tsx',
        templateFile: '../templates/entities/ui/entities.template.hbs',
      },
      {
        type: 'add',
        path: '../../src/entities/{{name}}/ui/{{name}}.module.scss',
        templateFile: '../templates/entities/ui/style.template.hbs',
      },
      {
        type: 'add',
        path: '../../src/entities/{{name}}/ui/types.ts',
        templateFile: '../templates/entities/ui/types.template.hbs',
      },
    ],
  });
}
