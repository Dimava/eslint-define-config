import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ValidDescribeCallbackRule {
  /**
   * Enforce valid describe callback.
   *
   * @see [valid-describe-callback](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-describe-callback.md)
   */
  'vitest/valid-describe-callback': Rule<[RuleLevel]>;
}
