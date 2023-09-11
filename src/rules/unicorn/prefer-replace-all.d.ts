import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferReplaceAllRule {
  /**
   *
   * @deprecated
   *
   * @see [prefer-replace-all](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/deprecated-rules.md#prefer-replace-all)
   */
  'unicorn/prefer-replace-all': Rule<[RuleLevel]>;
}
