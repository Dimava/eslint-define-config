import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type UniqueOperationTypesRule = {
  /**
 * A GraphQL document is only valid if it has only one type per operation.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [unique-operation-types](https://the-guild.dev/graphql/eslint/rules/unique-operation-types)
 */
  '@graphql-eslint/unique-operation-types': Rule<[RuleLevel]>;
};
