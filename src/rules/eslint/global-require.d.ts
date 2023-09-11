import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface GlobalRequireRule {
  /**
   * Require `require()` calls to be placed at top-level module scope.
   *
   * @deprecated
   *
   * @see [global-require](https://eslint.org/docs/latest/rules/global-require)
   */
  'global-require': Rule<[RuleLevel]>;
}
