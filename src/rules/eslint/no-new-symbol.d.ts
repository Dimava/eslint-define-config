import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoNewSymbolRule = {
  /**
   * Disallow `new` operators with the `Symbol` object.
   *
   * @see [no-new-symbol](https://eslint.org/docs/rules/no-new-symbol)
   */
  'no-new-symbol': Rule<[RuleLevel]>;
};
