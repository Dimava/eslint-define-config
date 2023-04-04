import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ArrayBracketSpacingRule = {
  /**
   * Disallow or enforce spaces inside of brackets.
   *
   * @see [array-bracket-spacing](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-spacing.html)
   */
  'jsonc/array-bracket-spacing': Rule<
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
