import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferLiteralEnumMemberRule = {
  /**
   * Require all enum members to be literal values.
   *
   * @see [prefer-literal-enum-member](https://typescript-eslint.io/rules/prefer-literal-enum-member)
   */
  '@typescript-eslint/prefer-literal-enum-member': Rule<
    [
      RuleLevel,
      {
        allowBitwiseExpressions?: boolean;
      },
    ]
  >;
};
