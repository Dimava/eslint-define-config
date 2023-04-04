import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUselessReturnRule = {
  /**
   * Disallow redundant return statements.
   *
   * @see [no-useless-return](https://eslint.org/docs/rules/no-useless-return)
   */
  'no-useless-return': Rule<[RuleLevel]>;
};
