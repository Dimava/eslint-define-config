import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type SpacedCommentRule = {
  /**
   * Enforce consistent spacing after the `//` or `/*` in a comment.
   *
   * @see [spaced-comment](https://eslint.org/docs/rules/spaced-comment)
   */
  'spaced-comment': Rule<
    [
      RuleLevel,
      'always' | 'never',
      {
        exceptions?: string[];
        markers?: string[];
        line?: {
          exceptions?: string[];
          markers?: string[];
        };
        block?: {
          exceptions?: string[];
          markers?: string[];
          balanced?: boolean;
        };
      },
    ]
  >;
};
