import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoAdjacentInlineElementsRule {
  /**
   * Disallow adjacent inline elements not separated by whitespace.
   *
   * @see [no-adjacent-inline-elements](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-adjacent-inline-elements.md)
   */
  'react/no-adjacent-inline-elements': Rule<[RuleLevel]>;
}
