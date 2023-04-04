import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoHashtagDescriptionRule = {
  /**
 * Requires to use `"""` or `"` for adding a GraphQL description instead of `#`.
Allows to use hashtag for comments, as long as it's not attached to an AST definition.
 *  
 * @see [no-hashtag-description](https://the-guild.dev/graphql/eslint/rules/no-hashtag-description)
 */
  '@graphql-eslint/no-hashtag-description': Rule<[RuleLevel]>;
};
