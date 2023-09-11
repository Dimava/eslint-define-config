import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ConsistentTypeAssertionsRule {
  /**
   * Enforce consistent usage of type assertions.
   *
   * @see [consistent-type-assertions](https://typescript-eslint.io/rules/consistent-type-assertions)
   */
  '@typescript-eslint/consistent-type-assertions': Rule<
    [
      RuleLevel,
      (
        | {
            assertionStyle: 'never';
          }
        | {
            assertionStyle: 'as' | 'angle-bracket';
            objectLiteralTypeAssertions?:
              | 'allow'
              | 'allow-as-parameter'
              | 'never';
          }
      ),
    ]
  >;
}
