import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferSetHasRule {
  /**
   * Prefer `Set#has()` over `Array#includes()` when checking for existence or non-existence.
   *
   * @see [prefer-set-has](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-set-has.md)
   */
  'unicorn/prefer-set-has': Rule<[RuleLevel]>;
}
