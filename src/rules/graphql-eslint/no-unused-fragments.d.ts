import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUnusedFragmentsRule = {
  /**
 * A GraphQL document is only valid if all fragment definitions are spread within operations, or spread within other fragments spread within operations.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [no-unused-fragments](https://the-guild.dev/graphql/eslint/rules/no-unused-fragments)
 */
  '@graphql-eslint/no-unused-fragments': Rule<[RuleLevel]>;
};
