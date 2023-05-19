import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxTagSpacingRule {
  /**
   * Enforce whitespace in and around the JSX opening and closing brackets.
   *
   * @see [jsx-tag-spacing](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-tag-spacing.md)
   */
  'react/jsx-tag-spacing': Rule<
    [
      RuleLevel,
      {
        closingSlash?: 'always' | 'never' | 'allow';
        beforeSelfClosing?:
          | 'always'
          | 'proportional-always'
          | 'never'
          | 'allow';
        afterOpening?: 'always' | 'allow-multiline' | 'never' | 'allow';
        beforeClosing?: 'always' | 'proportional-always' | 'never' | 'allow';
      },
    ]
  >;
}
