module.exports = (componentName) => ({
  content: `// Generated with utilities/create-component.js
export interface ${componentName}Props {
    foo: string;
}
`,
  extension: `.types.ts`,
});
