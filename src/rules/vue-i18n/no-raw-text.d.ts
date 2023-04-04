import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoRawTextRule = {
  /**
   * Disallow to string literal in template or JSX.
   *
   * @see [no-raw-text](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-raw-text.html)
   */
  '@intlify/vue-i18n/no-raw-text': Rule<
    [
      RuleLevel,
      {
        attributes?: {
          /**
           */
          [k: string]: string[];
        };
        ignoreNodes?: any[];
        ignorePattern?: string;
        ignoreText?: any[];
        [k: string]: any;
      },
    ]
  >;
};
