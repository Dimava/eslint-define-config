import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoProcessExitRule {
  /**
   * Disallow `process.exit()`.
   *
   * @see [no-process-exit](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-process-exit.md)
   */
  'unicorn/no-process-exit': Rule<[RuleLevel]>;
}
