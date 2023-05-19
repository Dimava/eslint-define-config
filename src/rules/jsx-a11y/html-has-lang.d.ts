import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface HtmlHasLangRule {
  /**
   * Enforce `<html>` element has `lang` prop.
   *
   * @see [html-has-lang](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/html-has-lang.md)
   */
  'jsx-a11y/html-has-lang': Rule<
    [
      RuleLevel,
      {
        [k: string]: any;
      },
    ]
  >;
}
