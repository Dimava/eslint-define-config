import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RegexShorthandRule {
  /**
   *
   * @deprecated
   *
   * @see [regex-shorthand](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/deprecated-rules.md#regex-shorthand)
   */
  'unicorn/regex-shorthand': Rule<[RuleLevel]>;
}
