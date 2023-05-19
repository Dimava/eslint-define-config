import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoImpliedEvalRule {
  /**
   * Disallow the use of `eval()`-like methods.
   *
   * @see [no-implied-eval](https://eslint.org/docs/rules/no-implied-eval)
   */
  'no-implied-eval': Rule<[RuleLevel]>;
}
