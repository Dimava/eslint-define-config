import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoReduceRule {
  /**
   *
   * @deprecated
   *
   * @see [no-reduce](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/deprecated-rules.md#no-reduce)
   */
  'unicorn/no-reduce': Rule<[RuleLevel]>;
}
