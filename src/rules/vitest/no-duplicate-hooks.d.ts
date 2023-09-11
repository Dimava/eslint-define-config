import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDuplicateHooksRule {
  /**
   * Disallow duplicate hooks and teardown hooks.
   *
   * @see [no-duplicate-hooks](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-duplicate-hooks.md)
   */
  'vitest/no-duplicate-hooks': Rule<[RuleLevel]>;
}
