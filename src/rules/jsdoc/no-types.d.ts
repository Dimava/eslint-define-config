import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoTypesRule {
  /**
   * This rule reports types being used on `@param` or `@returns`.
   *
   * @see [no-types](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-types)
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
