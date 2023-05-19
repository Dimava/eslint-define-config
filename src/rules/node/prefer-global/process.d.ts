import type { Rule } from '../../rule-config';
import type { RuleLevel } from '../../rule-severity';
export interface PreferGlobalProcessRule {
  /**
   * Enforce either `process` or `require("process")`.
   *
   * @see [prefer-global/process](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/process.md)
   */
  'node/prefer-global/process': Rule<[RuleLevel, 'always' | 'never']>;
}
