import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxSpaceBeforeClosingRule {
  /**
   * Enforce spacing before closing bracket in JSX.
   *
   * @deprecated
   *
   * @see [jsx-space-before-closing](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-space-before-closing.md)
   */
  'react/jsx-space-before-closing': Rule<[RuleLevel, 'always' | 'never']>;
}
