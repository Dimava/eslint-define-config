import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferStartsEndsWithRule {
  /**
   *
   * @deprecated
   *
   * @see [prefer-starts-ends-with](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/deprecated-rules.md#prefer-starts-ends-with)
   */
  'unicorn/prefer-starts-ends-with': Rule<[RuleLevel]>;
}
