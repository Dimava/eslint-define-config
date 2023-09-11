import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnusedVarsRule {
  /**
   * Disallow unused variables.
   *
   * @see [no-unused-vars](https://eslint.org/docs/latest/rules/no-unused-vars)
   */
  'no-unused-vars': Rule<
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
}
