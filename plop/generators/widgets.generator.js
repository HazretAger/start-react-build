export default function (plop) {
  plop.setGenerator('widgets', {
    description: 'Логика переиспользуемой сущности(widgets)',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Введите название создаваемого элемента(widgets):',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/widgets/ui/{{name}}/{{name}}.tsx',
        templateFile: '../templates/widgets/widgets.template.hbs',
      },
      {
        type: 'add',
        path: '../../src/widgets/ui/{{name}}/{{name}}.module.scss',
        templateFile: '../templates/widgets/style.template.hbs',
      },
      {
        type: 'add',
        path: '../../src/widgets/ui/{{name}}/types.ts',
        templateFile: '../templates/widgets/types.template.hbs',
      },
    ],
  });
}
