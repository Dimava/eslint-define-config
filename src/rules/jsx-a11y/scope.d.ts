import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ScopeRule {
  /**
   * Enforce `scope` prop is only used on `<th>` elements.
   *
   * @see [scope](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/scope.md)
   */
  'jsx-a11y/scope': Rule<
    [
      RuleLevel,
      {
        [k: string]: any;
      },
    ]
  >;
}
