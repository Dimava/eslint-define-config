import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoVarRequiresRule = {
  /**
   * Disallow `require` statements except in import statements.
   *
   * @see [no-var-requires](https://typescript-eslint.io/rules/no-var-requires)
   */
  '@typescript-eslint/no-var-requires': Rule<[RuleLevel]>;
};
