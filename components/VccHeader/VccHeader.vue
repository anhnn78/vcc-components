<template>
  <div class="vcc-header navbar vcc-navbar navbar-light">
    <a href="/"><img :src="srcLogo" class="navbar-brand" alt="vcc-logo" width="150"></a>
    <div id="nav_collapse" class="navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item vcc-navbar-item"><a href="/" class="nav-link fw-6">Dashboard</a></li>
        <li class="nav-item vcc-navbar-item"><a href="/iaas-cloud/servers" class="nav-link fw-6">Cloud Server</a></li>
        <li class="nav-item vcc-navbar-item"><a href="/simple-storage/listing" class="nav-link fw-6">Simple Storage</a></li>
        <li class="nav-item vcc-menu-dropdown vcc-navbar-item">
          <span class="dropdown-toggle" id="tit-vcc-services" @click="dropdownToggle('vcc-services')">Tất cả dịch vụ của Bizfly Cloud</span>
          <div class="vcc-items-services" id="vcc-services" style="display: none">
            <div class="mega-menu">
              <div class="mega-menu-group">
                <div class="group-item">
                  <div class="mega-menu-title">Compute</div>
                  <div class="mega-menu-list">
                    <a :href="item.url" v-for="item in mainMenu.compute" v-if="!item.hide" class="dropdown-item vcc-flex vcc-align-items-center">
                      <i class="vcc-icons" :class="item.icon"></i>
                      <div class="text">
                        <span>{{item.name}}</span> {{ item.url === '#' ? '(Coming soon)' : '' }}
                        <p>{{ item.describe }}</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div class="group-item">
                  <div class="mega-menu-title">Monitoring</div>
                  <div class="mega-menu-list">
                    <a :href="item.url" v-for="item in mainMenu.monitoring" v-if="!item.hide" class="dropdown-item vcc-flex vcc-align-items-center">
                      <i class="vcc-icons" :class="item.icon"></i>
                      <div class="text">
                        <span>{{item.name}}</span> {{ item.url === '#' ? '(Coming soon)' : '' }}
                        <p>{{ item.describe }}</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div class="group-item">
                  <div class="mega-menu-title">Content Delivery</div>
                  <div class="mega-menu-list">
                    <a :href="item.url" v-for="item in mainMenu.content_delivery" v-if="!item.hide" class="dropdown-item vcc-flex vcc-align-items-center">
                      <i class="vcc-icons" :class="item.icon"></i>
                      <div class="text">
                        <span>{{item.name}}</span> {{ item.url === '#' ? '(Coming soon)' : '' }}
                        <p style="font-size: 11px;">{{ item.describe }}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div class="mega-menu-group">

                <div class="group-item">
                  <div class="mega-menu-title">Networking</div>
                  <div class="mega-menu-list">
                    <a :href="item.url" v-for="item in mainMenu.networking" v-if="!item.hide" class="dropdown-item vcc-flex vcc-align-items-center">
                      <i class="vcc-icons" :class="item.icon"></i>
                      <div class="text">
                        <span>{{item.name}}</span> {{ item.url === '#' ? '(Coming soon)' : '' }}
                        <p>{{ item.describe }}</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div class="group-item">
                  <div class="mega-menu-title">Storage</div>
                  <div class="mega-menu-list">
                    <a :href="item.url" v-for="item in mainMenu.storage" v-if="!item.hide" class="dropdown-item vcc-flex vcc-align-items-center">
                      <i class="vcc-icons" :class="item.icon"></i>
                      <div class="text">
                        <span>{{item.name}}</span> {{ item.url === '#' ? '(Coming soon)' : '' }}
                        <p>{{ item.describe }}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div class="mega-menu-group">
                <div class="group-item">
                  <div class="mega-menu-title">SaaS</div>
                  <div class="mega-menu-list">
                    <a :href="item.url" v-for="item in mainMenu.saaS" v-if="!item.hide" class="dropdown-item vcc-flex vcc-align-items-center">
                      <i class="vcc-icons" :class="item.icon"></i>
                      <div class="text">
                        <span>{{item.name}}</span> {{ item.url === '#' ? '(Coming soon)' : '' }}
                        <p>{{ item.describe }}</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div class="group-item">
                  <div class="mega-menu-title">PaaS</div>
                  <div class="mega-menu-list">
                    <a :href="item.url" v-for="item in mainMenu.paaS" v-if="!item.hide" class="dropdown-item vcc-flex vcc-align-items-center">
                      <i class="vcc-icons" :class="item.icon"></i>
                      <div class="text">
                        <span>{{item.name}}</span> {{ item.url === '#' ? '(Coming soon)' : '' }}
                        <p>{{ item.describe }}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto vcc-flex vcc-align-items-center">
        <li class="nav-item vcc-menu-dropdown mr-2">
          <button class="btn btn-primary dropdown-toggle" style="height: 40px;" id="btn-vcc-create" @click="dropdownToggle('vcc-create')">Khởi tạo</button>
          <div class="vcc-items-dropdown" id="vcc-create" style="display: none">
            <div v-for="(item, index) in createList" :key="index" class="create-service-group">
              <p class="group-title">{{ item[0].split('_').join(' ') }}</p>
              <a
                :href="subItem.createUrl"
                v-for="(subItem, _index) in item[1]"
                :key="_index"
                class="dropdown-item vcc-flex vcc-align-items-center"
                v-if="subItem.createUrl !== '#'"
              >
                <i class="vcc-icons mr-2" :class="subItem.icon"></i>{{subItem.name}}
              </a>
              <div class="divider"></div>
            </div>
          </div>
        </li>
        <li class="nav-item vcc-menu-dropdown">
          <a class="dropdown-toggle" id="vcc-user-email" @click="dropdownToggle('vcc-user-info')">{{userInfo.email}}</a>
          <div class="vcc-items-dropdown" id="vcc-user-info" style="display: none">
            <a href="/account" class="dropdown-item vcc-flex vcc-align-items-center">Hồ sơ</a>
            <a href="/account/security" class="dropdown-item vcc-flex vcc-align-items-center">Bảo mật</a>
            <a href="/billing" class="dropdown-item vcc-flex vcc-align-items-center">Thanh toán</a>
            <a class="dropdown-item vcc-flex vcc-align-items-center" @click="logout()">Đăng xuất</a>
          </div>
        </li>
        <li class="nav-item vcc-navbar-item">
          <a class="nav-link" href="/ticket/" target="_blank">Hỗ trợ</a>
        </li>
        <!--<li class="nav-item vcc-navbar-item">-->
          <!--<div class="dropdown-menu-arrow-right" id="vcc-notifications" @click="dropdownToggle('vcc-sub-notifications')">-->
            <!--<span class="vcc-notify vcc-icons vcc-icon-notifications">notifications</span>-->
            <!--<span class="vcc-notify badge badge-danger badge-pill" v-if="notificationsUnreadCount >= 1">-->
              <!--{{notificationsUnreadCount > 99 ? '99&#43;' : notificationsUnreadCount}}-->
            <!--</span>-->
            <!--<div id="vcc-sub-notifications" style="display: none" v-if="notifications && notifications.length >= 1">-->
              <!--<div class="item-notify vcc-flex"-->
                   <!--:class="{'unread': !notify.is_read}"-->
                   <!--v-for="notify in notifications.slice(0, 5)"-->
                   <!--@click="handleMarkedRead(notify)">-->
                <!--<span class="vcc-icon-notify" :class="`vcc-icon-notify-${notify.type}`"></span>-->
                <!--<div class="content">-->
                  <!--<p class="mb-0">-->
                    <!--<span class="desc" v-if="notify.content.length > 50">{{notify.content.slice(0, 50)}}...</span>-->
                    <!--<span class="desc" v-else>{{notify.content}}</span>-->
                    <!--<span class="text-primary">Chi tiết</span>-->
                  <!--</p>-->
                  <!--<span class="created">{{created(notify.created_at)}}</span>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="read-more text-primary">-->
                <!--<a :href="`${assetsPublicPath}/?tab=notifications`">Xem thêm</a>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div id="vcc-sub-notifications" class="text-center py-3" style="display: none" else>-->
              <!--Không có thông báo.-->
            <!--</div>-->
          <!--</div>-->
        <!--</li>-->
      </ul>
    </div>
  </div>
