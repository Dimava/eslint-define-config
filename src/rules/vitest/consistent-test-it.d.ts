import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ConsistentTestItRule {
  /**
   * Prefer test or it but not both.
   *
   * @see [consistent-test-it](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-it.md)
   */
  'vitest/consistent-test-it': Rule<
    [
      RuleLevel,
      {
        fn?: 'test' | 'it';
        withinDescribe?: 'test' | 'it';
      },
    ]
  >;
}
