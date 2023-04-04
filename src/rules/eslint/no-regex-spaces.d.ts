import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoRegexSpacesRule = {
  /**
   * Disallow multiple spaces in regular expressions.
   *
   * @see [no-regex-spaces](https://eslint.org/docs/rules/no-regex-spaces)
   */
  'no-regex-spaces': Rule<[RuleLevel]>;
};
