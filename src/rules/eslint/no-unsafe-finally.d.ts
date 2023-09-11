import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnsafeFinallyRule {
  /**
   * Disallow control flow statements in `finally` blocks.
   *
   * @see [no-unsafe-finally](https://eslint.org/docs/latest/rules/no-unsafe-finally)
   */
  'no-unsafe-finally': Rule<[RuleLevel]>;
}
