import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferAddEventListenerRule {
  /**
   * Prefer `.addEventListener()` and `.removeEventListener()` over `on`-functions.
   *
   * @see [prefer-add-event-listener](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-add-event-listener.md)
   */
  'unicorn/prefer-add-event-listener': Rule<
    [
      RuleLevel,
      {
        excludedPackages?: string[];
      },
    ]
  >;
}
