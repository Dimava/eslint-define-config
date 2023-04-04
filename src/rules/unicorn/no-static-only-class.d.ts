import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoStaticOnlyClassRule = {
  /**
   * Disallow classes that only have static members.
   *
   * @see [no-static-only-class](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-static-only-class.md)
   */
  'unicorn/no-static-only-class': Rule<[RuleLevel]>;
};
