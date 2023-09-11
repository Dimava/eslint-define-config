import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface AltTextRule {
  /**
   * Enforce all elements that require alternative text have meaningful information to relay back to end user.
   *
   * @see [alt-text](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/alt-text.md)
   */
  'jsx-a11y/alt-text': Rule<
    [
      RuleLevel,
      {
        elements?: string[];
        img?: string[];
        object?: string[];
        area?: string[];
        'input[type="image"]'?: string[];
        [k: string]: any;
      },
    ]
  >;
}
