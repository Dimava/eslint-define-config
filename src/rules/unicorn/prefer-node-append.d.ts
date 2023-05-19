import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferNodeAppendRule {
  /**
   *
   * @deprecated
   *
   * @see [prefer-node-append](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/deprecated-rules.md#prefer-node-append)
   */
  'unicorn/prefer-node-append': Rule<[RuleLevel]>;
}
