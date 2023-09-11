import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoHooksRule {
  /**
   * Disallow setup and teardown hooks.
   *
   * @see [no-hooks](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-hooks.md)
   */
  'vitest/no-hooks': Rule<
    [
      RuleLevel,
      {
        allow?: any[];
      },
    ]
  >;
}
