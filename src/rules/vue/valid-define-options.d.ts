import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ValidDefineOptionsRule {
  /**
   * Enforce valid `defineOptions` compiler macro.
   *
   * @see [valid-define-options](https://eslint.vuejs.org/rules/valid-define-options.html)
   */
  'vue/valid-define-options': Rule<[RuleLevel]>;
}
