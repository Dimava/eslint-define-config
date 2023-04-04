import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoMisleadingCharacterClassRule = {
  /**
   * Disallow characters which are made with multiple code points in character class syntax.
   *
   * @see [no-misleading-character-class](https://eslint.org/docs/rules/no-misleading-character-class)
   */
  'no-misleading-character-class': Rule<[RuleLevel]>;
};
