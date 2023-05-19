import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoVHtmlRule {
  /**
   * Disallow use of localization methods on v-html to prevent XSS attack.
   *
   * @see [no-v-html](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-v-html.html)
   */
  '@intlify/vue-i18n/no-v-html': Rule<[RuleLevel]>;
}
