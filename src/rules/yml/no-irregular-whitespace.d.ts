import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoIrregularWhitespaceRule {
  /**
   * Disallow irregular whitespace.
   *
   * @see [no-irregular-whitespace](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-irregular-whitespace.html)
   */
  'yml/no-irregular-whitespace': Rule<
    [
      RuleLevel,
      {
        skipComments?: boolean;
        skipQuotedScalars?: boolean;
      },
    ]
  >;
}
