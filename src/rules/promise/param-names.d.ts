import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ParamNamesRule = {
  /**
   *
   * @see [param-names](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/param-names.md)
   */
  'promise/param-names': Rule<
    [
      RuleLevel,
      {
        resolvePattern?: string;
        rejectPattern?: string;
      },
    ]
  >;
};
