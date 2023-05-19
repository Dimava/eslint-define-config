import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ScriptIndentRule {
  /**
   * Enforce consistent indentation in `<script>`.
   *
   * @see [script-indent](https://eslint.vuejs.org/rules/script-indent.html)
   */
  'vue/script-indent': Rule<
    [
      RuleLevel,
      number | 'tab',
      {
        baseIndent?: number;
        switchCase?: number;
        ignores?: string[];
      },
    ]
  >;
}
