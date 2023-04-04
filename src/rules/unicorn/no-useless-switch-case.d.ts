import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUselessSwitchCaseRule = {
  /**
   * Disallow useless case in switch statements.
   *
   * @see [no-useless-switch-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-useless-switch-case.md)
   */
  'unicorn/no-useless-switch-case': Rule<[RuleLevel]>;
};
