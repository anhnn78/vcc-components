import { storiesOf } from '@storybook/vue'
import VccHeader from './VccHeader'

storiesOf('VccHeader', module)
    .add('normal', () => ({
        components: { VccHeader },
        template:
            `
              <VccHeader
                :userInfo="user"
                :srcLogo="linkLogo"
                activeMenu="mail-inbox"
                :tenantId="user.tenant_id"
              />
            `,
        data: () => ({
            user: {
                fullname: 'Ngô Anh',
                email: 'admin@admin.com',
                phone: '0345062976',
                tenant_id: '1jhasgdkd123g12i3'
            }
        })
    }))