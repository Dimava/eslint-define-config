import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type FieldsOnCorrectTypeRule = {
  /**
 * A GraphQL document is only valid if all fields selected are defined by the parent type, or are an allowed meta field such as `__typename`.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [fields-on-correct-type](https://the-guild.dev/graphql/eslint/rules/fields-on-correct-type)
 */
  '@graphql-eslint/fields-on-correct-type': Rule<[RuleLevel]>;
};
