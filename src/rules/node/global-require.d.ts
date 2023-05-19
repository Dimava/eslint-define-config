import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface GlobalRequireRule {
  /**
   * Require `require()` calls to be placed at top-level module scope.
   *
   * @see [global-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/global-require.md)
   */
  'node/global-require': Rule<[RuleLevel]>;
}
