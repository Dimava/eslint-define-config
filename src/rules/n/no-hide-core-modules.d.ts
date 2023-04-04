import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoHideCoreModulesRule = {
  /**
   * Disallow third-party modules which are hiding core modules.
   *
   * @deprecated
   *
   * @see [no-hide-core-modules](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-hide-core-modules.md)
   */
  'n/no-hide-core-modules': Rule<
    [
      RuleLevel,
      {
        allow?: (
          | 'assert'
          | 'buffer'
          | 'child_process'
          | 'cluster'
          | 'console'
          | 'constants'
          | 'crypto'
          | 'dgram'
          | 'dns'
          | 'events'
          | 'fs'
          | 'http'
          | 'https'
          | 'module'
          | 'net'
          | 'os'
          | 'path'
          | 'querystring'
          | 'readline'
          | 'repl'
          | 'stream'
          | 'string_decoder'
          | 'timers'
          | 'tls'
          | 'tty'
          | 'url'
          | 'util'
          | 'vm'
          | 'zlib'
        )[];
        ignoreDirectDependencies?: boolean;
        ignoreIndirectDependencies?: boolean;
      },
    ]
  >;
};
