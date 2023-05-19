import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface BlockTagNewlineRule {
  /**
   * Enforce line breaks after opening and before closing block-level tags.
   *
   * @see [block-tag-newline](https://eslint.vuejs.org/rules/block-tag-newline.html)
   */
  'vue/block-tag-newline': Rule<
    [
      RuleLevel,
      {
        singleline?: 'always' | 'never' | 'consistent' | 'ignore';
        multiline?: 'always' | 'never' | 'consistent' | 'ignore';
        maxEmptyLines?: number;
        blocks?: {
          /**
           */
          [k: string]: {
            singleline?: 'always' | 'never' | 'consistent' | 'ignore';
            multiline?: 'always' | 'never' | 'consistent' | 'ignore';
            maxEmptyLines?: number;
          };
        };
      },
    ]
  >;
}
