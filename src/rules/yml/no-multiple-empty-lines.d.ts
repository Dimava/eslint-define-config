import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoMultipleEmptyLinesRule {
  /**
   * Disallow multiple empty lines.
   *
   * @see [no-multiple-empty-lines](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-multiple-empty-lines.html)
   */
  'yml/no-multiple-empty-lines': Rule<
    [
      RuleLevel,
      {
        max: number;
        maxEOF?: number;
        maxBOF?: number;
      },
    ]
  >;
}
