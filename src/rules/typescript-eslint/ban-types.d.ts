import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type BanTypesRule = {
  /**
   * Disallow certain types.
   *
   * @see [ban-types](https://typescript-eslint.io/rules/ban-types)
   */
  '@typescript-eslint/ban-types': Rule<
    [
      RuleLevel,
      {
        types?: {
          [k: string]:
            | null
            | boolean
            | string
            | {
                message?: string;
                fixWith?: string;
              };
        };
        extendDefaults?: boolean;
      },
    ]
  >;
};
