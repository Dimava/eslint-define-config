import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type UniqueFragmentNameRule = {
  /**
   * Enforce unique fragment names across your project.
   *
   * @see [unique-fragment-name](https://the-guild.dev/graphql/eslint/rules/unique-fragment-name)
   */
  '@graphql-eslint/unique-fragment-name': Rule<[RuleLevel]>;
};
