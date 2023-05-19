import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferPrototypeMethodsRule {
  /**
   * Prefer borrowing methods from the prototype instead of the instance.
   *
   * @see [prefer-prototype-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-prototype-methods.md)
   */
  'unicorn/prefer-prototype-methods': Rule<[RuleLevel]>;
}
