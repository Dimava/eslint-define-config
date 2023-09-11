import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface KnownFragmentNamesRule {
  /**
 * A GraphQL document is only valid if all `...Fragment` fragment spreads refer to fragments defined in the same document.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [known-fragment-names](https://the-guild.dev/graphql/eslint/rules/known-fragment-names)
 */
  '@graphql-eslint/known-fragment-names': Rule<[RuleLevel]>;
}
