import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type UniqueArgumentNamesRule = {
  /**
 * A GraphQL field or directive is only valid if all supplied arguments are uniquely named.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [unique-argument-names](https://the-guild.dev/graphql/eslint/rules/unique-argument-names)
 */
  '@graphql-eslint/unique-argument-names': Rule<[RuleLevel]>;
};
