import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type CustomErrorDefinitionRule = {
  /**
   * Enforce correct `Error` subclassing.
   *
   * @see [custom-error-definition](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/custom-error-definition.md)
   */
  'unicorn/custom-error-definition': Rule<[RuleLevel]>;
};
