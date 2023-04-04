import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoDeprecatedRule = {
  /**
   * Enforce that deprecated fields or enum values are not in use by operations.
   *
   * @see [no-deprecated](https://the-guild.dev/graphql/eslint/rules/no-deprecated)
   */
  '@graphql-eslint/no-deprecated': Rule<[RuleLevel]>;
};
