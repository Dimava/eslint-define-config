import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ValidExpectRule {
  /**
   * Enforce valid `expect()` usage.
   *
   * @see [valid-expect](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-expect.md)
   */
  'vitest/valid-expect': Rule<
    [
      RuleLevel,
      {
        alwaysAwait?: boolean;
        asyncMatchers?: string[];
        minArgs?: number;
        maxArgs?: number;
      },
    ]
  >;
}
