import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferEventKeyRule = {
  /**
   *
   * @deprecated
   *
   * @see [prefer-event-key](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/deprecated-rules.md#prefer-event-key)
   */
  'unicorn/prefer-event-key': Rule<[RuleLevel]>;
};
