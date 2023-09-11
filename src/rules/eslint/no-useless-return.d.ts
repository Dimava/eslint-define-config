import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUselessReturnRule {
  /**
   * Disallow redundant return statements.
   *
   * @see [no-useless-return](https://eslint.org/docs/latest/rules/no-useless-return)
   */
  'no-useless-return': Rule<[RuleLevel]>;
}
