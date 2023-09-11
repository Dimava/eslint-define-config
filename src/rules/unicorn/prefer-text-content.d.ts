import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferTextContentRule {
  /**
   *
   * @deprecated
   *
   * @see [prefer-text-content](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/deprecated-rules.md#prefer-text-content)
   */
  'unicorn/prefer-text-content': Rule<[RuleLevel]>;
}
