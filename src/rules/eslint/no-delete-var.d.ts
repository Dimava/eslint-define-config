import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoDeleteVarRule = {
  /**
   * Disallow deleting variables.
   *
   * @see [no-delete-var](https://eslint.org/docs/rules/no-delete-var)
   */
  'no-delete-var': Rule<[RuleLevel]>;
};
