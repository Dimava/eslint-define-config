import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface CheckValuesRule {
  /**
   * This rule checks the values for a handful of tags: `@version`, `@since`, `@license` and `@author`.
   *
   * @see [check-values](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-values)
   */
  'jsdoc/check-values': Rule<
    [
      RuleLevel,
      {
        allowedAuthors?: string[];
        allowedLicenses?: string[] | boolean;
        licensePattern?: string;
        numericOnlyVariation?: boolean;
      },
    ]
  >;
}
