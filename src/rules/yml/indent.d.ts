import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface IndentRule {
  /**
   * Enforce consistent indentation.
   *
   * @see [indent](https://ota-meshi.github.io/eslint-plugin-yml/rules/indent.html)
   */
  'yml/indent': Rule<
    [
      RuleLevel,
      number,
      {
        indentBlockSequences?: boolean;
        indicatorValueIndent?: number;
      },
    ]
  >;
}
