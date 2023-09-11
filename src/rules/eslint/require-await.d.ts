import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireAwaitRule {
  /**
   * Disallow async functions which have no `await` expression.
   *
   * @see [require-await](https://eslint.org/docs/latest/rules/require-await)
   */
  'require-await': Rule<[RuleLevel]>;
}
