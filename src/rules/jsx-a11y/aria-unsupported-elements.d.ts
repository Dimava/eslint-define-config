import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface AriaUnsupportedElementsRule {
  /**
   * Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
   *
   * @see [aria-unsupported-elements](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-unsupported-elements.md)
   */
  'jsx-a11y/aria-unsupported-elements': Rule<
    [
      RuleLevel,
      {
        [k: string]: any;
      },
    ]
  >;
}
