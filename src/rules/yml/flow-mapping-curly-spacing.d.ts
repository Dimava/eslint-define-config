import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface FlowMappingCurlySpacingRule {
  /**
   * Enforce consistent spacing inside braces.
   *
   * @see [flow-mapping-curly-spacing](https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-mapping-curly-spacing.html)
   */
  'yml/flow-mapping-curly-spacing': Rule<
    [
      RuleLevel,
      'always' | 'never',
      {
        arraysInObjects?: boolean;
        objectsInObjects?: boolean;
      },
    ]
  >;
}
