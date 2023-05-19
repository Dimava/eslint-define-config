import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ComputedPropertySpacingRule {
  /**
   * Enforce consistent spacing inside computed property brackets.
   *
   * @see [computed-property-spacing](https://eslint.org/docs/rules/computed-property-spacing)
   */
  'computed-property-spacing': Rule<
    [
      RuleLevel,
      'always' | 'never',
      {
        enforceForClassMembers?: boolean;
      },
    ]
  >;
}
