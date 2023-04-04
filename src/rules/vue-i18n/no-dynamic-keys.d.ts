import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoDynamicKeysRule = {
  /**
   * Disallow localization dynamic keys at localization methods.
   *
   * @see [no-dynamic-keys](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-dynamic-keys.html)
   */
  '@intlify/vue-i18n/no-dynamic-keys': Rule<[RuleLevel]>;
};
