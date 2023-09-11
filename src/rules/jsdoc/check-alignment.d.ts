import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface CheckAlignmentRule {
  /**
   * Reports invalid alignment of JSDoc block asterisks.
   *
   * @see [check-alignment](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-alignment.md#repos-sticky-header)
   */
  'jsdoc/check-alignment': Rule<[RuleLevel]>;
}
