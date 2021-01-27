module.exports = (componentName) => ({
  content: `import { Meta, Story, Canvas, ArgsTable } from '@storybook/addon-docs/blocks';
import { actions } from '@storybook/addon-actions';
import ${componentName} from '../${componentName}/${componentName}';

<Meta title='Components/${componentName}' component={${componentName}} />

# ${componentName}

Lorem ipsum.

## Default

<Canvas>
  <Story name='Default'>
    <${componentName} />
  </Story>
</Canvas>

## Prop Definitions

| Name       | Type       | Value(s)   | Optional   |
|------------|------------|------------|------------|
|            |            |            |            |
|            |            |            |            |
|            |            |            |            |
|            |            |            |            |
|            |            |            |            |
|            |            |            |            |
|            |            |            |            |
|            |            |            |            |
`,
  extension: `.stories.mdx`,
});
