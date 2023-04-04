import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ArrayBracketSpacingRule = {
  /**
   * Enforce consistent spacing inside array brackets.
   *
   * @see [array-bracket-spacing](https://eslint.org/docs/rules/array-bracket-spacing)
   */
  'array-bracket-spacing': Rule<
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
};
