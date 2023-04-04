import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoOnePlaceFragmentsRule = {
  /**
   * Disallow fragments that are used only in one place.
   *
   * @see [no-one-place-fragments](https://the-guild.dev/graphql/eslint/rules/no-one-place-fragments)
   */
  '@graphql-eslint/no-one-place-fragments': Rule<[RuleLevel]>;
};
