import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoProcessExitRule {
  /**
   * Disallow the use of `process.exit()`.
   *
   * @see [no-process-exit](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-process-exit.md)
   */
  'n/no-process-exit': Rule<[RuleLevel]>;
}
