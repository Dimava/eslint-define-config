import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferEventKeyRule {
  /**
   *
   * @deprecated
   *
   * @see [prefer-event-key](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/deprecated-rules.md#prefer-event-key)
   */
  'unicorn/prefer-event-key': Rule<[RuleLevel]>;
}
