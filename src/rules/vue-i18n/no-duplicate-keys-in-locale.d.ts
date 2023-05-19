import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDuplicateKeysInLocaleRule {
  /**
   * Disallow duplicate localization keys within the same locale.
   *
   * @see [no-duplicate-keys-in-locale](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-duplicate-keys-in-locale.html)
   */
  '@intlify/vue-i18n/no-duplicate-keys-in-locale': Rule<
    [
      RuleLevel,
      {
        ignoreI18nBlock?: boolean;
      },
    ]
  >;
}
