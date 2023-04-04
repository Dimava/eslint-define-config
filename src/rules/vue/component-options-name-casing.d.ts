import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ComponentOptionsNameCasingRule = {
  /**
   * Enforce the casing of component name in `components` options.
   *
   * @see [component-options-name-casing](https://eslint.vuejs.org/rules/component-options-name-casing.html)
   */
  'vue/component-options-name-casing': Rule<
    [RuleLevel, 'camelCase' | 'kebab-case' | 'PascalCase']
  >;
};
