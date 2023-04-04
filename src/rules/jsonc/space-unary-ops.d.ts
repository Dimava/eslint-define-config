import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type SpaceUnaryOpsRule = {
  /**
   * Disallow spaces after unary operators.
   *
   * @see [space-unary-ops](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/space-unary-ops.html)
   */
  'jsonc/space-unary-ops': Rule<
    [
      RuleLevel,
      {
        words?: boolean;
        nonwords?: boolean;
        overrides?: {
          [k: string]: boolean;
        };
      },
    ]
  >;
};
