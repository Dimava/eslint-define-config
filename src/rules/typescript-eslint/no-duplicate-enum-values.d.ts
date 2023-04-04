import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoDuplicateEnumValuesRule = {
  /**
   * Disallow duplicate enum member values.
   *
   * @see [no-duplicate-enum-values](https://typescript-eslint.io/rules/no-duplicate-enum-values)
   */
  '@typescript-eslint/no-duplicate-enum-values': Rule<[RuleLevel]>;
};
