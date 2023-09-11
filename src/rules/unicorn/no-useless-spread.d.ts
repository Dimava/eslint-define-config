import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUselessSpreadRule {
  /**
   * Disallow unnecessary spread.
   *
   * @see [no-useless-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-useless-spread.md)
   */
  'unicorn/no-useless-spread': Rule<[RuleLevel]>;
}
