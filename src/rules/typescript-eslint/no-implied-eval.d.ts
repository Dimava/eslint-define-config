import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoImpliedEvalRule = {
  /**
   * Disallow the use of `eval()`-like methods.
   *
   * @see [no-implied-eval](https://typescript-eslint.io/rules/no-implied-eval)
   */
  '@typescript-eslint/no-implied-eval': Rule<[RuleLevel]>;
};
