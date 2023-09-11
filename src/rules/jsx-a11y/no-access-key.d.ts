import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoAccessKeyRule {
  /**
   * Enforce that the `accessKey` prop is not used on any element to avoid complications with keyboard commands used by a screenreader.
   *
   * @see [no-access-key](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-access-key.md)
   */
  'jsx-a11y/no-access-key': Rule<
    [
      RuleLevel,
      {
        [k: string]: any;
      },
    ]
  >;
}
