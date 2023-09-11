import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireReturnsTypeRule {
  /**
   * Requires that `@returns` tag has `type` value.
   *
   * @see [require-returns-type](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-type.md#repos-sticky-header)
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
