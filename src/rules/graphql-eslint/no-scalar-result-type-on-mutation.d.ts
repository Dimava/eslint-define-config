import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoScalarResultTypeOnMutationRule {
  /**
   * Avoid scalar result type on mutation type to make sure to return a valid state.
   *
   * @see [no-scalar-result-type-on-mutation](https://the-guild.dev/graphql/eslint/rules/no-scalar-result-type-on-mutation)
   */
  '@graphql-eslint/no-scalar-result-type-on-mutation': Rule<[RuleLevel]>;
}
