// @flow
// this is an auto generated file. This will be overwritten

export const getMasters = /* GraphQL */ `
  query GetMasters($type: MasterType!, $masterCode: String!) {
    getMasters(type: $type, masterCode: $masterCode) {
      type
      masterCode
      party {
        partyCode
        partyName
        partyType
        validPartyRoles
        organizationType
        iecCode
        branchSrno
        address
        city
        state
        pincode
        country
      }
      product {
        hsn {
          hsncode
          hsnDescription
          uomId
          countryid
          totChargeValue
          effectiveStartdate
          effectiveEnddate
          status
          policy
          casRegistryNumber
          remarks
          hsnDuties
          notidtl
          pga
        }
        partDescription
        supplier {
          partyCode
          partyName
          partyType
          validPartyRoles
          organizationType
          iecCode
          branchSrno
          address
          city
          state
          pincode
          country
        }
        partType
        shipper {
          partyCode
          partyName
          partyType
          validPartyRoles
          organizationType
          iecCode
          branchSrno
          address
          city
          state
          pincode
          country
        }
        customer {
          partyCode
          partyName
          partyType
          validPartyRoles
          organizationType
          iecCode
          branchSrno
          address
          city
          state
          pincode
          country
        }
        eximSchemeCode
        customsUom
        genericDescription
        manufacturer {
          partyCode
          partyName
          partyType
          validPartyRoles
          organizationType
          iecCode
          branchSrno
          address
          city
          state
          pincode
          country
        }
        brand
        model
        enduse
        originCountry
        countryOfSource
        countryOfTansit
      }
      svb {
        Company {
          partyCode
          partyName
          partyType
          validPartyRoles
          organizationType
          iecCode
          branchSrno
          address
          city
          state
          pincode
          country
        }
        shipper {
          partyCode
          partyName
          partyType
          validPartyRoles
          organizationType
          iecCode
          branchSrno
          address
          city
          state
          pincode
          country
        }
        relation
        svbRefNo
        svbDate
        svbValidUpto
        customsOffice
        tobeLoadedon
        loadingRateassval
        assblStatus
        loadingDutyrate
        loadingDutyratecur
        dutyStatus
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
          partyCode
          partyName
          partyType
          validPartyRoles
          organizationType
          iecCode
          branchSrno
          address
          city
          state
          pincode
          country
        }
        product {
          partDescription
          partType
          eximSchemeCode
          customsUom
          genericDescription
          brand
          model
          enduse
          originCountry
          countryOfSource
          countryOfTansit
        }
        svb {
          relation
          svbRefNo
          svbDate
          svbValidUpto
          customsOffice
          tobeLoadedon
          loadingRateassval
          assblStatus
          loadingDutyrate
          loadingDutyratecur
          dutyStatus
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
