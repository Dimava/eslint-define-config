import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferQueryMatchersRule {
  /**
   * Ensure the configured `get*`/`query*` query is used with the corresponding matchers.
   *
   * @see [prefer-query-matchers](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-query-matchers.md)
   */
  'testing-library/prefer-query-matchers': Rule<
    [
      RuleLevel,
      {
        validEntries?: {
          query?: 'get' | 'query';
          matcher?: string;
          [k: string]: any;
        }[];
      },
    ]
  >;
}
