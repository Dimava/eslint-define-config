import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface MouseEventsHaveKeyEventsRule {
  /**
   * Enforce that `onMouseOver`/`onMouseOut` are accompanied by `onFocus`/`onBlur` for keyboard-only users.
   *
   * @see [mouse-events-have-key-events](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/mouse-events-have-key-events.md)
   */
  'jsx-a11y/mouse-events-have-key-events': Rule<
    [
      RuleLevel,
      {
        [k: string]: any;
      },
    ]
  >;
}
