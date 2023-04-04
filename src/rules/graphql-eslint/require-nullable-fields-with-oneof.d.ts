import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type RequireNullableFieldsWithOneofRule = {
  /**
   * Require `input` or `type` fields to be non-nullable with `@oneOf` directive.
   *
   * @see [require-nullable-fields-with-oneof](https://the-guild.dev/graphql/eslint/rules/require-nullable-fields-with-oneof)
   */
  '@graphql-eslint/require-nullable-fields-with-oneof': Rule<[RuleLevel]>;
};
