import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireTopLevelDescribeRule {
  /**
   * Enforce that all tests are in a top-level describe.
   *
   * @see [require-top-level-describe](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-top-level-describe.md)
   */
  'vitest/require-top-level-describe': Rule<
    [
      RuleLevel,
      {
        maxNumberOfTopLevelDescribes?: number;
      },
    ]
  >;
}
