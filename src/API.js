/* @flow */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMastersInput = {|
  type: MasterType,
  masterCode: string,
  party?: ?PartyInput,
  product?: ?ProductInput,
  svb?: ?SVBInput,
|};

export type MasterType =
  "PARTY" |
  "SVB" |
  "PRODUCT";


export type PartyInput = {|
  partyName: string,
  partyType: string,
|};

export type ProductInput = {|
  hsn: string,
|};

export type SVBInput = {|
  customsOffice: string,
|};

export type ModelMastersConditionInput = {|
  and?: ?Array< ?ModelMastersConditionInput >,
  or?: ?Array< ?ModelMastersConditionInput >,
  not?: ?ModelMastersConditionInput,
|};

export type UpdateMastersInput = {|
  type: MasterType,
  masterCode: string,
  party?: ?PartyInput,
  product?: ?ProductInput,
  svb?: ?SVBInput,
|};

export type DeleteMastersInput = {|
  type: MasterType,
  masterCode: string,
|};

export type ModelStringKeyConditionInput = {|
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
|};

export type ModelMastersFilterInput = {|
  type?: ?ModelMasterTypeInput,
  masterCode?: ?ModelStringInput,
  and?: ?Array< ?ModelMastersFilterInput >,
  or?: ?Array< ?ModelMastersFilterInput >,
  not?: ?ModelMastersFilterInput,
|};

export type ModelMasterTypeInput = {|
  eq?: ?MasterType,
  ne?: ?MasterType,
|};

export type ModelStringInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
  size?: ?ModelSizeInput,
|};

export type ModelAttributeTypes =
  "binary" |
  "binarySet" |
  "bool" |
  "list" |
  "map" |
  "number" |
  "numberSet" |
  "string" |
  "stringSet" |
  "_null";


export type ModelSizeInput = {|
  ne?: ?number,
  eq?: ?number,
  le?: ?number,
  lt?: ?number,
  ge?: ?number,
  gt?: ?number,
  between?: ?Array< ?number >,
|};

export type ModelSortDirection =
  "ASC" |
  "DESC";


export type CreateMastersMutationVariables = {|
  input: CreateMastersInput,
  condition?: ?ModelMastersConditionInput,
|};

export type CreateMastersMutation = {|
  createMasters: ? {|
    __typename: "Masters",
    type: MasterType,
    masterCode: string,
    party: ? {|
      __typename: "Party",
      partyName: string,
      partyType: string,
    |},
    product: ? {|
      __typename: "Product",
      hsn: string,
    |},
    svb: ? {|
      __typename: "SVB",
      customsOffice: string,
    |},
    createdAt: any,
    updatedAt: any,
  |},
|};

export type UpdateMastersMutationVariables = {|
  input: UpdateMastersInput,
  condition?: ?ModelMastersConditionInput,
|};

export type UpdateMastersMutation = {|
  updateMasters: ? {|
    __typename: "Masters",
    type: MasterType,
    masterCode: string,
    party: ? {|
      __typename: "Party",
      partyName: string,
      partyType: string,
    |},
    product: ? {|
      __typename: "Product",
      hsn: string,
    |},
    svb: ? {|
      __typename: "SVB",
      customsOffice: string,
    |},
    createdAt: any,
    updatedAt: any,
  |},
|};

export type DeleteMastersMutationVariables = {|
  input: DeleteMastersInput,
  condition?: ?ModelMastersConditionInput,
|};

export type DeleteMastersMutation = {|
  deleteMasters: ? {|
    __typename: "Masters",
    type: MasterType,
    masterCode: string,
    party: ? {|
      __typename: "Party",
      partyName: string,
      partyType: string,
    |},
    product: ? {|
      __typename: "Product",
      hsn: string,
    |},
    svb: ? {|
      __typename: "SVB",
      customsOffice: string,
    |},
    createdAt: any,
    updatedAt: any,
  |},
|};

export type GetMastersQueryVariables = {|
  type: MasterType,
  masterCode: string,
|};

export type GetMastersQuery = {|
  getMasters: ? {|
    __typename: "Masters",
    type: MasterType,
    masterCode: string,
    party: ? {|
      __typename: "Party",
      partyName: string,
      partyType: string,
    |},
    product: ? {|
      __typename: "Product",
      hsn: string,
    |},
    svb: ? {|
      __typename: "SVB",
      customsOffice: string,
    |},
    createdAt: any,
    updatedAt: any,
  |},
|};

export type ListMasterssQueryVariables = {|
  type?: ?MasterType,
  masterCode?: ?ModelStringKeyConditionInput,
  filter?: ?ModelMastersFilterInput,
  limit?: ?number,
  nextToken?: ?string,
  sortDirection?: ?ModelSortDirection,
|};

export type ListMasterssQuery = {|
  listMasterss: ? {|
    __typename: "ModelMastersConnection",
    items: ? Array<? {|
      __typename: "Masters",
      type: MasterType,
      masterCode: string,
      party: ? {|
        __typename: "Party",
        partyName: string,
        partyType: string,
      |},
      product: ? {|
        __typename: "Product",
        hsn: string,
      |},
      svb: ? {|
        __typename: "SVB",
        customsOffice: string,
      |},
      createdAt: any,
      updatedAt: any,
    |} >,
    nextToken: ?string,
  |},
|};

export type OnCreateMastersSubscription = {|
  onCreateMasters: ? {|
    __typename: "Masters",
    type: MasterType,
    masterCode: string,
    party: ? {|
      __typename: "Party",
      partyName: string,
      partyType: string,
    |},
    product: ? {|
      __typename: "Product",
      hsn: string,
    |},
    svb: ? {|
      __typename: "SVB",
      customsOffice: string,
    |},
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnUpdateMastersSubscription = {|
  onUpdateMasters: ? {|
    __typename: "Masters",
    type: MasterType,
    masterCode: string,
    party: ? {|
      __typename: "Party",
      partyName: string,
      partyType: string,
    |},
    product: ? {|
      __typename: "Product",
      hsn: string,
    |},
    svb: ? {|
      __typename: "SVB",
      customsOffice: string,
    |},
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnDeleteMastersSubscription = {|
  onDeleteMasters: ? {|
    __typename: "Masters",
    type: MasterType,
    masterCode: string,
    party: ? {|
      __typename: "Party",
      partyName: string,
      partyType: string,
    |},
    product: ? {|
      __typename: "Product",
      hsn: string,
    |},
    svb: ? {|
      __typename: "SVB",
      customsOffice: string,
    |},
    createdAt: any,
    updatedAt: any,
  |},
|};