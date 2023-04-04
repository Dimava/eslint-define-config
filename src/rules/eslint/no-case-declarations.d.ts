import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoCaseDeclarationsRule = {
  /**
   * Disallow lexical declarations in case clauses.
   *
   * @see [no-case-declarations](https://eslint.org/docs/rules/no-case-declarations)
   */
  'no-case-declarations': Rule<[RuleLevel]>;
};
