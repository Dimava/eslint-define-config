import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface EmptyTagsRule {
  /**
   * Expects specific tags to be empty of any content.
   *
   * @see [empty-tags](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/empty-tags.md#repos-sticky-header)
   */
  'jsdoc/empty-tags': Rule<
    [
      RuleLevel,
      {
        tags?: string[];
      },
    ]
  >;
}
