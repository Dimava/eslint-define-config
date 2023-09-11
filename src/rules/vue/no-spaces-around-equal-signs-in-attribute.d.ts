import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoSpacesAroundEqualSignsInAttributeRule {
  /**
   * Disallow spaces around equal signs in attribute.
   *
   * @see [no-spaces-around-equal-signs-in-attribute](https://eslint.vuejs.org/rules/no-spaces-around-equal-signs-in-attribute.html)
   */
  'vue/no-spaces-around-equal-signs-in-attribute': Rule<[RuleLevel]>;
}
