import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnreachableTypesRule {
  /**
   * Requires all types to be reachable at some level by root level fields.
   *
   * @see [no-unreachable-types](https://the-guild.dev/graphql/eslint/rules/no-unreachable-types)
   */
  '@graphql-eslint/no-unreachable-types': Rule<[RuleLevel]>;
}
