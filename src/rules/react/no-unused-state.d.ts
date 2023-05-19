import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnusedStateRule {
  /**
   * Disallow definitions of unused state.
   *
   * @see [no-unused-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-state.md)
   */
  'react/no-unused-state': Rule<[RuleLevel]>;
}
