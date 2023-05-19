import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoMultipleResolvedRule {
  /**
   *
   * @see [no-multiple-resolved](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-multiple-resolved.md)
   */
  'promise/no-multiple-resolved': Rule<[RuleLevel]>;
}
