import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoNewBufferRule {
  /**
   * Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`.
   *
   * @see [no-new-buffer](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-new-buffer.md)
   */
  'unicorn/no-new-buffer': Rule<[RuleLevel]>;
}
