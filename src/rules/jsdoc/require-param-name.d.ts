import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type RequireParamNameRule = {
  /**
   * Requires that all function parameters have names.
   *
   * @see [require-param-name](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-name)
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
};
