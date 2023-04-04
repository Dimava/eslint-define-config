import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type KeySpacingRule = {
  /**
   * Enforce consistent spacing between keys and values in object literal properties.
   *
   * @see [key-spacing](https://eslint.org/docs/rules/key-spacing)
   */
  'key-spacing': Rule<
    [
      RuleLevel,
      (
        | {
            align?:
              | ('colon' | 'value')
              | {
                  mode?: 'strict' | 'minimum';
                  on?: 'colon' | 'value';
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
                    mode?: 'strict' | 'minimum';
                    on?: 'colon' | 'value';
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
              mode?: 'strict' | 'minimum';
              on?: 'colon' | 'value';
              beforeColon?: boolean;
              afterColon?: boolean;
            };
          }
      ),
    ]
  >;
};
