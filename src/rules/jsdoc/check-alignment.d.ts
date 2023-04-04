import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type CheckAlignmentRule = {
  /**
   * Reports invalid alignment of JSDoc block asterisks.
   *
   * @see [check-alignment](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-alignment)
   */
  'jsdoc/check-alignment': Rule<[RuleLevel]>;
};
