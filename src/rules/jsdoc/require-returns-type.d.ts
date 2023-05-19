import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireReturnsTypeRule {
  /**
   * Requires that `@returns` tag has `type` value.
   *
   * @see [require-returns-type](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-type)
   */
  'jsdoc/require-returns-type': Rule<
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
      },
    ]
  >;
}
