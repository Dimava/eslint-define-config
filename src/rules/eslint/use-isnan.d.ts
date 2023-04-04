import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type UseIsnanRule = {
  /**
   * Require calls to `isNaN()` when checking for `NaN`.
   *
   * @see [use-isnan](https://eslint.org/docs/rules/use-isnan)
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
};
