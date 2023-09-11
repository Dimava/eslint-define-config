import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoThisAssignmentRule {
  /**
   * Disallow assigning `this` to a variable.
   *
   * @see [no-this-assignment](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-this-assignment.md)
   */
  'unicorn/no-this-assignment': Rule<[RuleLevel]>;
}
