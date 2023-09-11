import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDefaultsRule {
  /**
   * This rule reports defaults being used on the relevant portion of `@param` or `@default`.
   *
   * @see [no-defaults](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-defaults.md#repos-sticky-header)
   */
  'jsdoc/no-defaults': Rule<
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
        noOptionalParamNames?: boolean;
      },
    ]
  >;
}
