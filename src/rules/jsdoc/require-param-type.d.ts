import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireParamTypeRule {
  /**
   * Requires that each `@param` tag has a `type` value.
   *
   * @see [require-param-type](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-type.md#repos-sticky-header)
   */
  'jsdoc/require-param-type': Rule<
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
        defaultDestructuredRootType?: string;
        setDefaultDestructuredRootType?: boolean;
      },
    ]
  >;
}
