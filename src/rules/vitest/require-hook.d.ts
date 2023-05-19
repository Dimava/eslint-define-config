import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireHookRule {
  /**
   * Require setup and teardown to be within a hook.
   *
   * @see [require-hook](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-hook.md)
   */
  'vitest/require-hook': Rule<
    [
      RuleLevel,
      {
        allowedFunctionCalls?: string[];
      },
    ]
  >;
}
