/********************************************************************************
 * Copyright (c) 2021,2022 Mercedes-Benz Group AG and BMW Group AG
 * Copyright (c) 2021,2022 Contributors to the CatenaX (ng) GitHub Organisation.
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ********************************************************************************/

export const isQueryDataPresent = (queryData: any) =>
  queryData && queryData.length > 0

export const isContentPresent = (data: any) => data && data.content

export const addCountryAttribute = (finalObj: any, payload: any) => {
  finalObj.forEach((x: any) => {
    payload.forEach((y: any) => {
      if (x.legalEntity.bpn === y.legalEntity) {
        x.legalEntity.country = y.legalAddress.country
      }
    })
  })
  return finalObj
}

export const addMemberAttribute = (finalObj: any, queryData: any) => {
  if (queryData) {
    finalObj.forEach((x: any) => {
      x.legalEntity.member = queryData.includes(x.legalEntity.bpn)
    })
  }
  return finalObj
}

export const hasMorePages = (data: any) => {
  return (
    data?.page < data?.totalPages - 1 ||
    (data?.meta && data.meta.page < data.meta.totalPages - 1)
  )
}

export const getMaxRows = (data: any) => {
  return data?.totalElements ?? data?.meta?.totalElements ?? 0
}
