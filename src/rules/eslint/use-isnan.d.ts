import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface UseIsnanRule {
  /**
   * Require calls to `isNaN()` when checking for `NaN`.
   *
   * @see [use-isnan](https://eslint.org/docs/latest/rules/use-isnan)
   */
  'use-isnan': Rule<
    [
      RuleLevel,
      {
        enforceForSwitchCase?: boolean;
        enforceForIndexOf?: boolean;
      },
    ]
  >;
}
