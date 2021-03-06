import { Layout } from 'components/Layout'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { useThunkDispatch } from 'hooks/useThunkDispatch'
import { hydrateConfiguration } from 'state/actions/configuration'
import { Router } from 'components/Router'
import { useTrackPageView } from 'hooks/useTrackPageView'
import './i18n'

const App: React.FC = () => {
  const { t } = useTranslation()
  const { location, setTrackPageView } = useTrackPageView()
  const dispatch = useThunkDispatch()

  useEffect(() => {
    dispatch(hydrateConfiguration())
  }, [dispatch])

  useEffect(() => {
    setTrackPageView()
  }, [location, setTrackPageView])

  return (
    <>
      <Helmet>
        <title>{t('html-title')}</title>
      </Helmet>
      <Layout>
        <Router />
      </Layout>
    </>
  )
}

export default App
