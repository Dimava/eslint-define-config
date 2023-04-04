import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type TagLinesRule = {
  /**
   * Enforces lines (or no lines) between tags.
   *
   * @see [tag-lines](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-tag-lines)
   */
  'jsdoc/tag-lines': Rule<
    [
      RuleLevel,
      'always' | 'any' | 'never',
      {
        count?: number;
        dropEndLines?: boolean;
        noEndLines?: boolean;
        tags?: {
          /**
           */
          [k: string]: {
            count?: number;
            lines?: 'always' | 'never' | 'any';
          };
        };
        [k: string]: any;
      },
    ]
  >;
};
