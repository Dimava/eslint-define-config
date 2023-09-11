import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUselessEscapeRule {
  /**
   * Disallow unnecessary escape characters.
   *
   * @see [no-useless-escape](https://eslint.org/docs/latest/rules/no-useless-escape)
   */
  'no-useless-escape': Rule<[RuleLevel]>;
}
