// @flow
// this is an auto generated file. This will be overwritten

export const createMasters = /* GraphQL */ `
  mutation CreateMasters(
    $input: CreateMastersInput!
    $condition: ModelMastersConditionInput
  ) {
    createMasters(input: $input, condition: $condition) {
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
export const updateMasters = /* GraphQL */ `
  mutation UpdateMasters(
    $input: UpdateMastersInput!
    $condition: ModelMastersConditionInput
  ) {
    updateMasters(input: $input, condition: $condition) {
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
export const deleteMasters = /* GraphQL */ `
  mutation DeleteMasters(
    $input: DeleteMastersInput!
    $condition: ModelMastersConditionInput
  ) {
    deleteMasters(input: $input, condition: $condition) {
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
