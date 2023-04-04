import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoConstAssignRule = {
  /**
   * Disallow reassigning `const` variables.
   *
   * @see [no-const-assign](https://eslint.org/docs/rules/no-const-assign)
   */
  'no-const-assign': Rule<[RuleLevel]>;
};
