import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoThisBeforeSuperRule = {
  /**
   * Disallow `this`/`super` before calling `super()` in constructors.
   *
   * @see [no-this-before-super](https://eslint.org/docs/rules/no-this-before-super)
   */
  'no-this-before-super': Rule<[RuleLevel]>;
};
