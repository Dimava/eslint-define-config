import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface UniqueVariableNamesRule {
  /**
 * A GraphQL operation is only valid if all its variables are uniquely named.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [unique-variable-names](https://the-guild.dev/graphql/eslint/rules/unique-variable-names)
 */
  '@graphql-eslint/unique-variable-names': Rule<[RuleLevel]>;
}
