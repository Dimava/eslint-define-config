import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoClassAssignRule = {
  /**
   * Disallow reassigning class members.
   *
   * @see [no-class-assign](https://eslint.org/docs/rules/no-class-assign)
   */
  'no-class-assign': Rule<[RuleLevel]>;
};
