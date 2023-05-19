import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface DisplayNameRule {
  /**
   * Disallow missing displayName in a React component definition.
   *
   * @see [display-name](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/display-name.md)
   */
  'react/display-name': Rule<
    [
      RuleLevel,
      {
        ignoreTranspilerName?: boolean;
      },
    ]
  >;
}
