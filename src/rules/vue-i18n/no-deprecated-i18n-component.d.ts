import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDeprecatedI18nComponentRule {
  /**
   * Disallow using deprecated `<i18n>` components (in Vue I18n 9.0.0+).
   *
   * @see [no-deprecated-i18n-component](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-i18n-component.html)
   */
  '@intlify/vue-i18n/no-deprecated-i18n-component': Rule<[RuleLevel]>;
}
