import './global'
import Dashboard from './views/dashboard/Dashboard'
import Templates from './views/templates/Templates'
import Campaign from './views/Campaign'
import Welcome from './components/welcome/Welcome'
import CreateCampaigns from './views/campaigns/CreateCampaigns'
import CreateTemplates from './views/templates/mail/CreateTemplate'
import CreateTemplatesSms from './views/templates/sms/CreateTemplate'
import CreateTemplatesWhat from './views/templates/whatsapp/CreateTemplate'
import EditTemplates from './views/templates/mail/EditTemplate'
import EditTemplatesSms from './views/templates/sms/EditTemplate'
import EditTemplatesWhat from './views/templates/whatsapp/EditTemplate'
import AddFiles from './views/templates/mail/AddFiles'
import Contact from './views/Contact'
import UserInfo from './components/userInfo/UserInfo'
import Drag from './views/drag'
import Pagination from './views/Pagination'
import Report from './views/Report'

import CreateTemplateReturnP from './views/templates/mail/CreateTemplateReturnP'
import CreateTemplateReturnPSMS from './views/templates/sms/CreateTemplateReturnP'
import CreateTemplateReturnPWSP from './views/templates/whatsapp/CreateTemplateReturnP'

const routes = [
  { path: global.ROUTE_WELCOME, exact: true, name: 'Welcome', element: Welcome },
  { path: global.ROUTE_DASHBOARD, exact: true, name: 'Dashboard', element: Dashboard },
  { path: global.ROUTE_TEMPLASTES, exact: true, name: 'Templates', element: Templates },
  { path: global.ROUTE_CAMPAIGN, exact: true, name: 'Campaign', element: Campaign },
  { path: global.ROUTE_CREATECAMPAIGN, exact: true, name: 'CreateCampaigns', element: CreateCampaigns },
  { path: global.ROUTE_CREATEMAILTEMPLATES, exact: true, name: 'CreateTemplates', element: CreateTemplates },
  { path: global.ROUTE_CREATESMSTEMPLATES, exact: true, name: 'CreateTemplatesSms', element: CreateTemplatesSms },
  { path: global.ROUTE_CREATEWHATTEMPLATES, exact: true, name: 'CreateTemplatesWhat', element: CreateTemplatesWhat },
  { path: global.ROUTE_EDITMAILTEMPLATES, exact: true, name: 'EditTemplates', element: EditTemplates },
  { path: global.ROUTE_EDITSMSTEMPLATES, exact: true, name: 'EditTemplatesSms', element: EditTemplatesSms },
  { path: global.ROUTE_EDITWHATTEMPLATES, exact: true, name: 'EditTemplatesWhat', element: EditTemplatesWhat },
  { path: global.ROUTE_CONTACT, exact: true, name: 'Contact', element: Contact },
  { path: global.ROUTE_USER_INFO, exact: true, name: 'UserInfo', element: UserInfo },
  { path: global.ASDD_FILES, exact: true, name: 'UserInfo', element: AddFiles },
  { path: '/drag', exact: true, name: 'UserInfo', element: Drag },
  { path: '/pagi', exact: true, name: 'UserInfo', element: Pagination },
  { path: global.ROUTE_CREATEMAILTEMPLATESPROGRAMATION, exact: true, name: 'CreateCampaignsProgramacion', element: CreateTemplateReturnP },
  { path: global.ROUTE_CREATESMSTEMPLATESPROGRAMATION, exact: true, name: 'CreateCampaignsProgramacionSMS', element: CreateTemplateReturnPSMS },
  { path: global.ROUTE_CREATEWHATSAPPTEMPLATESPROGRAMATION, exact: true, name: 'CreateCampaignsProgramacionWSP', element: CreateTemplateReturnPWSP },
  { path: global.ROUTE_REPORT, exact: true, name: 'Report', element: Report }
]

export default routes
