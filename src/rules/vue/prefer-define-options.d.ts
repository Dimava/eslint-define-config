import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferDefineOptionsRule {
  /**
   * Enforce use of `defineOptions` instead of default export.
   *
   * @see [prefer-define-options](https://eslint.vuejs.org/rules/prefer-define-options.html)
   */
  'vue/prefer-define-options': Rule<[RuleLevel]>;
}
