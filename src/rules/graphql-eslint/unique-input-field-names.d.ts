import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type UniqueInputFieldNamesRule = {
  /**
 * A GraphQL input object value is only valid if all supplied fields are uniquely named.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [unique-input-field-names](https://the-guild.dev/graphql/eslint/rules/unique-input-field-names)
 */
  '@graphql-eslint/unique-input-field-names': Rule<[RuleLevel]>;
};
