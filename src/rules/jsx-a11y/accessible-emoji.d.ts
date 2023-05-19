import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface AccessibleEmojiRule {
  /**
   * Enforce emojis are wrapped in `<span>` and provide screenreader access.
   *
   * @deprecated
   *
   * @see [accessible-emoji](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/accessible-emoji.md)
   */
  'jsx-a11y/accessible-emoji': Rule<
    [
      RuleLevel,
      {
        [k: string]: any;
      },
    ]
  >;
}
