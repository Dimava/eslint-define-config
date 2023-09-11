import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoReturnInFinallyRule {
  /**
   *
   * @see [no-return-in-finally](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-return-in-finally.md)
   */
  'promise/no-return-in-finally': Rule<[RuleLevel]>;
}
