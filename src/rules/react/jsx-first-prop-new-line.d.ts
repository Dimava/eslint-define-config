import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxFirstPropNewLineRule {
  /**
   * Enforce proper position of the first property in JSX.
   *
   * @see [jsx-first-prop-new-line](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-first-prop-new-line.md)
   */
  'react/jsx-first-prop-new-line': Rule<
    [RuleLevel, 'always' | 'never' | 'multiline' | 'multiline-multiprop']
  >;
}
