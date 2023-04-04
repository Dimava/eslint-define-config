import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferSfcLangAttrRule = {
  /**
   * Require lang attribute on `<i18n>` block.
   *
   * @see [prefer-sfc-lang-attr](https://eslint-plugin-vue-i18n.intlify.dev/rules/prefer-sfc-lang-attr.html)
   */
  '@intlify/vue-i18n/prefer-sfc-lang-attr': Rule<[RuleLevel]>;
};
