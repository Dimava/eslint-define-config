import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoConstructorReturnRule = {
  /**
   * Disallow returning value from constructor.
   *
   * @see [no-constructor-return](https://eslint.org/docs/rules/no-constructor-return)
   */
  'no-constructor-return': Rule<[RuleLevel]>;
};
