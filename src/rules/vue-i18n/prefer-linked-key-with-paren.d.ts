import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferLinkedKeyWithParenRule {
  /**
   * Enforce linked key to be enclosed in parentheses.
   *
   * @see [prefer-linked-key-with-paren](https://eslint-plugin-vue-i18n.intlify.dev/rules/prefer-linked-key-with-paren.html)
   */
  '@intlify/vue-i18n/prefer-linked-key-with-paren': Rule<[RuleLevel]>;
}
