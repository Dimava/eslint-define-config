import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ExtensionsRule {
  /**
   * Ensure consistent use of file extension within the import path.
   *
   * @see [extensions](https://github.com/import-js/eslint-plugin-import/blob/v2.28.0/docs/rules/extensions.md)
   */
  'import/extensions': Rule<
    [
      RuleLevel,
      ...(
        | []
        | ['always' | 'ignorePackages' | 'never']
        | []
        | ['always' | 'ignorePackages' | 'never']
        | [
            'always' | 'ignorePackages' | 'never',
            {
              pattern?: {
                /**
                 */
                [k: string]: 'always' | 'ignorePackages' | 'never';
              };
              ignorePackages?: boolean;
              [k: string]: any;
            },
          ]
        | []
        | [
            {
              pattern?: {
                /**
                 */
                [k: string]: 'always' | 'ignorePackages' | 'never';
              };
              ignorePackages?: boolean;
              [k: string]: any;
            },
          ]
        | []
        | [
            {
              /**
               */
              [k: string]: 'always' | 'ignorePackages' | 'never';
            },
          ]
        | []
        | ['always' | 'ignorePackages' | 'never']
        | [
            'always' | 'ignorePackages' | 'never',
            {
              /**
               */
              [k: string]: 'always' | 'ignorePackages' | 'never';
            },
          ]
      ),
    ]
  >;
}
