import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoBlankBlockDescriptionsRule {
  /**
   * Detects and removes extra lines of a blank block description.
   *
   * @see [no-blank-block-descriptions](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-blank-block-descriptions)
   */
  'jsdoc/no-blank-block-descriptions': Rule<[RuleLevel]>;
}
