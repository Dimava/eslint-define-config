import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoMissingKeysInOtherLocalesRule {
  /**
   * Disallow missing locale message keys in other locales.
   *
   * @see [no-missing-keys-in-other-locales](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-missing-keys-in-other-locales.html)
   */
  '@intlify/vue-i18n/no-missing-keys-in-other-locales': Rule<
    [
      RuleLevel,
      {
        ignoreLocales?: string[];
      },
    ]
  >;
}
