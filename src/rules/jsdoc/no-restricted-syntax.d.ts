import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoRestrictedSyntaxRule = {
  /**
   * Reports when certain comment structures are present.
   *
   * @see [no-restricted-syntax](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-restricted-syntax)
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
};
