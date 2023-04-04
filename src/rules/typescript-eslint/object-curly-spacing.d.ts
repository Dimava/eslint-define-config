import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ObjectCurlySpacingRule = {
  /**
   * Enforce consistent spacing inside braces.
   *
   * @see [object-curly-spacing](https://typescript-eslint.io/rules/object-curly-spacing)
   */
  '@typescript-eslint/object-curly-spacing': Rule<
    [
      RuleLevel,
      'always' | 'never',
      {
        arraysInObjects?: boolean;
        objectsInObjects?: boolean;
      },
    ]
  >;
};
