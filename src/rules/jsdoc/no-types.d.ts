import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoTypesRule {
  /**
   * This rule reports types being used on `@param` or `@returns`.
   *
   * @see [no-types](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-types.md#repos-sticky-header)
   */
  'jsdoc/no-types': Rule<
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
