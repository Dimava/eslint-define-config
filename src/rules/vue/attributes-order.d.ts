import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface AttributesOrderRule {
  /**
   * Enforce order of attributes.
   *
   * @see [attributes-order](https://eslint.vuejs.org/rules/attributes-order.html)
   */
  'vue/attributes-order': Rule<
    [
      RuleLevel,
      {
        order?: (
          | (
              | 'DEFINITION'
              | 'LIST_RENDERING'
              | 'CONDITIONALS'
              | 'RENDER_MODIFIERS'
              | 'GLOBAL'
              | 'UNIQUE'
              | 'SLOT'
              | 'TWO_WAY_BINDING'
              | 'OTHER_DIRECTIVES'
              | 'OTHER_ATTR'
              | 'ATTR_STATIC'
              | 'ATTR_DYNAMIC'
              | 'ATTR_SHORTHAND_BOOL'
              | 'EVENTS'
              | 'CONTENT'
            )
          | (
              | 'DEFINITION'
              | 'LIST_RENDERING'
              | 'CONDITIONALS'
              | 'RENDER_MODIFIERS'
              | 'GLOBAL'
              | 'UNIQUE'
              | 'SLOT'
              | 'TWO_WAY_BINDING'
              | 'OTHER_DIRECTIVES'
              | 'OTHER_ATTR'
              | 'ATTR_STATIC'
              | 'ATTR_DYNAMIC'
              | 'ATTR_SHORTHAND_BOOL'
              | 'EVENTS'
              | 'CONTENT'
            )[]
        )[];
        alphabetical?: boolean;
      },
    ]
  >;
}
