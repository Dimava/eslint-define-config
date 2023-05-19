import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoAsyncPromiseExecutorRule {
  /**
   * Disallow using an async function as a Promise executor.
   *
   * @see [no-async-promise-executor](https://eslint.org/docs/rules/no-async-promise-executor)
   */
  'no-async-promise-executor': Rule<[RuleLevel]>;
}
