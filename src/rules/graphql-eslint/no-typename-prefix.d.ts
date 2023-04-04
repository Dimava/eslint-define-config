import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoTypenamePrefixRule = {
  /**
   * Enforces users to avoid using the type name in a field name while defining your schema.
   *
   * @see [no-typename-prefix](https://the-guild.dev/graphql/eslint/rules/no-typename-prefix)
   */
  '@graphql-eslint/no-typename-prefix': Rule<[RuleLevel]>;
};
