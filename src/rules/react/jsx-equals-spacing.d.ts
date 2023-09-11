import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxEqualsSpacingRule {
  /**
   * Enforce or disallow spaces around equal signs in JSX attributes.
   *
   * @see [jsx-equals-spacing](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-equals-spacing.md)
   */
  'react/jsx-equals-spacing': Rule<[RuleLevel, 'always' | 'never']>;
}
