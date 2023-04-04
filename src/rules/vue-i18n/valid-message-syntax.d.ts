import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ValidMessageSyntaxRule = {
  /**
   * Disallow invalid message syntax.
   *
   * @see [valid-message-syntax](https://eslint-plugin-vue-i18n.intlify.dev/rules/valid-message-syntax.html)
   */
  '@intlify/vue-i18n/valid-message-syntax': Rule<
    [
      RuleLevel,
      {
        allowNotString?: boolean;
      },
    ]
  >;
};
