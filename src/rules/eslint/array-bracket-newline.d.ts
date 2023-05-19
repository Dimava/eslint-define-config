import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ArrayBracketNewlineRule {
  /**
   * Enforce linebreaks after opening and before closing array brackets.
   *
   * @see [array-bracket-newline](https://eslint.org/docs/rules/array-bracket-newline)
   */
  'array-bracket-newline': Rule<
    [
      RuleLevel,
      (
        | ('always' | 'never' | 'consistent')
        | {
            multiline?: boolean;
            minItems?: number | null;
          }
      ),
    ]
  >;
}
