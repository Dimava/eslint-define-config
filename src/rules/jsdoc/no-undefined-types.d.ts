import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUndefinedTypesRule {
  /**
   * Checks that types in jsdoc comments are defined.
   *
   * @see [no-undefined-types](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-undefined-types.md#repos-sticky-header)
   */
  'jsdoc/no-undefined-types': Rule<
    [
      RuleLevel,
      {
        definedTypes?: string[];
        disableReporting?: boolean;
        markVariablesAsUsed?: boolean;
      },
    ]
  >;
}
