import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoCallbackLiteralRule {
  /**
   * Ensure Node.js-style error-first callback pattern is followed.
   *
   * @see [no-callback-literal](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-callback-literal.md)
   */
  'node/no-callback-literal': Rule<[RuleLevel]>;
}
