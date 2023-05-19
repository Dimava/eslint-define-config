import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoIsMountedRule {
  /**
   * Disallow usage of isMounted.
   *
   * @see [no-is-mounted](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-is-mounted.md)
   */
  'react/no-is-mounted': Rule<[RuleLevel]>;
}
