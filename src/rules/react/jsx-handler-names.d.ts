import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxHandlerNamesRule {
  /**
   * Enforce event handler naming conventions in JSX.
   *
   * @see [jsx-handler-names](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-handler-names.md)
   */
  'react/jsx-handler-names': Rule<
    [
      RuleLevel,
      (
        | {
            eventHandlerPrefix?: string;
            eventHandlerPropPrefix?: string;
            checkLocalVariables?: boolean;
            checkInlineFunction?: boolean;
          }
        | {
            eventHandlerPrefix?: string;
            eventHandlerPropPrefix?: false;
            checkLocalVariables?: boolean;
            checkInlineFunction?: boolean;
          }
        | {
            eventHandlerPrefix?: false;
            eventHandlerPropPrefix?: string;
            checkLocalVariables?: boolean;
            checkInlineFunction?: boolean;
          }
        | {
            checkLocalVariables?: boolean;
          }
        | {
            checkInlineFunction?: boolean;
          }
      ),
    ]
  >;
}
