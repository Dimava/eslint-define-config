import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferCalledWithRule {
  /**
   * Suggest using `toBeCalledWith()` or `toHaveBeenCalledWith()`.
   *
   * @see [prefer-called-with](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-with.md)
   */
  'vitest/prefer-called-with': Rule<[RuleLevel]>;
}
