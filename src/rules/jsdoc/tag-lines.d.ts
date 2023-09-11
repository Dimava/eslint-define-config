import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface TagLinesRule {
  /**
   * Enforces lines (or no lines) between tags.
   *
   * @see [tag-lines](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/tag-lines.md#repos-sticky-header)
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
