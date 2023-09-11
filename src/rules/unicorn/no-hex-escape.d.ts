import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoHexEscapeRule {
  /**
   * Enforce the use of Unicode escapes instead of hexadecimal escapes.
   *
   * @see [no-hex-escape](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-hex-escape.md)
   */
  'unicorn/no-hex-escape': Rule<[RuleLevel]>;
}
