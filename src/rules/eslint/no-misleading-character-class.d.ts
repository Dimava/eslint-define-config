import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoMisleadingCharacterClassRule {
  /**
   * Disallow characters which are made with multiple code points in character class syntax.
   *
   * @see [no-misleading-character-class](https://eslint.org/docs/latest/rules/no-misleading-character-class)
   */
  'no-misleading-character-class': Rule<[RuleLevel]>;
}
