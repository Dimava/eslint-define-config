import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoI18nTPathPropRule {
  /**
   * Disallow using `path` prop with `<i18n-t>`.
   *
   * @see [no-i18n-t-path-prop](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-i18n-t-path-prop.html)
   */
  '@intlify/vue-i18n/no-i18n-t-path-prop': Rule<[RuleLevel]>;
}
