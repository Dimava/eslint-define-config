import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface TypedefRule {
  /**
   * Require type annotations in certain places.
   *
   * @see [typedef](https://typescript-eslint.io/rules/typedef)
   */
  '@typescript-eslint/typedef': Rule<
    [
      RuleLevel,
      {
        arrayDestructuring?: boolean;
        arrowParameter?: boolean;
        memberVariableDeclaration?: boolean;
        objectDestructuring?: boolean;
        parameter?: boolean;
        propertyDeclaration?: boolean;
        variableDeclaration?: boolean;
        variableDeclarationIgnoreFunction?: boolean;
        [k: string]: any;
      },
    ]
  >;
}
