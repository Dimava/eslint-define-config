import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoMissingSyntaxRule {
  /**
   * Reports when certain comment structures are always expected.
   *
   * @see [no-missing-syntax](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-missing-syntax.md#repos-sticky-header)
   */
  'jsdoc/no-missing-syntax': Rule<
    [
      RuleLevel,
      {
        contexts?: (
          | string
          | {
              comment?: string;
              context?: string;
              message?: string;
              minimum?: number;
            }
        )[];
      },
    ]
  >;
}
