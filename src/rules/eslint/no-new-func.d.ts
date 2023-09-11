import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoNewFuncRule {
  /**
   * Disallow `new` operators with the `Function` object.
   *
   * @see [no-new-func](https://eslint.org/docs/latest/rules/no-new-func)
   */
  'no-new-func': Rule<[RuleLevel]>;
}
