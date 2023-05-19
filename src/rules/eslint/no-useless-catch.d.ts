import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUselessCatchRule {
  /**
   * Disallow unnecessary `catch` clauses.
   *
   * @see [no-useless-catch](https://eslint.org/docs/rules/no-useless-catch)
   */
  'no-useless-catch': Rule<[RuleLevel]>;
}