</template>

<script>
//   import axios from 'axios'
  import './scss/header.scss'
//   const service = axios.create({
//     withCredentials: true
//   })

  export default {
    // props: ['userInfo', 'activeMenu', 'tenantId', 'notificationsItem', 'notificationsUnread', 'markRead'],
    props: {
      srcLogo: {
        type: String,
        default: 'https://www.vccloud.vn/images/logo_bizfly_vccloud.svg'
      },
      userInfo: {
        type: Object,
        default: {
          email: '',
          fullname: ''
        }
      },
      tenantId: {
        type: String,
        default: ''
      },
      activeMenu: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        mainMenu: {
          compute: [
            {name: 'Cloud Server', layout: 'cloud-server', url: `/iaas-cloud/servers`, createUrl: '/iaas-cloud/servers/create', icon: 'vcc-icon-server-sm', describe: 'Khởi tạo Cloud Server'},
            {name: 'Ổ cứng', url: `/iaas-cloud/volumes/create`, createUrl: '/iaas-cloud/volumes/create', icon: 'vcc-icon-volume-sm', hide: true},
            {name: 'Prebuilt App', layout: 'prebuilt-app', url: '/prebuilt-app', createUrl: '#', icon: 'vcc-icon-server-sm', describe: 'Tạo server với phần mềm cài sẵn'},
            {name: 'Auto Scaling', layout: 'prebuilt-app', url: '#', createUrl: '#', icon: 'vcc-icon-server-sm', describe: 'Quản lý Server Cluster'}
          ],
          content_delivery: [
            {name: 'CDN', layout: 'cdn', url: '/cdn/', createUrl: '/cdn/domains/create', icon: 'vcc-icon-server-sm', describe: 'Giảm tải cho Website, ứng dụng'}
          ],
          saaS: [
            {name: 'Business Email', layout: 'mail-inbox', url: '/mail-inbox/ten-mien', createUrl: '/mail-inbox/khoi-tao-ten-mien', icon: 'vcc-icon-domain-sm', describe: 'Email tên miền riêng'},
            {name: 'Container Registry', layout: 'container-registry', url: '/container-registry', createUrl: '#', icon: 'vcc-icon-server-sm', describe: 'Kho lưu trữ Docker image'},
            {name: '2-FA', layout: 'two-fa', url: '#', createUrl: '#', icon: 'vcc-icon-server-sm', describe: 'Giải pháp xác thực 2 bước'}
          ],
          networking: [
            {name: 'Load Balancer', layout: 'load-balancers', url: '/loadbalancers', createUrl: '/loadbalancers/lb-creating/index', icon: 'vcc-icon-loadbalancer-sm', describe: 'Cân tải cho Server'},
            {name: 'VPN', layout: 'vpn', url: '/vpnaas', createUrl: '/vpnaas/vpn/creating', icon: 'vcc-icon-vpn-sm', describe: 'Kết nối tới Cloud khác'},
            {name: 'Firewall', url: '#', createUrl: '#', icon: 'vcc-icon-loadbalancer-sm', describe: 'Bảo mật cho Server'}
          ],
          monitoring: [
            {name: 'Alert', layout: 'alert', url: '/alert', createUrl: '/alert/create', icon: 'vcc-icon-alert-sm', describe: 'Cảnh báo cho server, dịch vụ'}
          ],
          storage: [
            {name: 'Bucket', layout: 'simple-storage', url: '/simple-storage', createUrl: '/simple-storage/creating', icon: 'vcc-icon-new-bucket-sm', describe: 'Lưu trữ S3-like'},
            {name: 'Cloud Drive', layout: 'cloud-drive', url: '#', createUrl: '#', icon: 'vcc-icon-server-sm', describe: 'Đồng bộ dữ liệu lên Cloud'}
          ],
          paaS: [
            {name: 'K8s', layout: 'k8s', url: '#', createUrl: '#', icon: 'vcc-icon-server-sm', describe: 'Quản lý cụm K8s'}
          ]
        },
        notifications: null,
        notificationsUnreadCount: 0
      }
    },
    watch: {
      // 'tenantId': function (value) {
      //   if (value) {
      //     this.fetchingData()
      //   }
      // },
      // 'notificationsItem': function (value) {
      //   if (value) {
      //     this.notifications = value
      //   }
      // },
      // 'notificationsUnread': function (value) {
      //   this.notificationsUnreadCount = value
      //   this.fetchingData()
      // }
    },
    computed: {
      createList () {
        const list = Object.entries(this.mainMenu)
        const filteredList = []
        for (let i = 0; i < list.length; i++) {
          let emptyList = true
          for (let j = 0; j < list[i][1].length; j++) {
            if (list[i][1][j].createUrl !== '#') emptyList = false
          }
          if (!emptyList) filteredList.push(list[i])
        }
        return filteredList
      }
    },
    methods: {
    //   async fetchingData () {
    //     let notificationsUnreadCount = await service.get(`https://staging.vccloud.vn/iaas-cloud/api/notifications/user/${this.tenantId}/count`)
    //     this.notificationsUnreadCount = notificationsUnreadCount.data.count
    //     let notifications = await service.get(`https://staging.vccloud.vn/iaas-cloud/api/notifications/user/${this.tenantId}`)
    //     this.notifications = notifications.data.notifications
    //   },
      chatbox () {
        var scriptChatbox = document.createElement('script')
        var chatbox = document.createTextNode(`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
           Tawk_API.visitor = {
            name  : '${this.userInfo.fullname}',
            email : '${this.userInfo.email}'
          };
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/55c16f855355f0e91c647bad/default';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();
        `)
        scriptChatbox.appendChild(chatbox)
        document.body.appendChild(scriptChatbox)
      },
      created (data) {
        let timezoneVN = (1000 * 60 * 60 * 7)
        let historyTime = Date.parse(data) - timezoneVN
        let date = new Date(historyTime)
        let dateTimeStr = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
        return dateTimeStr
      },
      dropdownToggle (div) {
        if (document.getElementById(div).style.display === 'none') document.getElementById(div).style.display = 'block'
        else if (document.getElementById(div).style.display === 'block') document.getElementById(div).style.display = 'none'
      },
      handleMarkedRead (notify) {
        this.$emit('markRead', notify)
        window.open(`${notify.link}`, '_blank')
      },
      logout () {
        this.$emit('logout')
      }
    },
    mounted () {
      this.chatbox()
      document.onclick = function (e) {
        if (e.target.id !== 'tit-vcc-services') document.getElementById('vcc-services').style.display = 'none'
        if (e.target.id !== 'btn-vcc-create') document.getElementById('vcc-create').style.display = 'none'
        if (e.target.id !== 'vcc-user-email') document.getElementById('vcc-user-info').style.display = 'none'
        // if (e.target.className.indexOf('vcc-notify') < 0) document.getElementById('vcc-sub-notifications').style.display = 'none'
      }
    }
  }
</script>
