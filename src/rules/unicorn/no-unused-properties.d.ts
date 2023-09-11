import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnusedPropertiesRule {
  /**
   * Disallow unused object properties.
   *
   * @see [no-unused-properties](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-unused-properties.md)
   */
  'unicorn/no-unused-properties': Rule<[RuleLevel]>;
}
