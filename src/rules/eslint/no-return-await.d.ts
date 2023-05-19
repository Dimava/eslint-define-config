import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoReturnAwaitRule {
  /**
   * Disallow unnecessary `return await`.
   *
   * @see [no-return-await](https://eslint.org/docs/rules/no-return-await)
   */
  'no-return-await': Rule<[RuleLevel]>;
}
