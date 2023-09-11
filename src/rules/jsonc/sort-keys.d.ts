import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface SortKeysRule {
  /**
   * Require object keys to be sorted.
   *
   * @see [sort-keys](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-keys.html)
   */
  'jsonc/sort-keys': Rule<
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
