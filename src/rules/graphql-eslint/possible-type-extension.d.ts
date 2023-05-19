import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PossibleTypeExtensionRule {
  /**
 * A type extension is only valid if the type is defined and has the same kind.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [possible-type-extension](https://the-guild.dev/graphql/eslint/rules/possible-type-extension)
 */
  '@graphql-eslint/possible-type-extension': Rule<[RuleLevel]>;
}
