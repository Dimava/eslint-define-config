import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireThrowsRule {
  /**
   * Requires that throw statements are documented.
   *
   * @see [require-throws](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-throws)
   */
  'jsdoc/require-throws': Rule<
    [
      RuleLevel,
      {
        contexts?: (
          | string
          | {
              comment?: string;
              context?: string;
            }
        )[];
        exemptedBy?: string[];
      },
    ]
  >;
}
