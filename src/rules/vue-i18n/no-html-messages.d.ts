import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoHtmlMessagesRule = {
  /**
   * Disallow use HTML localization messages.
   *
   * @see [no-html-messages](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-html-messages.html)
   */
  '@intlify/vue-i18n/no-html-messages': Rule<[RuleLevel]>;
};
