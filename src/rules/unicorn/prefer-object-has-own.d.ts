import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferObjectHasOwnRule {
  /**
   *
   * @deprecated
   *
   * @see [prefer-object-has-own](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/deprecated-rules.md#prefer-object-has-own)
   */
  'unicorn/prefer-object-has-own': Rule<[RuleLevel]>;
}
