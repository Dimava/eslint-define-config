import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type FilenameCaseRule = {
  /**
   * Enforce a case style for filenames.
   *
   * @see [filename-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/filename-case.md)
   */
  'unicorn/filename-case': Rule<
    [
      RuleLevel,
      (
        | {
            case?: 'camelCase' | 'snakeCase' | 'kebabCase' | 'pascalCase';
            ignore?: any[];
          }
        | {
            cases?: {
              camelCase?: boolean;
              snakeCase?: boolean;
              kebabCase?: boolean;
              pascalCase?: boolean;
            };
            ignore?: any[];
          }
      ),
    ]
  >;
};
