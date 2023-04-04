import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type LinebreakStyleRule = {
  /**
   * Enforce consistent linebreak style.
   *
   * @see [linebreak-style](https://eslint.org/docs/rules/linebreak-style)
   */
  'linebreak-style': Rule<[RuleLevel, 'unix' | 'windows']>;
};
