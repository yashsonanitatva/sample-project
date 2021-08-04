const log = require('../log');

module.exports.setGenerator = function (plop) {
  // Controller generator
  plop.setGenerator('controller', {
    description: 'Generates Equals Money Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What's the name of the Component?",
        validate(value) {
          let message = true;
          if (!/.+/.test(value)) {
            message = log.formatError('Missing', 'you must define a component name');
          }

          return message;
        },
      },
    ],
    actions() {
      return [
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/index.ts',
          templateFile: 'generate/component/templates/index.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'generate/component/templates/component.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
          templateFile: 'generate/component/templates/styles.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.theme.ts',
          templateFile: 'generate/component/templates/theme.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.models.tsx',
          templateFile: 'generate/component/templates/models.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.i18n.ts',
          templateFile: 'generate/component/templates/i18n.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
          templateFile: 'generate/component/templates/test.hbs',
        },
      ];
    },
  });
};
