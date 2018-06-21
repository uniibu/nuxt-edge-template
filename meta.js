module.exports = {
  helpers: {
    escape (value) {
      return value.replace(/'/g, '&apos;');
    }
  },
  prompts: {
    name: {
      'type': 'string',
      'required': true,
      'message': 'Project name'
    },
    description: {
      'type': 'string',
      'required': false,
      'message': 'Project description',
      'default': 'Nuxt-edge project'
    },
    author: {
      'type': 'string',
      'message': 'Author'
    },
    mode: {
      'type': 'list',
      'message': 'Nuxt build mode',
      'choices': [
        {
          'name': 'Single Page Application',
          'value': 'spa',
          'short': 'spa'
        },
        {
          'name': 'Isomorphic application(universal)',
          'value': 'universal',
          'short': 'universal'
        }
      ]
    }
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
};
