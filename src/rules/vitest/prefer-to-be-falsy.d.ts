import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferToBeFalsyRule {
  /**
   * Suggest using toBeFalsy().
   *
   * @see [prefer-to-be-falsy](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-falsy.md)
   */
  'vitest/prefer-to-be-falsy': Rule<[RuleLevel]>;
}
