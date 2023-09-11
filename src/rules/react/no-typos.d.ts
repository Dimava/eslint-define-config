import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoTyposRule {
  /**
   * Disallow common typos.
   *
   * @see [no-typos](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-typos.md)
   */
  'react/no-typos': Rule<[RuleLevel]>;
}
