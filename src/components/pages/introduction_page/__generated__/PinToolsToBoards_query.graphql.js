/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PinToolsToBoards_query$ref: FragmentReference;
declare export opaque type PinToolsToBoards_query$fragmentType: PinToolsToBoards_query$ref;
export type PinToolsToBoards_query = {|
  +topics: ?{|
    +totalCount: number,
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +title: string,
        +defaultViewId: ?string,
        +tagList: ?$ReadOnlyArray<string>,
      |}
    |}>,
  |},
  +$refType: PinToolsToBoards_query$ref,
|};
export type PinToolsToBoards_query$data = PinToolsToBoards_query;
export type PinToolsToBoards_query$key = {
  +$data?: PinToolsToBoards_query$data,
  +$fragmentRefs: PinToolsToBoards_query$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "topicId"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "topics"
        ]
      }
    ]
  },
  "name": "PinToolsToBoards_query",
  "selections": [
    {
      "alias": "topics",
      "args": [
        {
          "kind": "Literal",
          "name": "all",
          "value": true
        },
        {
          "kind": "Variable",
          "name": "parentId",
          "variableName": "topicId"
        },
        {
          "kind": "Literal",
          "name": "sort",
          "value": "created_at desc"
        }
      ],
      "concreteType": "TopicConnection",
      "kind": "LinkedField",
      "name": "__PinToolsToBoards_topics_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TopicEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Topic",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "title",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "defaultViewId",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "tagList",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '4c581ee6843fc8959fee4402d760be8c';

module.exports = node;
