import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type LoneSchemaDefinitionRule = {
  /**
 * A GraphQL document is only valid if it contains only one schema definition.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [lone-schema-definition](https://the-guild.dev/graphql/eslint/rules/lone-schema-definition)
 */
  '@graphql-eslint/lone-schema-definition': Rule<[RuleLevel]>;
};
