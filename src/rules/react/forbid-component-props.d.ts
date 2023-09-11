import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ForbidComponentPropsRule {
  /**
   * Disallow certain props on components.
   *
   * @see [forbid-component-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-component-props.md)
   */
  'react/forbid-component-props': Rule<
    [
      RuleLevel,
      {
        forbid?: (
          | string
          | {
              propName?: string;
              allowedFor?: string[];
              message?: string;
            }
          | {
              propName?: string;
              /**
               * @minItems 1
               */
              disallowedFor: [string, ...string[]];
              message?: string;
            }
        )[];
        [k: string]: any;
      },
    ]
  >;
}
