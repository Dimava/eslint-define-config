import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireYieldsCheckRule {
  /**
   * Requires a yield statement in function body if a `@yields` tag is specified in jsdoc comment.
   *
   * @see [require-yields-check](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields-check.md#repos-sticky-header)
   */
  'jsdoc/require-yields-check': Rule<
    [
      RuleLevel,
      {
        checkGeneratorsOnly?: boolean;
        contexts?: (
          | string
          | {
              comment?: string;
              context?: string;
            }
        )[];
        exemptedBy?: string[];
        next?: boolean;
      },
    ]
  >;
}
