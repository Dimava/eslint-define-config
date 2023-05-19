import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDoneCallbackRule {
  /**
   * Disallow using a callback in asynchrounous tests and hooks.
   *
   * @see [no-done-callback](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-done-callback.md)
   */
  'vitest/no-done-callback': Rule<[RuleLevel]>;
}
