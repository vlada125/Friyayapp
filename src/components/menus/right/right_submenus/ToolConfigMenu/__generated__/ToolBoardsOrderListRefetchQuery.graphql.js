/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ToolBoardsOrderList_query$ref = any;
export type ToolBoardsOrderListRefetchQueryVariables = {|
  topicId?: ?string,
  lenseId?: ?string,
  lenseKey?: ?string,
|};
export type ToolBoardsOrderListRefetchQueryResponse = {|
  +$fragmentRefs: ToolBoardsOrderList_query$ref
|};
export type ToolBoardsOrderListRefetchQuery = {|
  variables: ToolBoardsOrderListRefetchQueryVariables,
  response: ToolBoardsOrderListRefetchQueryResponse,
|};
*/


/*
query ToolBoardsOrderListRefetchQuery(
  $topicId: ID
  $lenseId: ID
  $lenseKey: String
) {
  ...ToolBoardsOrderList_query_1fsNJc
}

fragment ToolBoardsOrderList_query_1fsNJc on Query {
  customOrders(orderType: topics, topicId: $topicId, lenseId: $lenseId, lenseKey: $lenseKey) {
    id
    name
  }
  activeCustomOrder(orderType: topics, topicId: $topicId, lenseId: $lenseId, lenseKey: $lenseKey) {
    id
  }
  defaultCustomOrder(orderType: topics, topicId: $topicId, lenseId: $lenseId, lenseKey: $lenseKey) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "lenseId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "lenseKey"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "topicId"
},
v3 = {
  "kind": "Variable",
  "name": "lenseId",
  "variableName": "lenseId"
},
v4 = {
  "kind": "Variable",
  "name": "lenseKey",
  "variableName": "lenseKey"
},
v5 = {
  "kind": "Variable",
  "name": "topicId",
  "variableName": "topicId"
},
v6 = [
  (v3/*: any*/),
  (v4/*: any*/),
  {
    "kind": "Literal",
    "name": "orderType",
    "value": "topics"
  },
  (v5/*: any*/)
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = [
  (v7/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ToolBoardsOrderListRefetchQuery",
    "selections": [
      {
        "args": [
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "ToolBoardsOrderList_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "ToolBoardsOrderListRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": "CustomOrder",
        "kind": "LinkedField",
        "name": "customOrders",
        "plural": true,
        "selections": [
          (v7/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": "CustomOrder",
        "kind": "LinkedField",
        "name": "activeCustomOrder",
        "plural": false,
        "selections": (v8/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": "CustomOrder",
        "kind": "LinkedField",
        "name": "defaultCustomOrder",
        "plural": false,
        "selections": (v8/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "86cb594b5a6f732fda1c0742c540a7a7",
    "id": null,
    "metadata": {},
    "name": "ToolBoardsOrderListRefetchQuery",
    "operationKind": "query",
    "text": "query ToolBoardsOrderListRefetchQuery(\n  $topicId: ID\n  $lenseId: ID\n  $lenseKey: String\n) {\n  ...ToolBoardsOrderList_query_1fsNJc\n}\n\nfragment ToolBoardsOrderList_query_1fsNJc on Query {\n  customOrders(orderType: topics, topicId: $topicId, lenseId: $lenseId, lenseKey: $lenseKey) {\n    id\n    name\n  }\n  activeCustomOrder(orderType: topics, topicId: $topicId, lenseId: $lenseId, lenseKey: $lenseKey) {\n    id\n  }\n  defaultCustomOrder(orderType: topics, topicId: $topicId, lenseId: $lenseId, lenseKey: $lenseKey) {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f6f490762897e5f8a5338c11399801c2';

module.exports = node;
