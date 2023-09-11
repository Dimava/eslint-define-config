import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireNullableResultInRootRule {
  /**
   * Require nullable fields in root types.
   *
   * @see [require-nullable-result-in-root](https://the-guild.dev/graphql/eslint/rules/require-nullable-result-in-root)
   */
  '@graphql-eslint/require-nullable-result-in-root': Rule<[RuleLevel]>;
}
