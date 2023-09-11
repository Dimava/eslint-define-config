import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface CheckAccessRule {
  /**
   * Checks that `@access` tags have a valid value.
   *
   * @see [check-access](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-access.md#repos-sticky-header)
   */
  'jsdoc/check-access': Rule<[RuleLevel]>;
}
