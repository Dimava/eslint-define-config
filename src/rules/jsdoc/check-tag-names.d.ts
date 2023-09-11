import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface CheckTagNamesRule {
  /**
   * Reports invalid block tag names.
   *
   * @see [check-tag-names](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-tag-names.md#repos-sticky-header)
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
