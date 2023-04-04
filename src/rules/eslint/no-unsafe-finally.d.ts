import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUnsafeFinallyRule = {
  /**
   * Disallow control flow statements in `finally` blocks.
   *
   * @see [no-unsafe-finally](https://eslint.org/docs/rules/no-unsafe-finally)
   */
  'no-unsafe-finally': Rule<[RuleLevel]>;
};
