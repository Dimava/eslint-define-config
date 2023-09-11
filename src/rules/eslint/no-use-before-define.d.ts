import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUseBeforeDefineRule {
  /**
   * Disallow the use of variables before they are defined.
   *
   * @see [no-use-before-define](https://eslint.org/docs/latest/rules/no-use-before-define)
   */
  'no-use-before-define': Rule<
    [
      RuleLevel,
      (
        | 'nofunc'
        | {
            functions?: boolean;
            classes?: boolean;
            variables?: boolean;
            allowNamedExports?: boolean;
          }
      ),
    ]
  >;
}
