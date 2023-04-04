import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferNodeProtocolRule = {
  /**
   * Prefer using the `node:` protocol when importing Node.js builtin modules.
   *
   * @see [prefer-node-protocol](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-node-protocol.md)
   */
  'unicorn/prefer-node-protocol': Rule<[RuleLevel]>;
};
