import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUselessConstructorRule = {
  /**
   * Disallow unnecessary constructors.
   *
   * @see [no-useless-constructor](https://eslint.org/docs/rules/no-useless-constructor)
   */
  'no-useless-constructor': Rule<[RuleLevel]>;
};
