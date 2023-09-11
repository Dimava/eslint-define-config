import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnescapedEntitiesRule {
  /**
   * Disallow unescaped HTML entities from appearing in markup.
   *
   * @see [no-unescaped-entities](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unescaped-entities.md)
   */
  'react/no-unescaped-entities': Rule<
    [
      RuleLevel,
      {
        forbid?: (
          | string
          | {
              char?: string;
              alternatives?: string[];
              [k: string]: any;
            }
        )[];
      },
    ]
  >;
}
