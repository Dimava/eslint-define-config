import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ComponentNameInTemplateCasingRule = {
  /**
   * Enforce specific casing for the component naming style in template.
   *
   * @see [component-name-in-template-casing](https://eslint.vuejs.org/rules/component-name-in-template-casing.html)
   */
  'vue-pug/component-name-in-template-casing': Rule<
    [
      RuleLevel,
      'PascalCase' | 'kebab-case',
      {
        ignores?: string[];
        registeredComponentsOnly?: boolean;
      },
    ]
  >;
};
