import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferAtRule {
  /**
   * Prefer `.at()` method for index access and `String#charAt()`.
   *
   * @see [prefer-at](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-at.md)
   */
  'unicorn/prefer-at': Rule<
    [
      RuleLevel,
      {
        getLastElementFunctions?: any[];
        checkAllIndexAccess?: boolean;
      },
    ]
  >;
}
