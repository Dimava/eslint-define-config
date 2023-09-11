import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface SortKeysRule {
  /**
   * Require mapping keys to be sorted.
   *
   * @see [sort-keys](https://ota-meshi.github.io/eslint-plugin-yml/rules/sort-keys.html)
   */
  'yml/sort-keys': Rule<
    [
      RuleLevel,
      ...(
        | [
            {
              pathPattern: string;
              hasProperties?: string[];
              order:
                | (
                    | string
                    | {
                        keyPattern?: string;
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
              minKeys?: number;
              allowLineSeparatedGroups?: boolean;
            },
            ...{
              pathPattern: string;
              hasProperties?: string[];
              order:
                | (
                    | string
                    | {
                        keyPattern?: string;
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
              minKeys?: number;
              allowLineSeparatedGroups?: boolean;
            }[],
          ]
        | []
        | ['asc' | 'desc']
        | [
            'asc' | 'desc',
            {
              caseSensitive?: boolean;
              natural?: boolean;
              minKeys?: number;
              allowLineSeparatedGroups?: boolean;
            },
          ]
      ),
    ]
  >;
}
