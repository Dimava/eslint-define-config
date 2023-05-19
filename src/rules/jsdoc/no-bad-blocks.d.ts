import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoBadBlocksRule {
  /**
   * This rule checks for multi-line-style comments which fail to meet the criteria of a jsdoc block.
   *
   * @see [no-bad-blocks](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-bad-blocks)
   */
  'jsdoc/no-bad-blocks': Rule<
    [
      RuleLevel,
      {
        ignore?: string[];
        preventAllMultiAsteriskBlocks?: boolean;
      },
    ]
  >;
}
