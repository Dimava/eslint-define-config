import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDeprecatedRule {
  /**
   * Disallow usage of deprecated methods.
   *
   * @see [no-deprecated](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-deprecated.md)
   */
  'react/no-deprecated': Rule<[RuleLevel]>;
}
