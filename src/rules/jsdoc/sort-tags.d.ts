import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type SortTagsRule = {
  /**
   *
   * @see [sort-tags](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-sort-tags)
   */
  'jsdoc/sort-tags': Rule<
    [
      RuleLevel,
      {
        alphabetizeExtras?: boolean;
        tagSequence?: string[];
        [k: string]: any;
      },
    ]
  >;
};
