import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoNoninteractiveElementInteractionsRule {
  /**
   * Non-interactive elements should not be assigned mouse or keyboard event listeners.
   *
   * @see [no-noninteractive-element-interactions](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-element-interactions.md)
   */
  'jsx-a11y/no-noninteractive-element-interactions': Rule<
    [
      RuleLevel,
      {
        handlers?: string[];
        [k: string]: any;
      },
    ]
  >;
}
