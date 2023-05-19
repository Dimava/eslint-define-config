import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PropNameCasingRule {
  /**
   * Enforce specific casing for the Prop name in Vue components.
   *
   * @see [prop-name-casing](https://eslint.vuejs.org/rules/prop-name-casing.html)
   */
  'vue/prop-name-casing': Rule<[RuleLevel, 'camelCase' | 'snake_case']>;
}
