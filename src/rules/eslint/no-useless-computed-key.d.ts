import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUselessComputedKeyRule {
  /**
   * Disallow unnecessary computed property keys in objects and classes.
   *
   * @see [no-useless-computed-key](https://eslint.org/docs/rules/no-useless-computed-key)
   */
  'no-useless-computed-key': Rule<
    [
      RuleLevel,
      {
        enforceForClassMembers?: boolean;
      },
    ]
  >;
}
