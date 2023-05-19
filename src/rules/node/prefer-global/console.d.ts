import type { Rule } from '../../rule-config';
import type { RuleLevel } from '../../rule-severity';
export interface PreferGlobalConsoleRule {
  /**
   * Enforce either `console` or `require("console")`.
   *
   * @see [prefer-global/console](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/console.md)
   */
  'node/prefer-global/console': Rule<[RuleLevel, 'always' | 'never']>;
}
