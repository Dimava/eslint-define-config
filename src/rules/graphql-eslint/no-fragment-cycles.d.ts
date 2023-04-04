import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoFragmentCyclesRule = {
  /**
 * A GraphQL fragment is only valid when it does not have cycles in fragments usage.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [no-fragment-cycles](https://the-guild.dev/graphql/eslint/rules/no-fragment-cycles)
 */
  '@graphql-eslint/no-fragment-cycles': Rule<[RuleLevel]>;
};
