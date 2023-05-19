import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ClickEventsHaveKeyEventsRule {
  /**
   * Enforce a clickable non-interactive element has at least one keyboard event listener.
   *
   * @see [click-events-have-key-events](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/click-events-have-key-events.md)
   */
  'jsx-a11y/click-events-have-key-events': Rule<
    [
      RuleLevel,
      {
        [k: string]: any;
      },
    ]
  >;
}
