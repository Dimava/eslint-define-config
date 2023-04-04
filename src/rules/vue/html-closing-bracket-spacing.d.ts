import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type HtmlClosingBracketSpacingRule = {
  /**
   * Require or disallow a space before tag's closing brackets.
   *
   * @see [html-closing-bracket-spacing](https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html)
   */
  'vue/html-closing-bracket-spacing': Rule<
    [
      RuleLevel,
      {
        startTag?: 'always' | 'never';
        endTag?: 'always' | 'never';
        selfClosingTag?: 'always' | 'never';
      },
    ]
  >;
};
