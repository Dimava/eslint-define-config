import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type MultilineBlocksRule = {
  /**
   * Controls how and whether jsdoc blocks can be expressed as single or multiple line blocks.
   *
   * @see [multiline-blocks](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-multiline-blocks)
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
        [k: string]: any;
      },
    ]
  >;
};
