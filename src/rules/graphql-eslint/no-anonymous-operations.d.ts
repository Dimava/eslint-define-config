import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoAnonymousOperationsRule = {
  /**
   * Require name for your GraphQL operations. This is useful since most GraphQL client libraries are using the operation name for caching purposes.
   *
   * @see [no-anonymous-operations](https://the-guild.dev/graphql/eslint/rules/no-anonymous-operations)
   */
  '@graphql-eslint/no-anonymous-operations': Rule<[RuleLevel]>;
};
