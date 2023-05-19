import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferNodeRemoveRule {
  /**
   *
   * @deprecated
   *
   * @see [prefer-node-remove](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/deprecated-rules.md#prefer-node-remove)
   */
  'unicorn/prefer-node-remove': Rule<[RuleLevel]>;
}
