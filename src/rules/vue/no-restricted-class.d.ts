import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRestrictedClassRule {
  /**
   * Disallow specific classes in Vue components.
   *
   * @see [no-restricted-class](https://eslint.vuejs.org/rules/no-restricted-class.html)
   */
  'vue/no-restricted-class': Rule<[RuleLevel, ...string[]]>;
}
