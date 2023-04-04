import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type EmptyTagsRule = {
  /**
   * Expects specific tags to be empty of any content.
   *
   * @see [empty-tags](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-empty-tags)
   */
  'jsdoc/empty-tags': Rule<
    [
      RuleLevel,
      {
        tags?: string[];
      },
    ]
  >;
};
