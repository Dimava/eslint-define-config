import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUseRule = {
  /**
   * Disallow ESLint directive-comments.
   *
   * @see [no-use](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-use.html)
   */
  'eslint-comments/no-use': Rule<
    [
      RuleLevel,
      {
        allow?: (
          | 'eslint'
          | 'eslint-disable'
          | 'eslint-disable-line'
          | 'eslint-disable-next-line'
          | 'eslint-enable'
          | 'eslint-env'
          | 'exported'
          | 'global'
          | 'globals'
        )[];
      },
    ]
  >;
};
