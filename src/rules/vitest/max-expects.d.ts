import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface MaxExpectsRule {
  /**
   * Enforce a maximum number of expect per test.
   *
   * @see [max-expects](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/max-expects.md)
   */
  'vitest/max-expects': Rule<
    [
      RuleLevel,
      {
        max?: number;
      },
    ]
  >;
}
