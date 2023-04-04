import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoArrayForEachRule = {
  /**
   * Prefer `for…of` over the `forEach` method.
   *
   * @see [no-array-for-each](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-array-for-each.md)
   */
  'unicorn/no-array-for-each': Rule<[RuleLevel]>;
};
