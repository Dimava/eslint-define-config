import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ValueLiteralsOfCorrectTypeRule {
  /**
 * A GraphQL document is only valid if all value literals are of the type expected at their position.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [value-literals-of-correct-type](https://the-guild.dev/graphql/eslint/rules/value-literals-of-correct-type)
 */
  '@graphql-eslint/value-literals-of-correct-type': Rule<[RuleLevel]>;
}
