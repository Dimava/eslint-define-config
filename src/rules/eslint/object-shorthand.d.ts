import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ObjectShorthandRule {
  /**
   * Require or disallow method and property shorthand syntax for object literals.
   *
   * @see [object-shorthand](https://eslint.org/docs/rules/object-shorthand)
   */
  'object-shorthand': Rule<
    [
      RuleLevel,
      ...(
        | []
        | [
            | 'always'
            | 'methods'
            | 'properties'
            | 'never'
            | 'consistent'
            | 'consistent-as-needed',
          ]
        | []
        | ['always' | 'methods' | 'properties']
        | [
            'always' | 'methods' | 'properties',
            {
              avoidQuotes?: boolean;
            },
          ]
        | []
        | ['always' | 'methods']
        | [
            'always' | 'methods',
            {
              ignoreConstructors?: boolean;
              methodsIgnorePattern?: string;
              avoidQuotes?: boolean;
              avoidExplicitReturnArrows?: boolean;
            },
          ]
      ),
    ]
  >;
}
