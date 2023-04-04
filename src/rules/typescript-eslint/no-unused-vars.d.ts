import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUnusedVarsRule = {
  /**
   * Disallow unused variables.
   *
   * @see [no-unused-vars](https://typescript-eslint.io/rules/no-unused-vars)
   */
  '@typescript-eslint/no-unused-vars': Rule<
    [
      RuleLevel,
      (
        | ('all' | 'local')
        | {
            vars?: 'all' | 'local';
            varsIgnorePattern?: string;
            args?: 'all' | 'after-used' | 'none';
            ignoreRestSiblings?: boolean;
            argsIgnorePattern?: string;
            caughtErrors?: 'all' | 'none';
            caughtErrorsIgnorePattern?: string;
            destructuredArrayIgnorePattern?: string;
          }
      ),
    ]
  >;
};
