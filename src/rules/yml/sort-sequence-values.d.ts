import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface SortSequenceValuesRule {
  /**
   * Require sequence values to be sorted.
   *
   * @see [sort-sequence-values](https://ota-meshi.github.io/eslint-plugin-yml/rules/sort-sequence-values.html)
   */
  'yml/sort-sequence-values': Rule<
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
