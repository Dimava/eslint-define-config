import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface LinesAroundCommentRule {
  /**
   * Require empty lines around comments.
   *
   * @see [lines-around-comment](https://eslint.org/docs/latest/rules/lines-around-comment)
   */
  'lines-around-comment': Rule<
    [
      RuleLevel,
      {
        beforeBlockComment?: boolean;
        afterBlockComment?: boolean;
        beforeLineComment?: boolean;
        afterLineComment?: boolean;
        allowBlockStart?: boolean;
        allowBlockEnd?: boolean;
        allowClassStart?: boolean;
        allowClassEnd?: boolean;
        allowObjectStart?: boolean;
        allowObjectEnd?: boolean;
        allowArrayStart?: boolean;
        allowArrayEnd?: boolean;
        ignorePattern?: string;
        applyDefaultIgnorePatterns?: boolean;
        afterHashbangComment?: boolean;
      },
    ]
  >;
}
