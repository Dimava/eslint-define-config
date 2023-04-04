import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferReflectApplyRule = {
  /**
   * Prefer `Reflect.apply()` over `Function#apply()`.
   *
   * @see [prefer-reflect-apply](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-reflect-apply.md)
   */
  'unicorn/prefer-reflect-apply': Rule<[RuleLevel]>;
};
