import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type VariablesInAllowedPositionRule = {
  /**
 * Variables passed to field arguments conform to type.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [variables-in-allowed-position](https://the-guild.dev/graphql/eslint/rules/variables-in-allowed-position)
 */
  '@graphql-eslint/variables-in-allowed-position': Rule<[RuleLevel]>;
};
