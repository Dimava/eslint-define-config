import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ComponentDefinitionNameCasingRule {
  /**
   * Enforce specific casing for component definition name.
   *
   * @see [component-definition-name-casing](https://eslint.vuejs.org/rules/component-definition-name-casing.html)
   */
  'vue/component-definition-name-casing': Rule<
    [RuleLevel, 'PascalCase' | 'kebab-case']
  >;
}
