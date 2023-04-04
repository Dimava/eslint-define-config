import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type RequireImportFragmentRule = {
  /**
   * Require fragments to be imported via an import expression.
   *
   * @see [require-import-fragment](https://github.com/B2o5T/graphql-eslint/blob/master/docs/rules/require-import-fragment.md)
   */
  '@graphql-eslint/require-import-fragment': Rule<[RuleLevel]>;
};
