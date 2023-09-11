import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUndefinedVariablesRule {
  /**
 * A GraphQL operation is only valid if all variables encountered, both directly and via fragment spreads, are defined by that operation.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [no-undefined-variables](https://the-guild.dev/graphql/eslint/rules/no-undefined-variables)
 */
  '@graphql-eslint/no-undefined-variables': Rule<[RuleLevel]>;
}
