import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferModernMathApisRule {
  /**
   * Prefer modern `Math` APIs over legacy patterns.
   *
   * @see [prefer-modern-math-apis](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-modern-math-apis.md)
   */
  'unicorn/prefer-modern-math-apis': Rule<[RuleLevel]>;
}
