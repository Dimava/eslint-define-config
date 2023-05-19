import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxWrapMultilinesRule {
  /**
   * Disallow missing parentheses around multiline JSX.
   *
   * @see [jsx-wrap-multilines](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-wrap-multilines.md)
   */
  'react/jsx-wrap-multilines': Rule<
    [
      RuleLevel,
      {
        declaration?: true | false | 'ignore' | 'parens' | 'parens-new-line';
        assignment?: true | false | 'ignore' | 'parens' | 'parens-new-line';
        return?: true | false | 'ignore' | 'parens' | 'parens-new-line';
        arrow?: true | false | 'ignore' | 'parens' | 'parens-new-line';
        condition?: true | false | 'ignore' | 'parens' | 'parens-new-line';
        logical?: true | false | 'ignore' | 'parens' | 'parens-new-line';
        prop?: true | false | 'ignore' | 'parens' | 'parens-new-line';
      },
    ]
  >;
}
