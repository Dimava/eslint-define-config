import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUselessConstructorRule {
  /**
   * Disallow unnecessary constructors.
   *
   * @see [no-useless-constructor](https://eslint.org/docs/latest/rules/no-useless-constructor)
   */
  'no-useless-constructor': Rule<[RuleLevel]>;
}
