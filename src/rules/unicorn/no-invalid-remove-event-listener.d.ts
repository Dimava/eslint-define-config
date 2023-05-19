import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoInvalidRemoveEventListenerRule {
  /**
   * Prevent calling `EventTarget#removeEventListener()` with the result of an expression.
   *
   * @see [no-invalid-remove-event-listener](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-invalid-remove-event-listener.md)
   */
  'unicorn/no-invalid-remove-event-listener': Rule<[RuleLevel]>;
}
