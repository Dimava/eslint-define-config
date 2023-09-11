import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDuplicateStringRule {
  /**
   * String literals should not be duplicated.
   *
   * @see [no-duplicate-string](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-duplicate-string.md)
   */
  'sonarjs/no-duplicate-string': Rule<
    [
      RuleLevel,
      {
        threshold?: number;
        ignoreStrings?: string;
        [k: string]: any;
      },
      'sonar-runtime',
    ]
  >;
}
