import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferTextContentRule = {
  /**
   *
   * @deprecated
   *
   * @see [prefer-text-content](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/deprecated-rules.md#prefer-text-content)
   */
  'unicorn/prefer-text-content': Rule<[RuleLevel]>;
};
