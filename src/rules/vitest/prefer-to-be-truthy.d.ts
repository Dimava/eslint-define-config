import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferToBeTruthyRule {
  /**
   * Suggest using `toBeTruthy`.
   *
   * @see [prefer-to-be-truthy](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-truthy.md)
   */
  'vitest/prefer-to-be-truthy': Rule<[RuleLevel]>;
}
