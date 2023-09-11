import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ConsistentTestFilenameRule {
  /**
   * Forbidden .spec test file pattern.
   *
   * @see [consistent-test-filename](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-filename.md)
   */
  'vitest/consistent-test-filename': Rule<
    [
      RuleLevel,
      {
        pattern?: string;
        allTestPattern?: string;
      },
    ]
  >;
}
