import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferRegexpExecRule = {
  /**
   * Enforce `RegExp#exec` over `String#match` if no global flag is provided.
   *
   * @see [prefer-regexp-exec](https://typescript-eslint.io/rules/prefer-regexp-exec)
   */
  '@typescript-eslint/prefer-regexp-exec': Rule<[RuleLevel]>;
};
