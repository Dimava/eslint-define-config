import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type CommaDangleRule = {
  /**
   * Require or disallow trailing commas.
   *
   * @see [comma-dangle](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-dangle.html)
   */
  'jsonc/comma-dangle': Rule<
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
  | 'ignore'
  | 'never'
  | 'only-multiline';
