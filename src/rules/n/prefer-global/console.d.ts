import type { Rule } from '../../rule-config';
import type { RuleLevel } from '../../rule-severity';
export interface PreferGlobalConsoleRule {
  /**
   * Enforce either `console` or `require("console")`.
   *
   * @see [prefer-global/console](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/prefer-global/console.md)
   */
  'n/prefer-global/console': Rule<[RuleLevel, 'always' | 'never']>;
}
