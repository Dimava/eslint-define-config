import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUnusedKeysRule = {
  /**
   * Disallow unused localization keys.
   *
   * @see [no-unused-keys](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-unused-keys.html)
   */
  '@intlify/vue-i18n/no-unused-keys': Rule<
    [
      RuleLevel,
      {
        src?: string;
        extensions?: string[];
        ignores?: string[];
        enableFix?: boolean;
      },
    ]
  >;
};
