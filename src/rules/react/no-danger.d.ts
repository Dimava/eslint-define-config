import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDangerRule {
  /**
   * Disallow usage of dangerous JSX properties.
   *
   * @see [no-danger](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-danger.md)
   */
  'react/no-danger': Rule<[RuleLevel]>;
}
