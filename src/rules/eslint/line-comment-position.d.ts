import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface LineCommentPositionRule {
  /**
   * Enforce position of line comments.
   *
   * @see [line-comment-position](https://eslint.org/docs/rules/line-comment-position)
   */
  'line-comment-position': Rule<
    [
      RuleLevel,
      (
        | ('above' | 'beside')
        | {
            position?: 'above' | 'beside';
            ignorePattern?: string;
            applyDefaultPatterns?: boolean;
            applyDefaultIgnorePatterns?: boolean;
          }
      ),
    ]
  >;
}
