import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoObjectAsDefaultParameterRule {
  /**
   * Disallow the use of objects as default parameters.
   *
   * @see [no-object-as-default-parameter](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-object-as-default-parameter.md)
   */
  'unicorn/no-object-as-default-parameter': Rule<[RuleLevel]>;
}
