import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireParamNameRule {
  /**
   * Requires that all function parameters have names.
   *
   * @see [require-param-name](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-name.md#repos-sticky-header)
   */
  'jsdoc/require-param-name': Rule<
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
