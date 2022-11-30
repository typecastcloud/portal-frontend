/********************************************************************************
 * Copyright (c) 2021,2022 Mercedes-Benz Group AG and BMW Group AG
 * Copyright (c) 2021,2022 Contributors to the Eclipse Foundation
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

import { Typography } from 'cx-portal-shared-components'
import { CardDetailsProps } from '../../types'
import '../../CompanyRoles.scss'
import { useTranslation } from 'react-i18next'

export default function Card({ card }: { card: CardDetailsProps }) {
  const { t } = useTranslation()

  return (
    <div className="textContainer">
      <Typography
        sx={{
          minHeight: '32px',
        }}
        variant="h4"
      >
        {card.title}
      </Typography>
      <Typography
        sx={{
          paddingTop: '34px',
          minHeight: '32px',
        }}
        variant="body2"
      >
        {card.description}
      </Typography>
      {card.readMore ? (
        <a className="readMoreButton" href={card.readMore}>
          {t('global.actions.details')}
        </a>
      ) : (
        <div className="readMoreButton" />
      )}
    </div>
  )
}
