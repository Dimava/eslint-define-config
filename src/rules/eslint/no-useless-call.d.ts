import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUselessCallRule {
  /**
   * Disallow unnecessary calls to `.call()` and `.apply()`.
   *
   * @see [no-useless-call](https://eslint.org/docs/latest/rules/no-useless-call)
   */
  'no-useless-call': Rule<[RuleLevel]>;
}
