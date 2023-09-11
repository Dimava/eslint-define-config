import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface KnownArgumentNamesRule {
  /**
 * A GraphQL field is only valid if all supplied arguments are defined by that field.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [known-argument-names](https://the-guild.dev/graphql/eslint/rules/known-argument-names)
 */
  '@graphql-eslint/known-argument-names': Rule<[RuleLevel]>;
}
