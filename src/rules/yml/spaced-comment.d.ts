import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface SpacedCommentRule {
  /**
   * Enforce consistent spacing after the `#` in a comment.
   *
   * @see [spaced-comment](https://ota-meshi.github.io/eslint-plugin-yml/rules/spaced-comment.html)
   */
  'yml/spaced-comment': Rule<
    [
      RuleLevel,
      'always' | 'never',
      {
        exceptions?: string[];
        markers?: string[];
      },
    ]
  >;
}
