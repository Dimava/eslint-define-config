import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ArrayBracketNewlineRule {
  /**
   * Enforce line breaks after opening and before closing array brackets.
   *
   * @see [array-bracket-newline](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-newline.html)
   */
  'jsonc/array-bracket-newline': Rule<
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
