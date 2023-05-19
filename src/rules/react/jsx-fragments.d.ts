import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxFragmentsRule {
  /**
   * Enforce shorthand or standard form for React fragments.
   *
   * @see [jsx-fragments](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-fragments.md)
   */
  'react/jsx-fragments': Rule<[RuleLevel, 'syntax' | 'element']>;
}
