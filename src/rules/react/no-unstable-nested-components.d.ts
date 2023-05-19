import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnstableNestedComponentsRule {
  /**
   * Disallow creating unstable components inside components.
   *
   * @see [no-unstable-nested-components](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unstable-nested-components.md)
   */
  'react/no-unstable-nested-components': Rule<
    [
      RuleLevel,
      {
        customValidators?: string[];
        allowAsProps?: boolean;
      },
    ]
  >;
}
