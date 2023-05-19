import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface TagLinesRule {
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
        applyToEndTag?: boolean;
        count?: number;
        endLines?: number | null;
        startLines?: number | null;
        tags?: {
          /**
           */
          [k: string]: {
            count?: number;
            lines?: 'always' | 'never' | 'any';
          };
        };
      },
    ]
  >;
}
