import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface LinebreakStyleRule {
  /**
   * Enforce consistent linebreak style.
   *
   * @see [linebreak-style](https://eslint.org/docs/latest/rules/linebreak-style)
   */
  'linebreak-style': Rule<[RuleLevel, 'unix' | 'windows']>;
}
