import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface MultilineCommentStyleRule {
  /**
   * Enforce a particular style for multiline comments.
   *
   * @see [multiline-comment-style](https://eslint.org/docs/rules/multiline-comment-style)
   */
  'multiline-comment-style': Rule<
    [
      RuleLevel,
      ...(
        | []
        | ['starred-block' | 'bare-block']
        | []
        | ['separate-lines']
        | [
            'separate-lines',
            {
              checkJSDoc?: boolean;
            },
          ]
      ),
    ]
  >;
}
