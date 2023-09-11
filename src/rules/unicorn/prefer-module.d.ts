import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferModuleRule {
  /**
   * Prefer JavaScript modules (ESM) over CommonJS.
   *
   * @see [prefer-module](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-module.md)
   */
  'unicorn/prefer-module': Rule<[RuleLevel]>;
}
