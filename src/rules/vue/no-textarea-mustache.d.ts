import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoTextareaMustacheRule {
  /**
   * Disallow mustaches in `<textarea>`.
   *
   * @see [no-textarea-mustache](https://eslint.vuejs.org/rules/no-textarea-mustache.html)
   */
  'vue/no-textarea-mustache': Rule<[RuleLevel]>;
}
