import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoEqNullRule = {
  /**
   * Disallow `null` comparisons without type-checking operators.
   *
   * @see [no-eq-null](https://eslint.org/docs/rules/no-eq-null)
   */
  'no-eq-null': Rule<[RuleLevel]>;
};
