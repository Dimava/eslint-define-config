import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface SemiRule {
  /**
   * Require or disallow semicolons instead of ASI.
   *
   * @see [semi](https://typescript-eslint.io/rules/semi)
   */
  '@typescript-eslint/semi': Rule<
    [
      RuleLevel,
      ...(
        | []
        | ['never']
        | [
            'never',
            {
              beforeStatementContinuationChars?: 'always' | 'any' | 'never';
            },
          ]
        | []
        | ['always']
        | [
            'always',
            {
              omitLastInOneLineBlock?: boolean;
            },
          ]
      ),
    ]
  >;
}
