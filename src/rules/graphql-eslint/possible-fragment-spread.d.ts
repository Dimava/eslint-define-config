import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PossibleFragmentSpreadRule {
  /**
 * A fragment spread is only valid if the type condition could ever possibly be true: if there is a non-empty intersection of the possible parent types, and possible types which pass the type condition.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [possible-fragment-spread](https://the-guild.dev/graphql/eslint/rules/possible-fragment-spread)
 */
  '@graphql-eslint/possible-fragment-spread': Rule<[RuleLevel]>;
}
