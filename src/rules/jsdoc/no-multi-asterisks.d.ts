import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoMultiAsterisksRule {
  /**
   *
   * @see [no-multi-asterisks](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-multi-asterisks.md#repos-sticky-header)
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
