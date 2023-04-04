import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoControlRegexRule = {
  /**
   * Disallow control characters in regular expressions.
   *
   * @see [no-control-regex](https://eslint.org/docs/rules/no-control-regex)
   */
  'no-control-regex': Rule<[RuleLevel]>;
};
