import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface FlowSequenceBracketNewlineRule {
  /**
   * Enforce linebreaks after opening and before closing flow sequence brackets.
   *
   * @see [flow-sequence-bracket-newline](https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-sequence-bracket-newline.html)
   */
  'yml/flow-sequence-bracket-newline': Rule<
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
