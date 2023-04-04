import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type GlobalRequireRule = {
  /**
   * Require `require()` calls to be placed at top-level module scope.
   *
   * @deprecated
   *
   * @see [global-require](https://eslint.org/docs/rules/global-require)
   */
  'global-require': Rule<[RuleLevel]>;
};
