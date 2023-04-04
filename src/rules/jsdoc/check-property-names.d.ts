import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type CheckPropertyNamesRule = {
  /**
   * Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots.
   *
   * @see [check-property-names](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-property-names)
   */
  'jsdoc/check-property-names': Rule<
    [
      RuleLevel,
      {
        enableFixer?: boolean;
      },
    ]
  >;
};
