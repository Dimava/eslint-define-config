import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRestrictedPropertiesRule {
  /**
   * Disallow certain properties on certain objects.
   *
   * @see [no-restricted-properties](https://eslint.org/docs/latest/rules/no-restricted-properties)
   */
  'no-restricted-properties': Rule<
    [
      RuleLevel,
      ...(
        | {
            object: string;
            property?: string;
            message?: string;
          }
        | {
            object?: string;
            property: string;
            message?: string;
          }
      )[],
    ]
  >;
}
