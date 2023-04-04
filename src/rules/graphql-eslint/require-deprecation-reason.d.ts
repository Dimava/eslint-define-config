import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type RequireDeprecationReasonRule = {
  /**
   * Require all deprecation directives to specify a reason.
   *
   * @see [require-deprecation-reason](https://the-guild.dev/graphql/eslint/rules/require-deprecation-reason)
   */
  '@graphql-eslint/require-deprecation-reason': Rule<[RuleLevel]>;
};
