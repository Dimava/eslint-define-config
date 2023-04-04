import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoOctalEscapeRule = {
  /**
   * Disallow octal escape sequences in string literals.
   *
   * @see [no-octal-escape](https://eslint.org/docs/rules/no-octal-escape)
   */
  'no-octal-escape': Rule<[RuleLevel]>;
};
