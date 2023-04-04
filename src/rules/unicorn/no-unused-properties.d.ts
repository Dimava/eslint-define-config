import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUnusedPropertiesRule = {
  /**
   * Disallow unused object properties.
   *
   * @see [no-unused-properties](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-unused-properties.md)
   */
  'unicorn/no-unused-properties': Rule<[RuleLevel]>;
};
