import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferReflectApplyRule {
  /**
   * Prefer `Reflect.apply()` over `Function#apply()`.
   *
   * @see [prefer-reflect-apply](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-reflect-apply.md)
   */
  'unicorn/prefer-reflect-apply': Rule<[RuleLevel]>;
}
