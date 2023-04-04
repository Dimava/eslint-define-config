import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type UniqueOperationNameRule = {
  /**
   * Enforce unique operation names across your project.
   *
   * @see [unique-operation-name](https://the-guild.dev/graphql/eslint/rules/unique-operation-name)
   */
  '@graphql-eslint/unique-operation-name': Rule<[RuleLevel]>;
};
