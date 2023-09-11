import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferDefaultParametersRule {
  /**
   * Prefer default parameters over reassignment.
   *
   * @see [prefer-default-parameters](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-default-parameters.md)
   */
  'unicorn/prefer-default-parameters': Rule<[RuleLevel]>;
}
