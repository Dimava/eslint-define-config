import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRestrictedViMethodsRule {
  /**
   * Disallow specific `vi.` methods.
   *
   * @see [no-restricted-vi-methods](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-vi-methods.md)
   */
  'vitest/no-restricted-vi-methods': Rule<
    [
      RuleLevel,
      {
        [k: string]: string | null;
      },
    ]
  >;
}
