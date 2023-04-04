import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferNamespaceKeywordRule = {
  /**
   * Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules.
   *
   * @see [prefer-namespace-keyword](https://typescript-eslint.io/rules/prefer-namespace-keyword)
   */
  '@typescript-eslint/prefer-namespace-keyword': Rule<[RuleLevel]>;
};
