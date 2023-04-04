import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoCaseInsensitiveEnumValuesDuplicatesRule = {
  /**
   * Disallow case-insensitive enum values duplicates.
   *
   * @see [no-case-insensitive-enum-values-duplicates](https://the-guild.dev/graphql/eslint/rules/no-case-insensitive-enum-values-duplicates)
   */
  '@graphql-eslint/no-case-insensitive-enum-values-duplicates': Rule<
    [RuleLevel]
  >;
};
