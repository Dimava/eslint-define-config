import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRestrictedSyntaxRule {
  /**
   * Reports when certain comment structures are present.
   *
   * @see [no-restricted-syntax](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-restricted-syntax.md#repos-sticky-header)
   */
  'jsdoc/no-restricted-syntax': Rule<
    [
      RuleLevel,
      {
        contexts: (
          | string
          | {
              comment?: string;
              context?: string;
              message?: string;
            }
        )[];
      },
    ]
  >;
}
