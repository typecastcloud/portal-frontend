import { Button, Typography } from 'cx-portal-shared-components'
import { useTranslation, Trans } from 'react-i18next'

export default function SearchSection() {
  const { t } = useTranslation()

  return (
    <div className="stage-home stage-section">
      <div className="stage-content">
        <Typography variant="h2">{t('content.home.stage.title')}</Typography>
        <Typography sx={{ fontFamily: 'LibreFranklin-Light' }} variant="h2">
          <Trans i18nKey="content.home.stage.subtitle">
            The gateway to  <br /> a Digital Economy
          </Trans>
        </Typography>
      </div>
      <div className="stage-background">
        <div className="image-wrapper image-ratio-parent">
          <img
            src="./home-stage-desktop.png"
            alt="home stage"
            className="object-fit x-left-40"
          />
        </div>
      </div>
    </div>
  )
}
