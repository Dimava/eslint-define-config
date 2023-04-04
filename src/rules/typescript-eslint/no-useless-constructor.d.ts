import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUselessConstructorRule = {
  /**
   * Disallow unnecessary constructors.
   *
   * @see [no-useless-constructor](https://typescript-eslint.io/rules/no-useless-constructor)
   */
  '@typescript-eslint/no-useless-constructor': Rule<[RuleLevel]>;
};
