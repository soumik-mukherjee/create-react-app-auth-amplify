// @flow
// this is an auto generated file. This will be overwritten

export const getMasters = /* GraphQL */ `
  query GetMasters($type: MasterType!, $masterCode: String!) {
    getMasters(type: $type, masterCode: $masterCode) {
      type
      masterCode
      party {
        partyName
        partyType
      }
      product {
        hsn
      }
      svb {
        customsOffice
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMasterss = /* GraphQL */ `
  query ListMasterss(
    $type: MasterType
    $masterCode: ModelStringKeyConditionInput
    $filter: ModelMastersFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMasterss(
      type: $type
      masterCode: $masterCode
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        type
        masterCode
        party {
          partyName
          partyType
        }
        product {
          hsn
        }
        svb {
          customsOffice
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
