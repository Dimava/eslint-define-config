import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoArrayInstanceofRule {
  /**
   *
   * @deprecated
   *
   * @see [no-array-instanceof](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/deprecated-rules.md#no-array-instanceof)
   */
  'unicorn/no-array-instanceof': Rule<[RuleLevel]>;
}
