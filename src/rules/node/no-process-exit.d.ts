import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoProcessExitRule = {
  /**
   * Disallow the use of `process.exit()`.
   *
   * @see [no-process-exit](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-process-exit.md)
   */
  'node/no-process-exit': Rule<[RuleLevel]>;
};
