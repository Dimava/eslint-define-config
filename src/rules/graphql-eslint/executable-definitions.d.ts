import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ExecutableDefinitionsRule {
  /**
 * A GraphQL document is only valid for execution if all definitions are either operation or fragment definitions.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [executable-definitions](https://the-guild.dev/graphql/eslint/rules/executable-definitions)
 */
  '@graphql-eslint/executable-definitions': Rule<[RuleLevel]>;
}
