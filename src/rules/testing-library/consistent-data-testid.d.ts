import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ConsistentDataTestidRule {
  /**
   * Ensures consistent usage of `data-testid`.
   *
   * @see [consistent-data-testid](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/consistent-data-testid.md)
   */
  'testing-library/consistent-data-testid': Rule<
    [
      RuleLevel,
      {
        testIdPattern: string;
        testIdAttribute?: string | string[];
        customMessage?: string;
      },
    ]
  >;
}
