import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoLoneBlocksRule {
  /**
   * Disallow unnecessary nested blocks.
   *
   * @see [no-lone-blocks](https://eslint.org/docs/latest/rules/no-lone-blocks)
   */
  'no-lone-blocks': Rule<[RuleLevel]>;
}
