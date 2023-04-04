import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type KeySpacingRule = {
  /**
   * Enforce consistent spacing between property names and type annotations in types and interfaces.
   *
   * @see [key-spacing](https://typescript-eslint.io/rules/key-spacing)
   */
  '@typescript-eslint/key-spacing': Rule<
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
