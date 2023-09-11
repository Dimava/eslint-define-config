import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface CheckParamNamesRule {
  /**
   * Ensures that parameter names in JSDoc match those in the function declaration.
   *
   * @see [check-param-names](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-param-names.md#repos-sticky-header)
   */
  'jsdoc/check-param-names': Rule<
    [
      RuleLevel,
      {
        allowExtraTrailingParamDocs?: boolean;
        checkDestructured?: boolean;
        checkRestProperty?: boolean;
        checkTypesPattern?: string;
        disableExtraPropertyReporting?: boolean;
        enableFixer?: boolean;
        useDefaultObjectProperties?: boolean;
      },
    ]
  >;
}
