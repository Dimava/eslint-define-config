import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferJsonParseBufferRule = {
  /**
   * Prefer reading a JSON file as a buffer.
   *
   * @see [prefer-json-parse-buffer](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-json-parse-buffer.md)
   */
  'unicorn/prefer-json-parse-buffer': Rule<[RuleLevel]>;
};
