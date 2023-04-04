import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferIncludesRule = {
  /**
   * Prefer `.includes()` over `.indexOf()` and `Array#some()` when checking for existence or non-existence.
   *
   * @see [prefer-includes](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-includes.md)
   */
  'unicorn/prefer-includes': Rule<[RuleLevel]>;
};
