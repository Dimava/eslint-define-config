import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoDynamicRequireRule = {
  /**
   * Forbid `require()` calls with expressions.
   *
   * @see [no-dynamic-require](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-dynamic-require.md)
   */
  'import/no-dynamic-require': Rule<
    [
      RuleLevel,
      {
        esmodule?: boolean;
      },
    ]
  >;
};
