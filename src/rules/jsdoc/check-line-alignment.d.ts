import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface CheckLineAlignmentRule {
  /**
   * Reports invalid alignment of JSDoc block lines.
   *
   * @see [check-line-alignment](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-line-alignment)
   */
  'jsdoc/check-line-alignment': Rule<
    [
      RuleLevel,
      'always' | 'never' | 'any',
      {
        customSpacings?: {
          postDelimiter?: number;
          postHyphen?: number;
          postName?: number;
          postTag?: number;
          postType?: number;
        };
        preserveMainDescriptionPostDelimiter?: boolean;
        tags?: string[];
        wrapIndent?: string;
      },
    ]
  >;
}
