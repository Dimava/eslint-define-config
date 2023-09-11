import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoThisInSfcRule {
  /**
   * Disallow `this` from being used in stateless functional components.
   *
   * @see [no-this-in-sfc](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-this-in-sfc.md)
   */
  'react/no-this-in-sfc': Rule<[RuleLevel]>;
}
