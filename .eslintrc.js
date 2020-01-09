module.exports = {
  root: true,
  env: {
    node: true,
    es6: true, // ADDED *****
  },
  extends: [
    // 'plugin:vue/recommended',
    'eslint:recommended',
  ],
  rules: {
    // // ==================================================
    // // Vue (eslint-plugin-vue 5.2.3)
    // // ==================================================

    // // Base Rules (Enabling Correct Eslint Parsing)
    // // --------------------------------------------------
    // // 'vue/comment-directive': 'error', // plugin:vue/recommended
    // // 'vue/jsx-uses-vars': 'error', // plugin:vue/recommended

    // // Priority A: Essential (Error Prevention)
    // // --------------------------------------------------
    // // 'vue/no-async-in-computed-properties': 'error', // plugin:vue/recommended
    // // 'vue/no-dupe-keys': 'error', // plugin:vue/recommended
    // // 'vue/no-duplicate-attributes': 'error', // plugin:vue/recommended
    // // 'vue/no-parsing-error': 'error', // plugin:vue/recommended
    // // 'vue/no-reserved-keys': 'error', // plugin:vue/recommended
    // // 'vue/no-shared-component-data': 'error', // plugin:vue/recommended fixable
    // // 'vue/no-side-effects-in-computed-properties': 'error', // plugin:vue/recommended
    // // 'vue/no-template-key': 'error', // plugin:vue/recommended
    // // 'vue/no-textarea-mustache': 'error', // plugin:vue/recommended
    // // 'vue/no-unused-components': 'error', // plugin:vue/recommended
    // // 'vue/no-unused-vars': 'error', // plugin:vue/recommended
    // // 'vue/no-use-v-if-with-v-for': 'error', // plugin:vue/recommended
    // // 'vue/require-component-is': 'error', // plugin:vue/recommended
    // // 'vue/require-prop-type-constructor': 'error', // plugin:vue/recommended fixable
    // // 'vue/require-render-return': 'error', // plugin:vue/recommended
    // // 'vue/require-v-for-key': 'error', // plugin:vue/recommended
    // // 'vue/require-valid-default-prop': 'error', // plugin:vue/recommended
    // // 'vue/return-in-computed-property': 'error', // plugin:vue/recommended
    // // 'vue/use-v-on-exact': 'error', // plugin:vue/recommended
    // // 'vue/valid-template-root': 'error', // plugin:vue/recommended
    // // 'vue/valid-v-bind': 'error', // plugin:vue/recommended
    // // 'vue/valid-v-cloak': 'error', // plugin:vue/recommended
    // // 'vue/valid-v-else-if': 'error', // plugin:vue/recommended
    // // 'vue/valid-v-else': 'error', // plugin:vue/recommended
    // // 'vue/valid-v-for': 'error', // plugin:vue/recommended
    // // 'vue/valid-v-html': 'error', // plugin:vue/recommended
    // // 'vue/valid-v-if': 'error', // plugin:vue/recommended
    // // 'vue/valid-v-model': 'error', // plugin:vue/recommended
    // // 'vue/valid-v-on': 'error', // plugin:vue/recommended
    // // 'vue/valid-v-once': 'error', // plugin:vue/recommended
    // // 'vue/valid-v-pre': 'error', // plugin:vue/recommended
    // // 'vue/valid-v-show': 'error', // plugin:vue/recommended
    // // 'vue/valid-v-text': 'error', // plugin:vue/recommended

    // // Priority B: Strongly Recommended (Improving Readability)
    // // --------------------------------------------------
    // // 'vue/attribute-hyphenation': 'warn', // plugin:vue/recommended fixable
    // // 'vue/html-closing-bracket-newline': 'warn', // plugin:vue/recommended fixable
    // // 'vue/html-closing-bracket-spacing': 'warn', // plugin:vue/recommended fixable
    // // 'vue/html-end-tags': 'warn', // plugin:vue/recommended fixable
    // // 'vue/html-indent': 'warn', // plugin:vue/recommended fixable
    // // 'vue/html-quotes': 'warn', // plugin:vue/recommended fixable
    // 'vue/html-self-closing': ['error', { html: { void: 'always', normal: 'never' } }], // plugin:vue/recommended fixable (bugfix - disable when https://github.com/vuejs/Eslint-Plugin-vue/issues/905 is closed)
    // 'vue/max-attributes-per-line': 'off', // plugin:vue/recommended fixable
    // // 'vue/multiline-html-element-content-newline': 'warn', // plugin:vue/recommended fixable
    // // 'vue/mustache-interpolation-spacing': 'warn', // plugin:vue/recommended fixable
    // // 'vue/name-property-casing': 'warn', // plugin:vue/recommended fixable
    // // 'vue/no-multi-spaces': 'warn', // plugin:vue/recommended fixable
    // // 'vue/no-spaces-around-equal-signs-in-attribute': 'warn', // plugin:vue/recommended fixable
    // // 'vue/no-template-shadow': 'warn', // plugin:vue/recommended
    // // 'vue/prop-name-casing': 'warn', // plugin:vue/recommended fixable
    // // 'vue/require-default-prop': 'warn', // plugin:vue/recommended
    // // 'vue/require-prop-types': 'warn', // plugin:vue/recommended
    // 'vue/singleline-html-element-content-newline': 'off', // plugin:vue/recommended fixable
    // // 'vue/v-bind-style': 'warn', // plugin:vue/recommended fixable
    // // 'vue/v-on-style': 'warn', // plugin:vue/recommended fixable

    // // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)
    // // --------------------------------------------------
    // // 'vue/attributes-order': 'warn', // plugin:vue/recommended fixable
    // // 'vue/no-v-html': 'warn', // plugin:vue/recommended
    // // 'vue/order-in-components': 'warn', // plugin:vue/recommended fixable
    // // 'vue/this-in-template': 'warn', // plugin:vue/recommended

    // // Uncategorized
    // // --------------------------------------------------
    // 'vue/array-bracket-spacing': ['error', 'never'], // fixable
    // 'vue/arrow-spacing': 'error', // fixable
    // 'vue/block-spacing': 'error', // fixable
    // 'vue/brace-style': 'error', // fixable
    // 'vue/camelcase': 'error',
    // 'vue/comma-dangle': ['error', 'always-multiline'], // fixable
    // 'vue/component-name-in-template-casing': ['error', 'kebab-case', { registeredComponentsOnly: false }], // fixable
    // // 'vue/dot-location': ['error', 'property'], // fixable broken (enable when fixed)
    // 'vue/eqeqeq': 'error', // fixable
    // 'vue/key-spacing': 'error', // fixable
    // // 'vue/keyword-spacing': ['error', { before: true, after: true }], // fixable broken (enable when fixed)
    // 'vue/match-component-file-name': 'off',
    // 'vue/no-boolean-default': 'error', // fixable
    // // 'vue/no-deprecated-scope-attribute': 'error', // fixable broken (enable when fixed)
    // // 'vue/no-empty-pattern': 'error', // broken (enable when fixed)
    // 'vue/no-restricted-syntax': 'off',
    // 'vue/object-curly-spacing': ['error', 'always'], // fixable
    // 'vue/require-direct-export': 'error',
    // 'vue/script-indent': 'off', // fixable
    // 'vue/space-infix-ops': 'error', // fixable
    // 'vue/space-unary-ops': 'error', // fixable
    // 'vue/v-on-function-call': 'error', // fixable
    // // 'vue/v-slot-style': 'error', // fixable broken (enable when fixed)
    // // 'vue/valid-v-slot': 'error', // broken (enable when fixed)


    // ==================================================
    // Eslint (eslint 5.0.0)
    // ==================================================

    // Possible Errors
    // --------------------------------------------------
    // 'for-direction': 'error', // eslint:recommended
    // 'getter-return': 'error', // eslint:recommended
    'no-await-in-loop': 'error',
    // 'no-compare-neg-zero': 'error', // eslint:recommended
    // 'no-cond-assign': 'error', // eslint:recommended
    'no-console': 'error',
    // 'no-constant-condition': 'error', // eslint:recommended
    // 'no-control-regex': 'error', // eslint:recommended
    // 'no-debugger': 'error', // eslint:recommended
    // 'no-dupe-args': 'error', // eslint:recommended
    // 'no-dupe-keys': 'error', // eslint:recommended
    // 'no-duplicate-case': 'error', // eslint:recommended
    // 'no-empty': 'error', // eslint:recommended
    // 'no-empty-character-class': 'error', // eslint:recommended
    // 'no-ex-assign': 'error', // eslint:recommended
    // 'no-extra-boolean-cast': 'error', // eslint:recommended fixable
    'no-extra-parens': 'off', // fixable
    // 'no-extra-semi': 'error', // eslint:recommended fixable
    // 'no-func-assign': 'error', // eslint:recommended
    // 'no-inner-declarations': 'error', // eslint:recommended
    // 'no-invalid-regexp': 'error', // eslint:recommended
    // 'no-irregular-whitespace': 'error', // eslint:recommended
    // 'no-obj-calls': 'error', // eslint:recommended
    // 'no-regex-spaces': 'error', // eslint:recommended fixable
    // 'no-sparse-arrays': 'error', // eslint:recommended
    'no-template-curly-in-string': 'off',
    // 'no-unexpected-multiline': 'error', // eslint:recommended
    // 'no-unreachable': 'error', // eslint:recommended
    // 'no-unsafe-finally': 'error', // eslint:recommended
    // 'no-unsafe-negation': 'error', // eslint:recommended fixable
    // 'use-isnan': 'error', // eslint:recommended
    // 'valid-typeof': 'error', // eslint:recommended

    // Best Practices
    // --------------------------------------------------
    'accessor-pairs': 'off',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'class-methods-use-this': 'error',
    'complexity': 'off',
    'consistent-return': 'off',
    'curly': 'error', // fixable
    'default-case': 'off',
    'dot-location': ['error', 'property'], // fixable
    'dot-notation': 'off', // fixable
    'eqeqeq': 'error', // fixable
    'guard-for-in': 'off',
    'max-classes-per-file': 'off',
    'no-alert': 'error',
    'no-caller': 'error',
    // 'no-case-declarations': 'error', // eslint:recommended
    'no-div-regex': 'off', // fixable
    'no-else-return': 'off', // fixable
    'no-empty-function': 'error',
    // 'no-empty-pattern': 'error', // eslint:recommended
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error', // fixable
    'no-extra-label': 'error', // fixable
    // 'no-fallthrough': 'error', // eslint:recommended
    'no-floating-decimal': 'error', // fixable
    // 'no-global-assign': 'error', // eslint:recommended
    'no-implicit-coercion': 'error', // fixable
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-multi-spaces': 'error', // fixable
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    // 'no-octal': 'error', // eslint:recommended
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-restricted-properties': 'off',
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    // 'no-self-assign': 'error', // eslint:recommended
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    // 'no-unused-labels': 'error', // eslint:recommended fixable
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    // 'no-useless-escape': 'error', // eslint:recommended
    'no-useless-return': 'error', // fixable
    'no-void': 'error',
    'no-warning-comments': 'error',
    'prefer-named-capture-group': 'off',
    'prefer-promise-reject-errors': 'error',
    'radix': 'off',
    'require-await': 'error',
    'require-unicode-regexp': 'off',
    'vars-on-top': 'off',
    'wrap-iife': ['error', 'inside', { functionPrototypeMethods: true }], // fixable
    'yoda': 'error', // fixable

    // Strict Mode
    // --------------------------------------------------
    'strict': 'off', // fixable

    // Variables
    // --------------------------------------------------
    'init-declarations': 'off',
    // 'no-delete-var': 'error', // eslint:recommended
    'no-label-var': 'error',
    'no-restricted-globals': ['error', 'event'],
    'no-shadow': 'off',
    // 'no-undef': 'error', // eslint:recommended
    'no-undef-init': 'error', // fixable
    'no-undefined': 'off',
    // 'no-unused-vars': 'error', // eslint:recommended
    'no-use-before-define': ['error', { functions: false, classes: false }],

    // Node.js and CommonJS
    // --------------------------------------------------
    'callback-return': 'error',
    'global-require': 'off',
    'handle-callback-err': 'off',
    'no-buffer-constructor': 'error',
    'no-mixed-requires': ['error', { grouping: true, allowCall: true }],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-restricted-modules': 'off',
    'no-sync': 'off',

    // Stylistic Issues
    // --------------------------------------------------
    'array-bracket-newline': ['error', 'consistent'], // fixable
    'array-bracket-spacing': 'error', // fixable
    'array-element-newline': ['error', 'consistent'], // fixable
    'block-spacing': 'error', // fixable
    'brace-style': 'error', // fixable
    'camelcase': 'error',
    'capitalized-comments': 'off', // fixable
    'comma-spacing': 'error', // fixable
    'comma-style': ['error', 'last', { exceptions: { ArrayExpression: false, ArrayPattern: false, ArrowFunctionExpression: false, CallExpression: false, FunctionDeclaration: false, FunctionExpression: false, ImportDeclaration: false, ObjectExpression: false, ObjectPattern: false, VariableDeclaration: false, NewExpression: false } }], // fixable
    'computed-property-spacing': 'error', // fixable
    'consistent-this': 'off',
    'eol-last': 'error', // fixable
    'func-call-spacing': 'error', // fixable
    'func-name-matching': ['error', { considerPropertyDescriptor: true }],
    'func-names': 'off',
    'func-style': 'off',
    'function-paren-newline': ['error', 'consistent'], // fixable
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'implicit-arrow-linebreak': 'error', // fixable
    'indent': ['error', 2], // fixable
    'jsx-quotes': ['error', 'prefer-single'], // fixable
    'key-spacing': 'error', // fixable
    'keyword-spacing': 'error', // fixable
    'line-comment-position': 'off',
    'linebreak-style': 'off', // fixable
    'lines-around-comment': 'off', // fixable
    'lines-between-class-members': 'error', // fixable
    'max-depth': 'off',
    'max-len': 'off',
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': 'error',
    'multiline-comment-style': 'off', // fixable
    'multiline-ternary': ['error', 'never'],
    'new-cap': 'error',
    'new-parens': 'error', // fixable
    'newline-per-chained-call': 'off', // fixable
    'no-array-constructor': 'error',
    'no-bitwise': 'off',
    'no-continue': 'off',
    'no-inline-comments': 'off',
    'no-lonely-if': 'off', // fixable
    'no-mixed-operators': 'error',
    // 'no-mixed-spaces-and-tabs': 'error', // eslint:recommended
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': 'error', // fixable
    'no-negated-condition': 'off',
    'no-nested-ternary': 'off',
    'no-new-object': 'error',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': 'error', // fixable
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }], // fixable
    'no-whitespace-before-property': 'error', // fixable
    'nonblock-statement-body-position': 'error', // fixable
    'object-curly-newline': 'error', // fixable
    'object-curly-spacing': ['error', 'always'], // fixable
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }], // fixable
    'one-var': ['error', 'never'], // fixable
    'one-var-declaration-per-line': 'off', // fixable
    'operator-assignment': 'off', // fixable
    'operator-linebreak': ['error', 'none'], // fixable
    'padded-blocks': 'off', // fixable
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: ['directive', 'import', 'export'] }, { blankLine: 'always', prev: ['directive', 'import', 'export'], next: '*' }, { blankLine: 'any', prev: ['directive', 'import', 'export'], next: ['directive', 'import', 'export'] }, { blankLine: 'always', prev: '*', next: ['const', 'let', 'var'] }, { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' }, { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] }, { blankLine: 'always', prev: '*', next: 'return' }, { blankLine: 'always', prev: '*', next: ['multiline-block-like', 'multiline-expression', 'multiline-const', 'multiline-let', 'multiline-var'] }, { blankLine: 'always', prev: ['multiline-block-like', 'multiline-expression', 'multiline-const', 'multiline-let', 'multiline-var'], next: '*' }], // fixable
    'prefer-object-spread': 'off', // fixable
    'quote-props': ['error', 'consistent-as-needed'], // fixable
    'quotes': ['error', 'single', { avoidEscape: true }], // fixable
    'semi': 'error', // fixable
    'semi-spacing': 'error', // fixable
    'semi-style': 'error', // fixable
    'sort-keys': 'off',
    'sort-vars': 'off', // fixable
    'space-before-blocks': 'error', // fixable
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }], // fixable
    'space-in-parens': 'error', // fixable
    'space-infix-ops': 'error', // fixable
    'space-unary-ops': 'error', // fixable
    'spaced-comment': ['error', 'always', { block: { balanced: true } }], // fixable
    'switch-colon-spacing': 'error', // fixable
    'template-tag-spacing': 'error', // fixable
    'unicode-bom': 'error', // fixable
    'wrap-regex': 'off', // fixable

    // ECMAScript 6
    // --------------------------------------------------
    'arrow-body-style': 'off', // fixable
    'arrow-parens': ['error', 'as-needed'], // fixable
    'arrow-spacing': 'error', // fixable
    // 'constructor-super': 'error', // eslint:recommended
    'generator-star-spacing': ['error', { named: 'after', anonymous: 'after', method: 'neither' }], // fixable
    // 'no-class-assign': 'error', // eslint:recommended
    // 'no-const-assign': 'error', // eslint:recommended
    // 'no-dupe-class-members': 'error', // eslint:recommended
    'no-duplicate-imports': ['error', { includeExports: true }],
    // 'no-new-symbol': 'error', // eslint:recommended
    'no-restricted-imports': 'off',
    // 'no-this-before-super': 'error', // eslint:recommended
    'no-useless-computed-key': 'error', // fixable
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error', // fixable
    'no-var': 'error', // fixable
    'object-shorthand': 'error', // fixable
    'prefer-arrow-callback': 'error', // fixable
    'prefer-const': ['error', { ignoreReadBeforeAssign: true }], // fixable
    'prefer-destructuring': 'off', // fixable
    'prefer-numeric-literals': 'off', // fixable
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'off', // fixable
    // 'require-yield': 'error', // eslint:recommended
    'rest-spread-spacing': 'error', // fixable
    'sort-imports': 'off', // fixable
    'symbol-description': 'error',
    'template-curly-spacing': 'error', // fixable
    'yield-star-spacing': 'error', // fixable

    // Rules changed from eslint 5 => 6
    // --------------------------------------------------
    'no-misleading-character-class': 'error', // eslint:recommended CHANGED 5 => 6 is now recommended *****
    'no-async-promise-executor': 'error', // eslint:recommended CHANGED 5 => 6 is now recommended *****
    'no-prototype-builtins': 'error', // eslint:recommended CHANGED 5 => 6 is now recommended *****
    'require-atomic-updates': 'error', // eslint:recommended CHANGED 5 => 6 was recommended, now removed from 6, need to enable in 5 and 6 *****
    'no-useless-catch': 'error', // eslint:recommended CHANGED 5 => 6 is now recommended *****
    'no-with': 'error', // eslint:recommended CHANGED 5 => 6 is now recommended *****
    'no-shadow-restricted-names': 'error', // eslint:recommended CHANGED 5 => 6 is now recommended *****

    'no-confusing-arrow': 'off', // fixable CHANGED 5 => 6 now more lenient, keep off to align with our current eslint rules *****
    'comma-dangle': ['error', 'always-multiline'], // fixable CHANGED 5 => 6 now more strict, keep as is to align with our current eslint rules *****
    'no-redeclare': 'error', // eslint:recommended CHANGED 5 => 6 now more strict, turn on to align with our current eslint rules *****
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 8, // ADDED *****
  },
};
