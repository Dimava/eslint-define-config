import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUselessEmptyExportRule = {
  /**
   * Disallow empty exports that don't change anything in a module file.
   *
   * @see [no-useless-empty-export](https://typescript-eslint.io/rules/no-useless-empty-export)
   */
  '@typescript-eslint/no-useless-empty-export': Rule<[RuleLevel]>;
};
