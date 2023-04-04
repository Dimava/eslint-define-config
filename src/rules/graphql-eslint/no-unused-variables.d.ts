import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUnusedVariablesRule = {
  /**
 * A GraphQL operation is only valid if all variables defined by an operation are used, either directly or within a spread fragment.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [no-unused-variables](https://the-guild.dev/graphql/eslint/rules/no-unused-variables)
 */
  '@graphql-eslint/no-unused-variables': Rule<[RuleLevel]>;
};
