import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PaddingLineBetweenTagsRule = {
  /**
   * Require or disallow newlines between sibling tags in template.
   *
   * @see [padding-line-between-tags](https://eslint.vuejs.org/rules/padding-line-between-tags.html)
   */
  'vue/padding-line-between-tags': Rule<
    [
      RuleLevel,
      {
        blankLine: 'always' | 'never' | 'consistent';
        prev: string;
        next: string;
      }[],
    ]
  >;
};
