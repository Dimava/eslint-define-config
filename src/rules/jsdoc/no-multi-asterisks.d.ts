import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoMultiAsterisksRule {
  /**
   *
   * @see [no-multi-asterisks](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-multi-asterisks)
   */
  'jsdoc/no-multi-asterisks': Rule<
    [
      RuleLevel,
      {
        allowWhitespace?: boolean;
        preventAtEnd?: boolean;
        preventAtMiddleLines?: boolean;
      },
    ]
  >;
}
