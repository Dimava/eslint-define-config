import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ProcessExitAsThrowRule {
  /**
   * Require that `process.exit()` expressions use the same code path as `throw`.
   *
   * @see [process-exit-as-throw](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/process-exit-as-throw.md)
   */
  'n/process-exit-as-throw': Rule<[RuleLevel]>;
}
