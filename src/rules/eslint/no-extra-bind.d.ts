import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoExtraBindRule {
  /**
   * Disallow unnecessary calls to `.bind()`.
   *
   * @see [no-extra-bind](https://eslint.org/docs/rules/no-extra-bind)
   */
  'no-extra-bind': Rule<[RuleLevel]>;
}
