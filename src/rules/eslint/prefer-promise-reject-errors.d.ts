import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferPromiseRejectErrorsRule {
  /**
   * Require using Error objects as Promise rejection reasons.
   *
   * @see [prefer-promise-reject-errors](https://eslint.org/docs/rules/prefer-promise-reject-errors)
   */
  'prefer-promise-reject-errors': Rule<
    [
      RuleLevel,
      {
        allowEmptyReject?: boolean;
      },
    ]
  >;
}
