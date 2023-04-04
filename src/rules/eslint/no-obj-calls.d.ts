import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoObjCallsRule = {
  /**
   * Disallow calling global object properties as functions.
   *
   * @see [no-obj-calls](https://eslint.org/docs/rules/no-obj-calls)
   */
  'no-obj-calls': Rule<[RuleLevel]>;
};
