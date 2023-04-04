import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoArrayMethodThisArgumentRule = {
  /**
   * Disallow using the `this` argument in array methods.
   *
   * @see [no-array-method-this-argument](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-array-method-this-argument.md)
   */
  'unicorn/no-array-method-this-argument': Rule<[RuleLevel]>;
};
