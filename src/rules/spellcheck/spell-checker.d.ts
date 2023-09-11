import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface SpellCheckerRule {
  /**
   * Spell check.
   *
   */
  'spellcheck/spell-checker': Rule<
    [
      RuleLevel,
      {
        comments?: boolean;
        strings?: boolean;
        identifiers?: boolean;
        ignoreRequire?: boolean;
        enableUpperCaseUnderscoreCheck?: boolean;
        templates?: boolean;
        lang?: string;
        langDir?: string;
        skipWords?: any[];
        skipIfMatch?: any[];
        skipWordIfMatch?: any[];
        minLength?: number;
      },
    ]
  >;
}
