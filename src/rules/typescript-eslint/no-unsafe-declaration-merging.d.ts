import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUnsafeDeclarationMergingRule = {
  /**
   * Disallow unsafe declaration merging.
   *
   * @see [no-unsafe-declaration-merging](https://typescript-eslint.io/rules/no-unsafe-declaration-merging)
   */
  '@typescript-eslint/no-unsafe-declaration-merging': Rule<[RuleLevel]>;
};
