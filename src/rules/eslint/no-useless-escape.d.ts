import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUselessEscapeRule = {
  /**
   * Disallow unnecessary escape characters.
   *
   * @see [no-useless-escape](https://eslint.org/docs/rules/no-useless-escape)
   */
  'no-useless-escape': Rule<[RuleLevel]>;
};
