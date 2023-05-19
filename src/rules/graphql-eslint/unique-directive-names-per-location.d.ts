import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface UniqueDirectiveNamesPerLocationRule {
  /**
 * A GraphQL document is only valid if all non-repeatable directives at a given location are uniquely named.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [unique-directive-names-per-location](https://the-guild.dev/graphql/eslint/rules/unique-directive-names-per-location)
 */
  '@graphql-eslint/unique-directive-names-per-location': Rule<[RuleLevel]>;
}
