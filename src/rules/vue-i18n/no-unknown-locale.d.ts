import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUnknownLocaleRule = {
  /**
   * Disallow unknown locale name.
   *
   * @see [no-unknown-locale](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-unknown-locale.html)
   */
  '@intlify/vue-i18n/no-unknown-locale': Rule<
    [
      RuleLevel,
      {
        locales?: string[];
        disableRFC5646?: boolean;
      },
    ]
  >;
};
