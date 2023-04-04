import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ConsistentTypeSpecifierStyleRule = {
  /**
   * Enforce or ban the use of inline type-only markers for named imports.
   *
   * @see [consistent-type-specifier-style](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/consistent-type-specifier-style.md)
   */
  'import/consistent-type-specifier-style': Rule<
    [RuleLevel, 'prefer-inline' | 'prefer-top-level']
  >;
};
