import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireReturnsDescriptionRule {
  /**
   * Requires that the `@returns` tag has a `description` value.
   *
   * @see [require-returns-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-description.md#repos-sticky-header)
   */
  'jsdoc/require-returns-description': Rule<
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
