import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type StrictBooleanExpressionsRule = {
  /**
   * Disallow certain types in boolean expressions.
   *
   * @see [strict-boolean-expressions](https://typescript-eslint.io/rules/strict-boolean-expressions)
   */
  '@typescript-eslint/strict-boolean-expressions': Rule<
    [
      RuleLevel,
      {
        allowString?: boolean;
        allowNumber?: boolean;
        allowNullableObject?: boolean;
        allowNullableBoolean?: boolean;
        allowNullableString?: boolean;
        allowNullableNumber?: boolean;
        allowNullableEnum?: boolean;
        allowAny?: boolean;
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
      },
    ]
  >;
};
