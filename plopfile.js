const { readdirSync } = require('node:fs');

const features = readdirSync('src/features').map((it) => ({
  name: it,
  value: it,
}));

module.exports = (plop) => {
  // components以下の定義
  plop.setGenerator('components', {
    description: 'Create a new src/components',
    prompts: [
      {
        name: 'componentName',
        message: 'コンポーネントの名前を入力してください',
      },
    ],
    actions: (data) => {
      const componentName = data.componentName;
      const componentPath = `src/components/${componentName}/`;
      return [
        {
          type: 'add',
          path: `${componentPath}index.tsx`,
          templateFile: 'plop/component.tsx.hbs',
        },
        {
          type: 'add',
          path: `${componentPath}${componentName}.stories.tsx`,
          templateFile: 'plop/stories.tsx.hbs',
          data: {
            directory: 'components',
          },
        },
      ];
    },
  });

  // features以下の定義
  plop.setGenerator('features', {
    description: 'Create a new src/features/',
    prompts: [
      {
        type: 'list',
        name: 'name',
        message: 'feature name please',
        choices: features,
      },
      {
        name: 'componentName',
        message: 'コンポーネントの名前を入力してください',
      },
    ],
    actions: (data) => {
      const choicesName = data.name;
      const componentName = data.componentName;
      const componentPath = `src/features/${choicesName}/${componentName}/`;
      return [
        {
          type: 'add',
          path: `${componentPath}index.tsx`,
          templateFile: 'plop/component.tsx.hbs',
        },
        {
          type: 'add',
          path: `${componentPath}${componentName}.stories.tsx`,
          templateFile: 'plop/stories.tsx.hbs',
          data: {
            directory: `features/${choicesName}`,
          },
        },
      ];
    },
  });
};
