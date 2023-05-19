import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoProcessEnvRule {
  /**
   * Disallow the use of `process.env`.
   *
   * @deprecated
   *
   * @see [no-process-env](https://eslint.org/docs/rules/no-process-env)
   */
  'no-process-env': Rule<[RuleLevel]>;
}
