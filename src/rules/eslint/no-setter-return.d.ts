import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoSetterReturnRule {
  /**
   * Disallow returning values from setters.
   *
   * @see [no-setter-return](https://eslint.org/docs/latest/rules/no-setter-return)
   */
  'no-setter-return': Rule<[RuleLevel]>;
}
