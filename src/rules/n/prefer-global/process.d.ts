import type { Rule } from '../../rule-config';
import type { RuleLevel } from '../../rule-severity';
export interface PreferGlobalProcessRule {
  /**
   * Enforce either `process` or `require("process")`.
   *
   * @see [prefer-global/process](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/prefer-global/process.md)
   */
  'n/prefer-global/process': Rule<[RuleLevel, 'always' | 'never']>;
}
