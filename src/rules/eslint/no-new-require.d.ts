import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoNewRequireRule {
  /**
   * Disallow `new` operators with calls to `require`.
   *
   * @deprecated
   *
   * @see [no-new-require](https://eslint.org/docs/latest/rules/no-new-require)
   */
  'no-new-require': Rule<[RuleLevel]>;
}
