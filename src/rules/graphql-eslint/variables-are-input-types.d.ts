import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface VariablesAreInputTypesRule {
  /**
 * A GraphQL operation is only valid if all the variables it defines are of input types (scalar, enum, or input object).
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [variables-are-input-types](https://the-guild.dev/graphql/eslint/rules/variables-are-input-types)
 */
  '@graphql-eslint/variables-are-input-types': Rule<[RuleLevel]>;
}
