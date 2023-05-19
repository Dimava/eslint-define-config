import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface LoneAnonymousOperationRule {
  /**
 * A GraphQL document that contains an anonymous operation (the `query` short-hand) is only valid if it contains only that one operation definition.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [lone-anonymous-operation](https://the-guild.dev/graphql/eslint/rules/lone-anonymous-operation)
 */
  '@graphql-eslint/lone-anonymous-operation': Rule<[RuleLevel]>;
}
