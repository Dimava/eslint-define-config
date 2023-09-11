import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoBlankBlocksRule {
  /**
   * Removes empty blocks with nothing but possibly line breaks.
   *
   * @see [no-blank-blocks](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-blocks.md#repos-sticky-header)
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
