import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface StaticPropertyPlacementRule {
  /**
   * Enforces where React component static properties should be positioned.
   *
   * @see [static-property-placement](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/static-property-placement.md)
   */
  'react/static-property-placement': Rule<
    [
      RuleLevel,
      'static public field' | 'static getter' | 'property assignment',
      {
        propTypes?:
          | 'static public field'
          | 'static getter'
          | 'property assignment';
        defaultProps?:
          | 'static public field'
          | 'static getter'
          | 'property assignment';
        childContextTypes?:
          | 'static public field'
          | 'static getter'
          | 'property assignment';
        contextTypes?:
          | 'static public field'
          | 'static getter'
          | 'property assignment';
        contextType?:
          | 'static public field'
          | 'static getter'
          | 'property assignment';
        displayName?:
          | 'static public field'
          | 'static getter'
          | 'property assignment';
      },
    ]
  >;
}
