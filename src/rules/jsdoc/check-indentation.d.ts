import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface CheckIndentationRule {
  /**
   * Reports invalid padding inside JSDoc blocks.
   *
   * @see [check-indentation](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-indentation.md#repos-sticky-header)
   */
  'jsdoc/check-indentation': Rule<
    [
      RuleLevel,
      {
        excludeTags?: string[];
      },
    ]
  >;
}
