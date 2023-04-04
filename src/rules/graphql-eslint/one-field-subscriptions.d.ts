import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type OneFieldSubscriptionsRule = {
  /**
 * A GraphQL subscription is valid only if it contains a single root field.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [one-field-subscriptions](https://the-guild.dev/graphql/eslint/rules/one-field-subscriptions)
 */
  '@graphql-eslint/one-field-subscriptions': Rule<[RuleLevel]>;
};
