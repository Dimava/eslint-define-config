import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireParamDescriptionRule {
  /**
   * Requires that each `@param` tag has a `description` value.
   *
   * @see [require-param-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-description)
   */
  'jsdoc/require-param-description': Rule<
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
        defaultDestructuredRootDescription?: string;
        setDefaultDestructuredRootDescription?: boolean;
      },
    ]
  >;
}
