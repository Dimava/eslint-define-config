import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface AriaPropsRule {
  /**
   * Enforce all `aria-*` props are valid.
   *
   * @see [aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-props.md)
   */
  'jsx-a11y/aria-props': Rule<
    [
      RuleLevel,
      {
        [k: string]: any;
      },
    ]
  >;
}
