import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoGlobalAssignRule {
  /**
   * Disallow assignments to native objects or read-only global variables.
   *
   * @see [no-global-assign](https://eslint.org/docs/rules/no-global-assign)
   */
  'no-global-assign': Rule<
    [
      RuleLevel,
      {
        exceptions?: string[];
      },
    ]
  >;
}
