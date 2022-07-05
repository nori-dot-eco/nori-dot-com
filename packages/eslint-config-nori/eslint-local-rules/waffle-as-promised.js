const findInExpressionTree = require('@fintechstudios/eslint-plugin-chai-as-promised/lib/util/find-in-expression-tree'); // todo try replacing with esquery

const isWaffleAsPromised = (node) => {
  return node.type === 'MemberExpression' &&
    ['emit'].includes(node.property.name)
    ? node.property
    : undefined;
};

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Must handle promises returned from waffle-as-promised expressions',
      category: 'Possible Errors',
      recommended: true,
    },
    fixable: undefined,
    schema: [],
  },
  create(context) {
    return {
      ExpressionStatement(node) {
        const [waffleAsPromisedCall] = findInExpressionTree(node.expression, [
          isWaffleAsPromised,
        ]);
        if (waffleAsPromisedCall) {
          context.report({
            node: waffleAsPromisedCall,
            message: 'Events must be handled with await',
          });
        }
      },
    };
  },
};
