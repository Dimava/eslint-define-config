import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoMixedEnumsRule {
  /**
   * Disallow enums from having both number and string members.
   *
   * @see [no-mixed-enums](https://typescript-eslint.io/rules/no-mixed-enums)
   */
  '@typescript-eslint/no-mixed-enums': Rule<[RuleLevel]>;
}
