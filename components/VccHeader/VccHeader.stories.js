import { storiesOf } from '@storybook/vue'
import VccHeader from './src/index'

storiesOf('VccHeader', module)
    .add('normal', () => ({
        components: { VccHeader },
        template:
            `
              <VccHeader
                :userInfo="user"
              />
            `,
        data: () => ({
            user: {
                fullname: 'Ngô Anh',
                email: 'admin@admin.com',
                phone: '0345062976'
            }
        })
    }))