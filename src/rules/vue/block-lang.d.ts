import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface BlockLangRule {
  /**
   * Disallow use other than available `lang`.
   *
   * @see [block-lang](https://eslint.vuejs.org/rules/block-lang.html)
   */
  'vue/block-lang': Rule<
    [
      RuleLevel,
      {
        /**
         */
        [k: string]: {
          lang?: string | string[];
          allowNoLang?: boolean;
        };
      },
    ]
  >;
}
