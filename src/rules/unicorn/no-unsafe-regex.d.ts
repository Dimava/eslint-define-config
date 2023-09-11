import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnsafeRegexRule {
  /**
   *
   * @deprecated
   *
   * @see [no-unsafe-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/deprecated-rules.md#no-unsafe-regex)
   */
  'unicorn/no-unsafe-regex': Rule<[RuleLevel]>;
}
