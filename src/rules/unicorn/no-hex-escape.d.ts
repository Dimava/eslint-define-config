import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoHexEscapeRule = {
  /**
   * Enforce the use of Unicode escapes instead of hexadecimal escapes.
   *
   * @see [no-hex-escape](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-hex-escape.md)
   */
  'unicorn/no-hex-escape': Rule<[RuleLevel]>;
};
