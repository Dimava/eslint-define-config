import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoStaticInlineStylesRule {
  /**
   * Disallow static inline `style` attributes.
   *
   * @see [no-static-inline-styles](https://eslint.vuejs.org/rules/no-static-inline-styles.html)
   */
  'vue/no-static-inline-styles': Rule<
    [
      RuleLevel,
      {
        allowBinding?: boolean;
      },
    ]
  >;
}
