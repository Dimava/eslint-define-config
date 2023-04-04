import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type RequireParamTypeRule = {
  /**
   * Requires that each `@param` tag has a `type` value.
   *
   * @see [require-param-type](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-type)
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
};
