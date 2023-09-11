import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferExplicitAssertRule {
  /**
   * Suggest using explicit assertions rather than standalone queries.
   *
   * @see [prefer-explicit-assert](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-explicit-assert.md)
   */
  'testing-library/prefer-explicit-assert': Rule<
    [
      RuleLevel,
      {
        assertion?: 'toBeInTheDocument' | 'toBeTruthy' | 'toBeDefined';
        includeFindQueries?: boolean;
      },
    ]
  >;
}
