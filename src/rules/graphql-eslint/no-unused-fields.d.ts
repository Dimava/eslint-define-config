import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUnusedFieldsRule = {
  /**
   * Requires all fields to be used at some level by siblings operations.
   *
   * @see [no-unused-fields](https://the-guild.dev/graphql/eslint/rules/no-unused-fields)
   */
  '@graphql-eslint/no-unused-fields': Rule<[RuleLevel]>;
};
