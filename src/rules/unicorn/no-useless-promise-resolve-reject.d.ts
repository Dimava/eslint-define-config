import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUselessPromiseResolveRejectRule = {
  /**
   * Disallow returning/yielding `Promise.resolve/reject()` in async functions or promise callbacks.
   *
   * @see [no-useless-promise-resolve-reject](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-useless-promise-resolve-reject.md)
   */
  'unicorn/no-useless-promise-resolve-reject': Rule<[RuleLevel]>;
};
