import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface FlowSequenceBracketSpacingRule {
  /**
   * Enforce consistent spacing inside flow sequence brackets.
   *
   * @see [flow-sequence-bracket-spacing](https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-sequence-bracket-spacing.html)
   */
  'yml/flow-sequence-bracket-spacing': Rule<
    [
      RuleLevel,
      'always' | 'never',
      {
        singleValue?: boolean;
        objectsInArrays?: boolean;
        arraysInArrays?: boolean;
      },
    ]
  >;
}
