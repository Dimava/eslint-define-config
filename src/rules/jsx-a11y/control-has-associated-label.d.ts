import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ControlHasAssociatedLabelRule {
  /**
   * Enforce that a control (an interactive element) has a text label.
   *
   * @see [control-has-associated-label](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/control-has-associated-label.md)
   */
  'jsx-a11y/control-has-associated-label': Rule<
    [
      RuleLevel,
      {
        labelAttributes?: string[];
        controlComponents?: string[];
        ignoreElements?: string[];
        ignoreRoles?: string[];
        /**
         * JSX tree depth limit to check for accessible label
         */
        depth?: number;
        [k: string]: any;
      },
    ]
  >;
}
