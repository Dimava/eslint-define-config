import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type HtmlClosingBracketNewlineRule = {
  /**
   * Require or disallow a line break before tag's closing brackets.
   *
   * @see [html-closing-bracket-newline](https://eslint.vuejs.org/rules/html-closing-bracket-newline.html)
   */
  'vue/html-closing-bracket-newline': Rule<
    [
      RuleLevel,
      {
        singleline?: 'always' | 'never';
        multiline?: 'always' | 'never';
      },
    ]
  >;
};
