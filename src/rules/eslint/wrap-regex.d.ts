import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type WrapRegexRule = {
  /**
   * Require parenthesis around regex literals.
   *
   * @see [wrap-regex](https://eslint.org/docs/rules/wrap-regex)
   */
  'wrap-regex': Rule<[RuleLevel]>;
};
