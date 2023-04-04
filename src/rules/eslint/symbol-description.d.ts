import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type SymbolDescriptionRule = {
  /**
   * Require symbol descriptions.
   *
   * @see [symbol-description](https://eslint.org/docs/rules/symbol-description)
   */
  'symbol-description': Rule<[RuleLevel]>;
};
