import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoStandaloneExpectRule {
  /**
   * Disallow using `expect` outside of `it` or `test` blocks.
   *
   * @see [no-standalone-expect](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-standalone-expect.md)
   */
  'vitest/no-standalone-expect': Rule<
    [
      RuleLevel,
      {
        additionalTestBlockFunctions?: string[];
      },
    ]
  >;
}
