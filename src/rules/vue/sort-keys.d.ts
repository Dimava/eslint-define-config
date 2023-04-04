import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type SortKeysRule = {
  /**
   * Enforce sort-keys in a manner that is compatible with order-in-components.
   *
   * @see [sort-keys](https://eslint.vuejs.org/rules/sort-keys.html)
   */
  'vue/sort-keys': Rule<
    [
      RuleLevel,
      'asc' | 'desc',
      {
        caseSensitive?: boolean;
        ignoreChildrenOf?: any[];
        ignoreGrandchildrenOf?: any[];
        minKeys?: number;
        natural?: boolean;
        runOutsideVue?: boolean;
      },
    ]
  >;
};
