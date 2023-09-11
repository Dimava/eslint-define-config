import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoOctalEscapeRule {
  /**
   * Disallow octal escape sequences in string literals.
   *
   * @see [no-octal-escape](https://eslint.org/docs/latest/rules/no-octal-escape)
   */
  'no-octal-escape': Rule<[RuleLevel]>;
}
