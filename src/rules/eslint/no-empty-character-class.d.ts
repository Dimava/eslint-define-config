import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoEmptyCharacterClassRule {
  /**
   * Disallow empty character classes in regular expressions.
   *
   * @see [no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class)
   */
  'no-empty-character-class': Rule<[RuleLevel]>;
}
