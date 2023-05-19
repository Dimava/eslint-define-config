import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface FuncNameMatchingRule {
  /**
   * Require function names to match the name of the variable or property to which they are assigned.
   *
   * @see [func-name-matching](https://eslint.org/docs/rules/func-name-matching)
   */
  'func-name-matching': Rule<
    [
      RuleLevel,
      ...(
        | []
        | ['always' | 'never']
        | [
            'always' | 'never',
            {
              considerPropertyDescriptor?: boolean;
              includeCommonJSModuleExports?: boolean;
            },
          ]
        | []
        | [
            {
              considerPropertyDescriptor?: boolean;
              includeCommonJSModuleExports?: boolean;
            },
          ]
      ),
    ]
  >;
}
