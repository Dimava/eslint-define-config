import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface MaxNestedDescribeRule {
  /**
   * Nested describe block should be less than set max value or default value.
   *
   * @see [max-nested-describe](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/max-nested-describe.md)
   */
  'vitest/max-nested-describe': Rule<
    [
      RuleLevel,
      {
        max?: number;
      },
    ]
  >;
}
