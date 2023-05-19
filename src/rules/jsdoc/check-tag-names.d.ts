import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface CheckTagNamesRule {
  /**
   * Reports invalid block tag names.
   *
   * @see [check-tag-names](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-tag-names)
   */
  'jsdoc/check-tag-names': Rule<
    [
      RuleLevel,
      {
        definedTags?: string[];
        enableFixer?: boolean;
        jsxTags?: boolean;
        typed?: boolean;
      },
    ]
  >;
}
