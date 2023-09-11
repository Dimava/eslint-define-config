import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferAwaitToThenRule {
  /**
   *
   * @see [prefer-await-to-then](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-then.md)
   */
  'promise/prefer-await-to-then': Rule<[RuleLevel]>;
}
