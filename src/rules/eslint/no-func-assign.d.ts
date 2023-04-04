import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoFuncAssignRule = {
  /**
   * Disallow reassigning `function` declarations.
   *
   * @see [no-func-assign](https://eslint.org/docs/rules/no-func-assign)
   */
  'no-func-assign': Rule<[RuleLevel]>;
};
