import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoNonoctalDecimalEscapeRule {
  /**
   * Disallow `\8` and `\9` escape sequences in string literals.
   *
   * @see [no-nonoctal-decimal-escape](https://eslint.org/docs/rules/no-nonoctal-decimal-escape)
   */
  'no-nonoctal-decimal-escape': Rule<[RuleLevel]>;
}
