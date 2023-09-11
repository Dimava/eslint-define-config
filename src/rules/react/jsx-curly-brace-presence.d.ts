import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxCurlyBracePresenceRule {
  /**
   * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes.
   *
   * @see [jsx-curly-brace-presence](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-brace-presence.md)
   */
  'react/jsx-curly-brace-presence': Rule<
    [
      RuleLevel,
      (
        | {
            props?: 'always' | 'never' | 'ignore';
            children?: 'always' | 'never' | 'ignore';
            propElementValues?: 'always' | 'never' | 'ignore';
          }
        | ('always' | 'never' | 'ignore')
      ),
    ]
  >;
}
