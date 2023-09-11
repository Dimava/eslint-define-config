import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface CommaDangleRule {
  /**
   * Require or disallow trailing commas.
   *
   * @see [comma-dangle](https://eslint.org/docs/latest/rules/comma-dangle)
   */
  'comma-dangle': Rule<
    [
      RuleLevel,
      ...(
        | []
        | [
            | Value
            | {
                arrays?: ValueWithIgnore;
                objects?: ValueWithIgnore;
                imports?: ValueWithIgnore;
                exports?: ValueWithIgnore;
                functions?: ValueWithIgnore;
              },
          ]
      ),
    ]
  >;
}
type Value = 'always-multiline' | 'always' | 'never' | 'only-multiline';
type ValueWithIgnore =
  | 'always-multiline'
  | 'always'
  | 'ignore'
  | 'never'
  | 'only-multiline';
