import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferSetSizeRule {
  /**
   * Prefer using `Set#size` instead of `Array#length`.
   *
   * @see [prefer-set-size](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-set-size.md)
   */
  'unicorn/prefer-set-size': Rule<[RuleLevel]>;
}
