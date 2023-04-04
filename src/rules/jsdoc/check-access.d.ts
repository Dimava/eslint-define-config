import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type CheckAccessRule = {
  /**
   * Checks that `@access` tags have a valid value.
   *
   * @see [check-access](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-access)
   */
  'jsdoc/check-access': Rule<[RuleLevel]>;
};
