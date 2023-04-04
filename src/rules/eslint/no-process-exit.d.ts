import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoProcessExitRule = {
  /**
   * Disallow the use of `process.exit()`.
   *
   * @deprecated
   *
   * @see [no-process-exit](https://eslint.org/docs/rules/no-process-exit)
   */
  'no-process-exit': Rule<[RuleLevel]>;
};
