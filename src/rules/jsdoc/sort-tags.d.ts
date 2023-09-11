import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface SortTagsRule {
  /**
   * Sorts tags by a specified sequence according to tag name.
   *
   * @see [sort-tags](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/sort-tags.md#repos-sticky-header)
   */
  'jsdoc/sort-tags': Rule<
    [
      RuleLevel,
      {
        alphabetizeExtras?: boolean;
        linesBetween?: number;
        reportIntraTagGroupSpacing?: boolean;
        reportTagGroupSpacing?: boolean;
        tagSequence?: {
          tags?: string[];
          [k: string]: any;
        }[];
      },
    ]
  >;
}
