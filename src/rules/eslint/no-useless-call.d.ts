import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUselessCallRule = {
  /**
   * Disallow unnecessary calls to `.call()` and `.apply()`.
   *
   * @see [no-useless-call](https://eslint.org/docs/rules/no-useless-call)
   */
  'no-useless-call': Rule<[RuleLevel]>;
};
