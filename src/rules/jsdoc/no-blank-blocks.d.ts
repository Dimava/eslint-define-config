import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoBlankBlocksRule {
  /**
   * Removes empty blocks with nothing but possibly line breaks.
   *
   * @see [no-blank-blocks](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-blank-blocks)
   */
  'jsdoc/no-blank-blocks': Rule<
    [
      RuleLevel,
      {
        enableFixer?: boolean;
      },
    ]
  >;
}
