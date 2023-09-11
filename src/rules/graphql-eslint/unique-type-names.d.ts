import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface UniqueTypeNamesRule {
  /**
 * A GraphQL document is only valid if all defined types have unique names.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [unique-type-names](https://the-guild.dev/graphql/eslint/rules/unique-type-names)
 */
  '@graphql-eslint/unique-type-names': Rule<[RuleLevel]>;
}
