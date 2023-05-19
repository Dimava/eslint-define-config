import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoArrayCallbackReferenceRule {
  /**
   * Prevent passing a function reference directly to iterator methods.
   *
   * @see [no-array-callback-reference](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-array-callback-reference.md)
   */
  'unicorn/no-array-callback-reference': Rule<[RuleLevel]>;
}
