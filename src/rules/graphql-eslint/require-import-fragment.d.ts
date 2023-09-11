import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireImportFragmentRule {
  /**
   * Require fragments to be imported via an import expression.
   *
   * @see [require-import-fragment](https://the-guild.dev/graphql/eslint/rules/require-import-fragment)
   */
  '@graphql-eslint/require-import-fragment': Rule<[RuleLevel]>;
}
