import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoArrayIndexKeyRule {
  /**
   * Disallow usage of Array index in keys.
   *
   * @see [no-array-index-key](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-array-index-key.md)
   */
  'react/no-array-index-key': Rule<[RuleLevel]>;
}
