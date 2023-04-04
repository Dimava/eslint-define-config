import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type CheckIndentationRule = {
  /**
   * Reports invalid padding inside JSDoc blocks.
   *
   * @see [check-indentation](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-indentation)
   */
  'jsdoc/check-indentation': Rule<
    [
      RuleLevel,
      {
        excludeTags?: string[];
      },
    ]
  >;
};
