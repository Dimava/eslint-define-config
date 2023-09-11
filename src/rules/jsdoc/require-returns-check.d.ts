import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireReturnsCheckRule {
  /**
   * Requires a return statement in function body if a `@returns` tag is specified in jsdoc comment.
   *
   * @see [require-returns-check](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-check.md#repos-sticky-header)
   */
  'jsdoc/require-returns-check': Rule<
    [
      RuleLevel,
      {
        exemptAsync?: boolean;
        exemptGenerators?: boolean;
        reportMissingReturnForUndefinedTypes?: boolean;
      },
    ]
  >;
}
