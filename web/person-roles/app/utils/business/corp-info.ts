/** Array of corp info objects. */
const corpInfoArray: Array<CorpInfo> = [
  {
    corpTypeCd: CorpTypeCd.EXTRA_PRO_A,
    colinInd: true,
    corpClass: CorpClass.XPRO,
    shortDesc: 'EXTRA PRO',
    fullDesc: 'Extraprovincial Company'
  }, {
    corpTypeCd: CorpTypeCd.EXTRA_PRO_B,
    colinInd: true,
    corpClass: CorpClass.XPRO,
    shortDesc: 'EXTRA PRO',
    fullDesc: 'Extraprovincial Company'
  }, {
    corpTypeCd: CorpTypeCd.BC_COMPANY,
    colinInd: true,
    corpClass: CorpClass.BC,
    shortDesc: 'BC COMPANY',
    fullDesc: 'BC Limited Company',
    numberedDesc: 'Numbered Limited Company'
  }, {
    corpTypeCd: CorpTypeCd.BENEFIT_COMPANY,
    colinInd: true,
    corpClass: CorpClass.BC,
    shortDesc: 'BENEFIT COMPANY',
    fullDesc: 'BC Benefit Company',
    numberedDesc: 'Numbered Benefit Company'
  }, {
    corpTypeCd: CorpTypeCd.CONTINUE_IN,
    colinInd: true,
    corpClass: CorpClass.BC,
    shortDesc: 'CONTINUE IN',
    fullDesc: 'BC Limited Company',
    numberedDesc: 'Numbered Limited Company'
  }, {
    corpTypeCd: CorpTypeCd.BEN_CONTINUE_IN,
    colinInd: true,
    corpClass: CorpClass.BC,
    shortDesc: 'BEN CONTINUE IN',
    fullDesc: 'BC Benefit Company',
    numberedDesc: 'Numbered Benefit Company'
  }, {
    corpTypeCd: CorpTypeCd.BC_CCC,
    colinInd: true,
    corpClass: CorpClass.BC,
    shortDesc: 'BC CCC',
    fullDesc: 'BC Community Contribution Company',
    numberedDesc: 'Numbered Community Contribution Company'
  }, {
    corpTypeCd: CorpTypeCd.CCC_CONTINUE_IN,
    colinInd: true,
    corpClass: CorpClass.BC,
    shortDesc: 'CCC CONTINUE IN',
    fullDesc: 'BC Community Contribution Company',
    numberedDesc: 'Numbered Community Contribution Company'
  }, {
    corpTypeCd: CorpTypeCd.CEMETARY,
    colinInd: false,
    corpClass: CorpClass.OT,
    shortDesc: 'CEMETARY',
    fullDesc: 'Cemetary'
  }, {
    corpTypeCd: CorpTypeCd.COOP,
    colinInd: false,
    corpClass: CorpClass.OT,
    shortDesc: 'COOP',
    fullDesc: 'BC Cooperative Association',
    numberedDesc: 'Numbered Cooperative Association'
  }, {
  //   // SPECIAL NAMEREQUEST-ONLY ENTITY TYPE
  //   corpTypeCd: CorpTypeCd.CORPORATION,
  //   colinInd: true,
  //   corpClass: CorpClass.BC,
  //   shortDesc: 'BC COMPANY',
  //   fullDesc: 'BC Company', // BC Company - Incorporation/Amalgamation
  //   numberedDesc: 'Numbered Company'
  // }, {
    corpTypeCd: CorpTypeCd.CONT_IN_SOCIETY,
    colinInd: true,
    corpClass: CorpClass.SOC,
    shortDesc: 'CONT IN SOCIETY',
    fullDesc: 'BC Society'
  }, {
    corpTypeCd: CorpTypeCd.ULC_CONTINUE_IN,
    colinInd: true,
    corpClass: CorpClass.BC,
    shortDesc: 'ULC CONTINUE IN',
    fullDesc: 'BC Unlimited Liability Company',
    numberedDesc: 'Numbered Unlimited Liability Company'
  }, {
  //   // SPECIAL NAMEREQUEST-ONLY ENTITY TYPE
  //   corpTypeCd: CorpTypeCd.DOING_BUSINESS_AS,
  //   colinInd: true,
  //   corpClass: CorpClass.FIRM,
  //   shortDesc: 'SOLE PROP',
  //   fullDesc: 'Sole Proprietorship'
  // }, {
    corpTypeCd: CorpTypeCd.EXTRA_PRO_REG,
    colinInd: true,
    corpClass: CorpClass.XPRO,
    shortDesc: 'EXTRA PRO REG',
    fullDesc: 'Extraprovincial Registration'
  }, {
    corpTypeCd: CorpTypeCd.FINANCIAL,
    colinInd: false,
    corpClass: CorpClass.OT,
    shortDesc: 'FINANCIAL',
    fullDesc: 'Financial Institution'
  }, {
    corpTypeCd: CorpTypeCd.FOREIGN,
    colinInd: true,
    corpClass: CorpClass.XPRO,
    shortDesc: 'FOREIGN',
    fullDesc: 'Foreign Registration'
  }, {
  //   // SPECIAL NAMEREQUEST-ONLY ENTITY TYPE
  //   corpTypeCd: CorpTypeCd.SOLE_PROPRIETORSHIP,
  //   colinInd: true,
  //   corpClass: CorpClass.FIRM,
  //   shortDesc: 'SOLE PROP',
  //   fullDesc: 'Sole Proprietorship'
  // }, {
    corpTypeCd: CorpTypeCd.PARTNERSHIP,
    colinInd: true,
    corpClass: CorpClass.FIRM,
    shortDesc: 'PARTNERSHPI',
    fullDesc: 'BC General Partnership'
  }, {
    corpTypeCd: CorpTypeCd.LIBRARY,
    colinInd: false,
    corpClass: CorpClass.OT,
    shortDesc: 'LIBRARY',
    fullDesc: 'Public Library Association'
  }, {
    corpTypeCd: CorpTypeCd.LICENSED,
    colinInd: true,
    corpClass: CorpClass.XPRO,
    shortDesc: 'LICENSED',
    fullDesc: 'Licensed (Extra-Pro)'
  }, {
    corpTypeCd: CorpTypeCd.LL_PARTNERSHIP,
    colinInd: true,
    corpClass: CorpClass.FIRM,
    shortDesc: 'LL PARTNERSHIP',
    fullDesc: 'Limited Liability Partnership'
  }, {
    corpTypeCd: CorpTypeCd.LIMITED_CO,
    colinInd: true,
    corpClass: CorpClass.XPRO,
    shortDesc: 'LIMITED CO',
    fullDesc: 'Limited Liability Company'
  }, {
    corpTypeCd: CorpTypeCd.LIM_PARTNERSHIP,
    colinInd: true,
    corpClass: CorpClass.FIRM,
    shortDesc: 'LIM PARTNERSHIP',
    fullDesc: 'Limited Partnership'
  }, {
    corpTypeCd: CorpTypeCd.MISC_FIRM,
    colinInd: true,
    corpClass: CorpClass.FIRM,
    shortDesc: 'MISC FIRM',
    fullDesc: 'Miscellaneous Firm'
  }, {
    corpTypeCd: CorpTypeCd.PRIVATE_ACT,
    colinInd: false,
    corpClass: CorpClass.OT,
    shortDesc: 'PRIVATE ACT',
    fullDesc: 'Private Act'
  }, {
    corpTypeCd: CorpTypeCd.PARISHES,
    colinInd: false,
    corpClass: CorpClass.OT,
    shortDesc: 'PARISHES',
    fullDesc: 'Parishes'
  }, {
    corpTypeCd: CorpTypeCd.PENSION_FUND_SOCIETY,
    colinInd: false,
    corpClass: CorpClass.OT,
    shortDesc: 'PENS FUND SOCIETY',
    fullDesc: 'Pension Funded Society'
  }, {
    corpTypeCd: CorpTypeCd.CO_1860,
    colinInd: true,
    corpClass: CorpClass.BC,
    shortDesc: 'CO 1860',
    fullDesc: 'CO 1860'
  }, {
    corpTypeCd: CorpTypeCd.CO_1862,
    colinInd: true,
    corpClass: CorpClass.BC,
    shortDesc: 'CO 1862',
    fullDesc: 'CO 1862'
  }, {
    corpTypeCd: CorpTypeCd.CO_1878,
    colinInd: true,
    corpClass: CorpClass.BC,
    shortDesc: 'CO 1878',
    fullDesc: 'CO 1878'
  }, {
    corpTypeCd: CorpTypeCd.CO_1890,
    colinInd: true,
    corpClass: CorpClass.BC,
    shortDesc: 'CO 1890',
    fullDesc: 'CO 1890'
  }, {
    corpTypeCd: CorpTypeCd.CO_1897,
    colinInd: true,
    corpClass: CorpClass.BC,
    shortDesc: 'CO 1897',
    fullDesc: 'CO 1897'
  }, {
    corpTypeCd: CorpTypeCd.REGISTRATION,
    colinInd: true,
    corpClass: CorpClass.XPRO,
    shortDesc: 'REGISTRATION',
    fullDesc: 'Registration (Extra-pro)'
  }, {
    corpTypeCd: CorpTypeCd.RAILWAYS,
    colinInd: false,
    corpClass: CorpClass.OT,
    shortDesc: 'RAILWAYS',
    fullDesc: 'Railways'
  }, {
    corpTypeCd: CorpTypeCd.SOCIETY,
    colinInd: true,
    corpClass: CorpClass.SOC,
    shortDesc: 'SOCIETY',
    fullDesc: 'Society'
  }, {
    corpTypeCd: CorpTypeCd.SOCIETY_BRANCH,
    colinInd: false,
    corpClass: CorpClass.OT,
    shortDesc: 'SOCIETY BRANCH',
    fullDesc: 'Society Branch'
  }, {
    corpTypeCd: CorpTypeCd.SOLE_PROP,
    colinInd: true,
    corpClass: CorpClass.FIRM,
    shortDesc: 'SOLE PROP',
    fullDesc: 'BC Sole Proprietorship'
  }, {
    corpTypeCd: CorpTypeCd.TRUST,
    colinInd: false,
    corpClass: CorpClass.OT,
    shortDesc: 'TRUST',
    fullDesc: 'Trust'
  }, {
    corpTypeCd: CorpTypeCd.TRAMWAYS,
    colinInd: false,
    corpClass: CorpClass.OT,
    shortDesc: 'TRAMWAYS',
    fullDesc: 'Tramways'
  }, {
  //   // SPECIAL NAMEREQUEST-ONLY ENTITY TYPE
  //   corpTypeCd: CorpTypeCd.UNLIMITED_LIABILITY_COMPANY,
  //   colinInd: true,
  //   corpClass: CorpClass.BC,
  //   shortDesc: 'BC ULC COMPANY',
  //   fullDesc: 'BC Unlimited Liability Company',
  //   numberedDesc: 'Numbered Unlimited Liability Company'
  // }, {
    corpTypeCd: CorpTypeCd.BC_ULC_COMPANY,
    colinInd: true,
    corpClass: CorpClass.BC,
    shortDesc: 'BC ULC COMPANY',
    fullDesc: 'BC Unlimited Liability Company',
    numberedDesc: 'Numbered Unlimited Liability Company'
  }, {
    corpTypeCd: CorpTypeCd.ULC_CO_1860,
    colinInd: true,
    corpClass: CorpClass.BC,
    shortDesc: 'ULC CO 1860',
    fullDesc: 'ULC CO 1860'
  }, {
    corpTypeCd: CorpTypeCd.ULC_CO_1862,
    colinInd: true,
    corpClass: CorpClass.BC,
    shortDesc: 'ULC CO 1862',
    fullDesc: 'ULC CO 1862'
  }, {
    corpTypeCd: CorpTypeCd.ULC_CO_1878,
    colinInd: true,
    corpClass: CorpClass.BC,
    shortDesc: 'ULC CO 1878',
    fullDesc: 'ULC CO 1878'
  }, {
    corpTypeCd: CorpTypeCd.ULC_CO_1890,
    colinInd: true,
    corpClass: CorpClass.BC,
    shortDesc: 'ULC CO 1890',
    fullDesc: 'ULC CO 1890'
  }, {
    corpTypeCd: CorpTypeCd.ULC_CO_1897,
    colinInd: true,
    corpClass: CorpClass.BC,
    shortDesc: 'ULC CO 1897',
    fullDesc: 'ULC CO 1897'
  }, {
    corpTypeCd: CorpTypeCd.XPRO_COOP,
    colinInd: false,
    corpClass: CorpClass.OT,
    shortDesc: 'XPRO COOP',
    fullDesc: 'Extraprovincial Cooperative Assocation'
  }, {
    corpTypeCd: CorpTypeCd.XPRO_CORPORATION,
    colinInd: false,
    corpClass: CorpClass.OT,
    shortDesc: 'XPRO CORPORATION',
    fullDesc: 'Extraprovincial Limited Company'
  }, {
    corpTypeCd: CorpTypeCd.XPRO_LL_PARTNR,
    colinInd: true,
    corpClass: CorpClass.FIRM,
    shortDesc: 'XPRO LL PARTNR',
    fullDesc: 'Extrapro Limited Liability Partnership'
  }, {
    corpTypeCd: CorpTypeCd.XPRO_LIM_PARTNR,
    colinInd: true,
    corpClass: CorpClass.FIRM,
    shortDesc: 'XPRO LIM PARTNR',
    fullDesc: 'Extraprovincial Limited Partnership'
  }, {
    corpTypeCd: CorpTypeCd.XPRO_SOCIETY,
    colinInd: true,
    corpClass: CorpClass.SOC,
    shortDesc: 'XPRO SOCIETY',
    fullDesc: 'Extraprovincial Society'
  }
]

/**
 * Given corp type code, returns the corp info object.
 * @param cd the corp type code to get
 * @returns the corp info object (or undefined if not found)
 */
export function getCorpInfoObject(cd: CorpTypeCd): CorpInfo | null {
  return corpInfoArray.find(obj => (cd === obj.corpTypeCd)) || null
}

/**
 * Given corp type code, returns corp full description.
 * @param cd the corp type code to get
 * @returns the description (or '' if not found)
 */
export function getCorpFullDescription(cd: CorpTypeCd): string {
  const item = corpInfoArray.find(obj => (cd === obj.corpTypeCd))
  return (item && item.fullDesc) || ''
}

/**
 * Given corp type code, returns corp "numbered" description.
 * @param cd the corp type code to get
 * @returns the description (or '' if not found)
 */
export function getCorpNumberedDescription(cd: CorpTypeCd): string {
  const item = corpInfoArray.find(obj => (cd === obj.corpTypeCd))
  return (item && item.numberedDesc) || ''
}
