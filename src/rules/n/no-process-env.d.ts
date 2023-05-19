import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoProcessEnvRule {
  /**
   * Disallow the use of `process.env`.
   *
   * @see [no-process-env](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-process-env.md)
   */
  'n/no-process-env': Rule<[RuleLevel]>;
}
