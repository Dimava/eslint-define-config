import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoMissingKeysRule = {
  /**
   * Disallow missing locale message key at localization methods.
   *
   * @see [no-missing-keys](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-missing-keys.html)
   */
  '@intlify/vue-i18n/no-missing-keys': Rule<[RuleLevel]>;
};
