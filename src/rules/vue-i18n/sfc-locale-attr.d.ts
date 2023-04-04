import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type SfcLocaleAttrRule = {
  /**
   * Require or disallow the locale attribute on `<i18n>` block.
   *
   * @see [sfc-locale-attr](https://eslint-plugin-vue-i18n.intlify.dev/rules/sfc-locale-attr.html)
   */
  '@intlify/vue-i18n/sfc-locale-attr': Rule<[RuleLevel, 'always' | 'never']>;
};
