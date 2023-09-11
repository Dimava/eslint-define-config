import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface MatchComponentImportNameRule {
  /**
   * Require the registered component name to match the imported component name.
   *
   * @see [match-component-import-name](https://eslint.vuejs.org/rules/match-component-import-name.html)
   */
  'vue/match-component-import-name': Rule<[RuleLevel]>;
}
