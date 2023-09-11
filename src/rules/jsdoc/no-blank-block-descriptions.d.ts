import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoBlankBlockDescriptionsRule {
  /**
   * Detects and removes extra lines of a blank block description.
   *
   * @see [no-blank-block-descriptions](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-block-descriptions.md#repos-sticky-header)
   */
  'jsdoc/no-blank-block-descriptions': Rule<[RuleLevel]>;
}
