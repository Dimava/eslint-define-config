import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface KeySpacingRule {
  /**
   * Enforce consistent spacing between keys and values in mapping pairs.
   *
   * @see [key-spacing](https://ota-meshi.github.io/eslint-plugin-yml/rules/key-spacing.html)
   */
  'yml/key-spacing': Rule<
    [
      RuleLevel,
      (
        | {
            align?:
              | ('colon' | 'value')
              | {
                  on?: 'colon' | 'value';
                  mode?: 'strict' | 'minimum';
                  beforeColon?: boolean;
                  afterColon?: boolean;
                };
            mode?: 'strict' | 'minimum';
            beforeColon?: boolean;
            afterColon?: boolean;
          }
        | {
            singleLine?: {
              mode?: 'strict' | 'minimum';
              beforeColon?: boolean;
              afterColon?: boolean;
            };
            multiLine?: {
              align?:
                | ('colon' | 'value')
                | {
                    on?: 'colon' | 'value';
                    mode?: 'strict' | 'minimum';
                    beforeColon?: boolean;
                    afterColon?: boolean;
                  };
              mode?: 'strict' | 'minimum';
              beforeColon?: boolean;
              afterColon?: boolean;
            };
          }
        | {
            singleLine?: {
              mode?: 'strict' | 'minimum';
              beforeColon?: boolean;
              afterColon?: boolean;
            };
            multiLine?: {
              mode?: 'strict' | 'minimum';
              beforeColon?: boolean;
              afterColon?: boolean;
            };
            align?: {
              on?: 'colon' | 'value';
              mode?: 'strict' | 'minimum';
              beforeColon?: boolean;
              afterColon?: boolean;
            };
          }
      ),
    ]
  >;
}
