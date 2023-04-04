import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type RequireYieldsCheckRule = {
  /**
   * Requires a yield statement in function body if a `@yields` tag is specified in jsdoc comment.
   *
   * @see [require-yields-check](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-yields-check)
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
};
