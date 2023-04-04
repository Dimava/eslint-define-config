import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ScalarLeafsRule = {
  /**
 * A GraphQL document is valid only if all leaf fields (fields without sub selections) are of scalar or enum types.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [scalar-leafs](https://the-guild.dev/graphql/eslint/rules/scalar-leafs)
 */
  '@graphql-eslint/scalar-leafs': Rule<[RuleLevel]>;
};
