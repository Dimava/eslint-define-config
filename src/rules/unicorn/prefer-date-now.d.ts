import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferDateNowRule {
  /**
   * Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch.
   *
   * @see [prefer-date-now](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-date-now.md)
   */
  'unicorn/prefer-date-now': Rule<[RuleLevel]>;
}
