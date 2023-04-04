import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NewForBuiltinsRule = {
  /**
   * Enforce the use of `new` for all builtins, except `String`, `Number`, `Boolean`, `Symbol` and `BigInt`.
   *
   * @see [new-for-builtins](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/new-for-builtins.md)
   */
  'unicorn/new-for-builtins': Rule<[RuleLevel]>;
};
