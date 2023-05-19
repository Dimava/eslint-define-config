import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoCallbackLiteralRule {
  /**
   * Enforce Node.js-style error-first callback pattern is followed.
   *
   * @see [no-callback-literal](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-callback-literal.md)
   */
  'n/no-callback-literal': Rule<[RuleLevel]>;
}
