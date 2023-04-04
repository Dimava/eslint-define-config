import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type CommaDangleRule = {
  /**
   * Require or disallow trailing commas.
   *
   * @see [comma-dangle](https://typescript-eslint.io/rules/comma-dangle)
   */
  '@typescript-eslint/comma-dangle': Rule<
    [
      RuleLevel,
      (
        | []
        | [
            | Value
            | {
                arrays?: ValueWithIgnore;
                objects?: ValueWithIgnore;
                imports?: ValueWithIgnore;
                exports?: ValueWithIgnore;
                functions?: ValueWithIgnore;
                enums?: ValueWithIgnore;
                generics?: ValueWithIgnore;
                tuples?: ValueWithIgnore;
              },
          ]
      ),
    ]
  >;
};
type Value = 'always-multiline' | 'always' | 'never' | 'only-multiline';
type ValueWithIgnore =
  | 'always-multiline'
  | 'always'
  | 'never'
  | 'only-multiline'
  | 'ignore';
