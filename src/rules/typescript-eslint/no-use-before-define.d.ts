import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUseBeforeDefineRule = {
  /**
   * Disallow the use of variables before they are defined.
   *
   * @see [no-use-before-define](https://typescript-eslint.io/rules/no-use-before-define)
   */
  '@typescript-eslint/no-use-before-define': Rule<
    [
      RuleLevel,
      (
        | 'nofunc'
        | {
            functions?: boolean;
            classes?: boolean;
            enums?: boolean;
            variables?: boolean;
            typedefs?: boolean;
            ignoreTypeReferences?: boolean;
            allowNamedExports?: boolean;
          }
      ),
    ]
  >;
};
