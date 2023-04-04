import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoProcessEnvRule = {
  /**
   * Disallow the use of `process.env`.
   *
   * @see [no-process-env](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-process-env.md)
   */
  'node/no-process-env': Rule<[RuleLevel]>;
};
