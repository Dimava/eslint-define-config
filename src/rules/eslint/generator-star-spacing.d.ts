import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type GeneratorStarSpacingRule = {
  /**
   * Enforce consistent spacing around `*` operators in generator functions.
   *
   * @see [generator-star-spacing](https://eslint.org/docs/rules/generator-star-spacing)
   */
  'generator-star-spacing': Rule<
    [
      RuleLevel,
      (
        | ('before' | 'after' | 'both' | 'neither')
        | {
            before?: boolean;
            after?: boolean;
            named?:
              | ('before' | 'after' | 'both' | 'neither')
              | {
                  before?: boolean;
                  after?: boolean;
                };
            anonymous?:
              | ('before' | 'after' | 'both' | 'neither')
              | {
                  before?: boolean;
                  after?: boolean;
                };
            method?:
              | ('before' | 'after' | 'both' | 'neither')
              | {
                  before?: boolean;
                  after?: boolean;
                };
          }
      ),
    ]
  >;
};
