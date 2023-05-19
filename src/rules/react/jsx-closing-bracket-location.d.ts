import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxClosingBracketLocationRule {
  /**
   * Enforce closing bracket location in JSX.
   *
   * @see [jsx-closing-bracket-location](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-closing-bracket-location.md)
   */
  'react/jsx-closing-bracket-location': Rule<
    [
      RuleLevel,
      (
        | ('after-props' | 'props-aligned' | 'tag-aligned' | 'line-aligned')
        | {
            location?:
              | 'after-props'
              | 'props-aligned'
              | 'tag-aligned'
              | 'line-aligned';
          }
        | {
            nonEmpty?:
              | 'after-props'
              | 'props-aligned'
              | 'tag-aligned'
              | 'line-aligned'
              | false;
            selfClosing?:
              | 'after-props'
              | 'props-aligned'
              | 'tag-aligned'
              | 'line-aligned'
              | false;
          }
      ),
    ]
  >;
}
