import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type SemiRule = {
  /**
   * Require or disallow semicolons instead of ASI.
   *
   * @see [semi](https://eslint.org/docs/rules/semi)
   */
  semi: Rule<
    [
      RuleLevel,
      (
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
};
