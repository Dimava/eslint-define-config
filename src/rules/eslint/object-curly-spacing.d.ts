import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ObjectCurlySpacingRule {
  /**
   * Enforce consistent spacing inside braces.
   *
   * @see [object-curly-spacing](https://eslint.org/docs/rules/object-curly-spacing)
   */
  'object-curly-spacing': Rule<
    [
      RuleLevel,
      'always' | 'never',
      {
        arraysInObjects?: boolean;
        objectsInObjects?: boolean;
      },
    ]
  >;
}
