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
export const updateMasters = /* GraphQL */ `
  mutation UpdateMasters(
    $input: UpdateMastersInput!
    $condition: ModelMastersConditionInput
  ) {
    updateMasters(input: $input, condition: $condition) {
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
export const deleteMasters = /* GraphQL */ `
  mutation DeleteMasters(
    $input: DeleteMastersInput!
    $condition: ModelMastersConditionInput
  ) {
    deleteMasters(input: $input, condition: $condition) {
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
