import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoLoneBlocksRule = {
  /**
   * Disallow unnecessary nested blocks.
   *
   * @see [no-lone-blocks](https://eslint.org/docs/rules/no-lone-blocks)
   */
  'no-lone-blocks': Rule<[RuleLevel]>;
};
