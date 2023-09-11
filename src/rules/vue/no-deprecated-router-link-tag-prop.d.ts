import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDeprecatedRouterLinkTagPropRule {
  /**
   * Disallow using deprecated `tag` property on `RouterLink` (in Vue.js 3.0.0+).
   *
   * @see [no-deprecated-router-link-tag-prop](https://eslint.vuejs.org/rules/no-deprecated-router-link-tag-prop.html)
   */
  'vue/no-deprecated-router-link-tag-prop': Rule<
    [
      RuleLevel,
      {
        /**
         * @minItems 1
         */
        components?: [string, ...string[]];
      },
    ]
  >;
}
