import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoDeprecatedI18nPlacesPropRule = {
  /**
   * Disallow using deprecated `places` prop (Removed in Vue I18n 9.0.0+).
   *
   * @see [no-deprecated-i18n-places-prop](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-i18n-places-prop.html)
   */
  '@intlify/vue-i18n/no-deprecated-i18n-places-prop': Rule<[RuleLevel]>;
};
