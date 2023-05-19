import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUselessLengthCheckRule {
  /**
   * Disallow useless array length check.
   *
   * @see [no-useless-length-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-useless-length-check.md)
   */
  'unicorn/no-useless-length-check': Rule<[RuleLevel]>;
}
