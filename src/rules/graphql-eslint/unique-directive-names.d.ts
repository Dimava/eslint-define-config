import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type UniqueDirectiveNamesRule = {
  /**
 * A GraphQL document is only valid if all defined directives have unique names.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [unique-directive-names](https://the-guild.dev/graphql/eslint/rules/unique-directive-names)
 */
  '@graphql-eslint/unique-directive-names': Rule<[RuleLevel]>;
};
