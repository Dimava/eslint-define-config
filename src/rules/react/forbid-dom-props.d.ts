import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ForbidDomPropsRule {
  /**
   * Disallow certain props on DOM Nodes.
   *
   * @see [forbid-dom-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-dom-props.md)
   */
  'react/forbid-dom-props': Rule<
    [
      RuleLevel,
      {
        forbid?: (
          | string
          | {
              propName?: string;
              disallowedFor?: string[];
              message?: string;
              [k: string]: any;
            }
        )[];
      },
    ]
  >;
}
