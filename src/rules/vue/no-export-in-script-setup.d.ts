import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoExportInScriptSetupRule {
  /**
   * Disallow `export` in `<script setup>`.
   *
   * @see [no-export-in-script-setup](https://eslint.vuejs.org/rules/no-export-in-script-setup.html)
   */
  'vue/no-export-in-script-setup': Rule<[RuleLevel]>;
}
