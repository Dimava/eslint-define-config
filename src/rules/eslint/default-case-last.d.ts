import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface DefaultCaseLastRule {
  /**
   * Enforce default clauses in switch statements to be last.
   *
   * @see [default-case-last](https://eslint.org/docs/latest/rules/default-case-last)
   */
  'default-case-last': Rule<[RuleLevel]>;
}
