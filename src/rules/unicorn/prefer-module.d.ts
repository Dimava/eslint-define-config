import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferModuleRule = {
  /**
   * Prefer JavaScript modules (ESM) over CommonJS.
   *
   * @see [prefer-module](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-module.md)
   */
  'unicorn/prefer-module': Rule<[RuleLevel]>;
};
