import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface MaxLinesPerBlockRule {
  /**
   * Enforce maximum number of lines in Vue SFC blocks.
   *
   * @see [max-lines-per-block](https://eslint.vuejs.org/rules/max-lines-per-block.html)
   */
  'vue/max-lines-per-block': Rule<
    [
      RuleLevel,
      {
        style?: number;
        template?: number;
        script?: number;
        skipBlankLines?: boolean;
      },
    ]
  >;
}
