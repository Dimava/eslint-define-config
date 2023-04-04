import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoSparseArraysRule = {
  /**
   * Disallow sparse arrays.
   *
   * @see [no-sparse-arrays](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-sparse-arrays.html)
   */
  'jsonc/no-sparse-arrays': Rule<[RuleLevel]>;
};
