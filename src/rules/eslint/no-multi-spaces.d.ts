import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoMultiSpacesRule = {
  /**
   * Disallow multiple spaces.
   *
   * @see [no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces)
   */
  'no-multi-spaces': Rule<
    [
      RuleLevel,
      {
        exceptions?: {
          /**
           */
          [k: string]: boolean;
        };
        ignoreEOLComments?: boolean;
      },
    ]
  >;
};
