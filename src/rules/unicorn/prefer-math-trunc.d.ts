import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferMathTruncRule {
  /**
   * Enforce the use of `Math.trunc` instead of bitwise operators.
   *
   * @see [prefer-math-trunc](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-math-trunc.md)
   */
  'unicorn/prefer-math-trunc': Rule<[RuleLevel]>;
}
