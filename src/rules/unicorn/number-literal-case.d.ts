import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NumberLiteralCaseRule {
  /**
   * Enforce proper case for numeric literals.
   *
   * @see [number-literal-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/number-literal-case.md)
   */
  'unicorn/number-literal-case': Rule<[RuleLevel]>;
}
