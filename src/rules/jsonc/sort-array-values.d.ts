import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface SortArrayValuesRule {
  /**
   * Require array values to be sorted.
   *
   * @see [sort-array-values](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-array-values.html)
   */
  'jsonc/sort-array-values': Rule<
    [
      RuleLevel,
      .../**
       * @minItems 1
       */
      [
        {
          pathPattern: string;
          order:
            | (
                | string
                | {
                    valuePattern?: string;
                    order?: {
                      type?: 'asc' | 'desc';
                      caseSensitive?: boolean;
                      natural?: boolean;
                    };
                  }
              )[]
            | {
                type?: 'asc' | 'desc';
                caseSensitive?: boolean;
                natural?: boolean;
              };
          minValues?: number;
        },
        ...{
          pathPattern: string;
          order:
            | (
                | string
                | {
                    valuePattern?: string;
                    order?: {
                      type?: 'asc' | 'desc';
                      caseSensitive?: boolean;
                      natural?: boolean;
                    };
                  }
              )[]
            | {
                type?: 'asc' | 'desc';
                caseSensitive?: boolean;
                natural?: boolean;
              };
          minValues?: number;
        }[],
      ],
    ]
  >;
}
