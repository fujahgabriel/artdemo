
import { createServer } from 'miragejs'
import appConfig from 'configs/app.config'  

import { signInUserData } from './data/authData'
import { eventsData, mailData, crmDashboardData } from './data/crmData'
import { authFakeApi, crmFakeApi, } from './fakeApi'
import { usersData, userDetailData } from './data/usersData'
const { apiPrefix } = appConfig

export default function mockServer({ environment = 'test' }) {
    return createServer({
        environment,
        seeds(server) {
			server.db.loadData({
				signInUserData,
                usersData,
                userDetailData,
                crmDashboardData,
			})
		},
        routes() {
            this.urlPrefix = ''
            this.namespace = ''
            this.passthrough(request => {
                let isExternal = request.url.startsWith('http')
                return isExternal
            })
            this.passthrough()
            
            crmFakeApi(this, apiPrefix)
            authFakeApi(this, apiPrefix)
        },
    })
}