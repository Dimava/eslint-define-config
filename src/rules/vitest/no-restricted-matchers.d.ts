import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRestrictedMatchersRule {
  /**
   * Disallow the use of certain matchers.
   *
   * @see [no-restricted-matchers](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-matchers.md)
   */
  'vitest/no-restricted-matchers': Rule<
    [
      RuleLevel,
      {
        [k: string]: string | null;
      },
    ]
  >;
}
