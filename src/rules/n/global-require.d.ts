import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface GlobalRequireRule {
  /**
   * Require `require()` calls to be placed at top-level module scope.
   *
   * @see [global-require](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/global-require.md)
   */
  'n/global-require': Rule<[RuleLevel]>;
}
