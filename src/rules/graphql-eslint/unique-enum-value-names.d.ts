import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface UniqueEnumValueNamesRule {
  /**
 * A GraphQL enum type is only valid if all its values are uniquely named.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [unique-enum-value-names](https://the-guild.dev/graphql/eslint/rules/unique-enum-value-names)
 */
  '@graphql-eslint/unique-enum-value-names': Rule<[RuleLevel]>;
}
