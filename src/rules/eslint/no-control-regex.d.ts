import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoControlRegexRule {
  /**
   * Disallow control characters in regular expressions.
   *
   * @see [no-control-regex](https://eslint.org/docs/latest/rules/no-control-regex)
   */
  'no-control-regex': Rule<[RuleLevel]>;
}
