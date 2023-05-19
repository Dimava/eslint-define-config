import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUselessConcatRule {
  /**
   * Disallow unnecessary concatenation of literals or template literals.
   *
   * @see [no-useless-concat](https://eslint.org/docs/rules/no-useless-concat)
   */
  'no-useless-concat': Rule<[RuleLevel]>;
}
