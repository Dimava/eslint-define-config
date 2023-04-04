import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoThisAssignmentRule = {
  /**
   * Disallow assigning `this` to a variable.
   *
   * @see [no-this-assignment](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-this-assignment.md)
   */
  'unicorn/no-this-assignment': Rule<[RuleLevel]>;
};
