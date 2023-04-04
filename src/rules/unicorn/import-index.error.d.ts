import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ImportIndexRule = {
  /**
   *
   * @deprecated
   *
   * @see [import-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v42.0.0/docs/rules/import-index.md)
   */
  'unicorn/import-index': Rule<
    [
      RuleLevel,
      {
        /**
         * @deprecated
         */
        ignoreImports?: boolean;
      },
    ]
  >;
};
