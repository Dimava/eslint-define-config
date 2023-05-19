import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferEventTargetRule {
  /**
   * Prefer `EventTarget` over `EventEmitter`.
   *
   * @see [prefer-event-target](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-event-target.md)
   */
  'unicorn/prefer-event-target': Rule<[RuleLevel]>;
}
