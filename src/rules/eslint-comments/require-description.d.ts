import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireDescriptionRule {
  /**
   * Require include descriptions in ESLint directive-comments.
   *
   * @see [require-description](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/require-description.html)
   */
  'eslint-comments/require-description': Rule<
    [
      RuleLevel,
      {
        ignore?: (
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
}
