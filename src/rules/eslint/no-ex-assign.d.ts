import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoExAssignRule {
  /**
   * Disallow reassigning exceptions in `catch` clauses.
   *
   * @see [no-ex-assign](https://eslint.org/docs/latest/rules/no-ex-assign)
   */
  'no-ex-assign': Rule<[RuleLevel]>;
}
