import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRenderInSetupRule {
  /**
   * Disallow the use of `render` in testing frameworks setup functions.
   *
   * @see [no-render-in-setup](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-render-in-setup.md)
   */
  'testing-library/no-render-in-setup': Rule<
    [
      RuleLevel,
      {
        allowTestingFrameworkSetupHook?: 'beforeEach' | 'beforeAll';
        [k: string]: any;
      },
    ]
  >;
}
