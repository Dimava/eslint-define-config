import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoAbusiveEslintDisableRule = {
  /**
   * Enforce specifying rules to disable in `eslint-disable` comments.
   *
   * @see [no-abusive-eslint-disable](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-abusive-eslint-disable.md)
   */
  'unicorn/no-abusive-eslint-disable': Rule<[RuleLevel]>;
};
