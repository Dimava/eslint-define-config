import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUselessFallbackInSpreadRule {
  /**
   * Disallow useless fallback when spreading in object literals.
   *
   * @see [no-useless-fallback-in-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-useless-fallback-in-spread.md)
   */
  'unicorn/no-useless-fallback-in-spread': Rule<[RuleLevel]>;
}
