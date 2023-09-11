import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxOneExpressionPerLineRule {
  /**
   * Require one JSX element per line.
   *
   * @see [jsx-one-expression-per-line](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-one-expression-per-line.md)
   */
  'react/jsx-one-expression-per-line': Rule<
    [
      RuleLevel,
      {
        allow?: 'none' | 'literal' | 'single-child';
      },
    ]
  >;
}
