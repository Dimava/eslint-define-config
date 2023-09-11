import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferToBeObjectRule {
  /**
   * Prefer toBeObject().
   *
   * @see [prefer-to-be-object](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-object.md)
   */
  'vitest/prefer-to-be-object': Rule<[RuleLevel]>;
}
