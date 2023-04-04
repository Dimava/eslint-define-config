import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type CheckParamNamesRule = {
  /**
   * Ensures that parameter names in JSDoc match those in the function declaration.
   *
   * @see [check-param-names](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-param-names)
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
};
