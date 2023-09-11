import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferKeyboardEventKeyRule {
  /**
   * Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode`.
   *
   * @see [prefer-keyboard-event-key](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-keyboard-event-key.md)
   */
  'unicorn/prefer-keyboard-event-key': Rule<[RuleLevel]>;
}
