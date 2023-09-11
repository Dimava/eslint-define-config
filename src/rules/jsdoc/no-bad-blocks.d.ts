import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoBadBlocksRule {
  /**
   * This rule checks for multi-line-style comments which fail to meet the criteria of a jsdoc block.
   *
   * @see [no-bad-blocks](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-bad-blocks.md#repos-sticky-header)
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
