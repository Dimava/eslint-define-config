import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferHooksInOrderRule {
  /**
   * Prefer having hooks in consistent order.
   *
   * @see [prefer-hooks-in-order](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-in-order.md)
   */
  'vitest/prefer-hooks-in-order': Rule<[RuleLevel]>;
}
