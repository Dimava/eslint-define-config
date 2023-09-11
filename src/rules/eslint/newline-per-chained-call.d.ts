import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NewlinePerChainedCallRule {
  /**
   * Require a newline after each call in a method chain.
   *
   * @see [newline-per-chained-call](https://eslint.org/docs/latest/rules/newline-per-chained-call)
   */
  'newline-per-chained-call': Rule<
    [
      RuleLevel,
      {
        ignoreChainWithDepth?: number;
      },
    ]
  >;
}
