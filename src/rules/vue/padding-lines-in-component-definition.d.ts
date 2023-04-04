import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PaddingLinesInComponentDefinitionRule = {
  /**
   * Require or disallow padding lines in component definition.
   *
   * @see [padding-lines-in-component-definition](https://eslint.vuejs.org/rules/padding-lines-in-component-definition.html)
   */
  'vue/padding-lines-in-component-definition': Rule<
    [
      RuleLevel,
      (
        | ('always' | 'never')
        | {
            betweenOptions?: 'never' | 'always' | 'ignore';
            withinOption?:
              | ('never' | 'always' | 'ignore')
              | {
                  /**
                   */
                  [k: string]:
                    | ('never' | 'always' | 'ignore')
                    | {
                        betweenItems?: 'never' | 'always' | 'ignore';
                        withinEach?: 'never' | 'always' | 'ignore';
                      };
                };
            groupSingleLineProperties?: boolean;
          }
      ),
    ]
  >;
};
