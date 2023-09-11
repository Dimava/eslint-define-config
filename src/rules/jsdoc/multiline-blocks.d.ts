import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface MultilineBlocksRule {
  /**
   * Controls how and whether jsdoc blocks can be expressed as single or multiple line blocks.
   *
   * @see [multiline-blocks](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/multiline-blocks.md#repos-sticky-header)
   */
  'jsdoc/multiline-blocks': Rule<
    [
      RuleLevel,
      {
        allowMultipleTags?: boolean;
        minimumLengthForMultiline?: number;
        multilineTags?: '*' | string[];
        noFinalLineText?: boolean;
        noMultilineBlocks?: boolean;
        noSingleLineBlocks?: boolean;
        noZeroLineText?: boolean;
        singleLineTags?: string[];
      },
    ]
  >;
}
