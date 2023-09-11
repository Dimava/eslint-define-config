import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequirePropCommentRule {
  /**
   * Require props to have a comment.
   *
   * @see [require-prop-comment](https://eslint.vuejs.org/rules/require-prop-comment.html)
   */
  'vue/require-prop-comment': Rule<
    [
      RuleLevel,
      {
        type?: 'JSDoc' | 'line' | 'block' | 'any';
      },
    ]
  >;
}
