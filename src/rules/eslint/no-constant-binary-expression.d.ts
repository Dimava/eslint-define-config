import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoConstantBinaryExpressionRule = {
  /**
   * Disallow expressions where the operation doesn't affect the value.
   *
   * @see [no-constant-binary-expression](https://eslint.org/docs/rules/no-constant-binary-expression)
   */
  'no-constant-binary-expression': Rule<[RuleLevel]>;
};
