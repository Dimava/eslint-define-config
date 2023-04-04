import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoNewFuncRule = {
  /**
   * Disallow `new` operators with the `Function` object.
   *
   * @see [no-new-func](https://eslint.org/docs/rules/no-new-func)
   */
  'no-new-func': Rule<[RuleLevel]>;
};
