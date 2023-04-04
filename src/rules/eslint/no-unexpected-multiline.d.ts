import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUnexpectedMultilineRule = {
  /**
   * Disallow confusing multiline expressions.
   *
   * @see [no-unexpected-multiline](https://eslint.org/docs/rules/no-unexpected-multiline)
   */
  'no-unexpected-multiline': Rule<[RuleLevel]>;
};
