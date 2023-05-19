import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoStaticElementInteractionsRule {
  /**
   * Enforce that non-interactive, visible elements (such as `<div>`) that have click handlers use the role attribute.
   *
   * @see [no-static-element-interactions](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-static-element-interactions.md)
   */
  'jsx-a11y/no-static-element-interactions': Rule<
    [
      RuleLevel,
      {
        handlers?: string[];
        [k: string]: any;
      },
    ]
  >;
}
