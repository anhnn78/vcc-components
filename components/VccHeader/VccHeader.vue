<template>
    <div class="vcc-header navbar vcc-navbar navbar-light">
        <a href="/"><img :src="srcLogo" class="navbar-brand" alt="vcc-logo" width="150"></a>
        <div id="nav_collapse" class="navbar-collapse">
            <ul class="navbar-nav">
                <li class="nav-item vcc-navbar-item"
                    :class="{'active': activeMenu.toLowerCase() === item.layout.toLowerCase()}"
                    v-for="item in mainMenu">
                    <a :href="item.url" class="nav-link fw-6" :class="{'beta': item.layout === 'vpn' || item.layout === 'container-registry' || item.layout === 'alert'}" >{{item.name}}</a>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto vcc-flex vcc-align-items-center">
                <li class="nav-item vcc-menu-dropdown mr-2">
                    <button class="btn btn-primary dropdown-toggle" style="height: 40px;" id="btn-vcc-create" @click="dropdownToggle('vcc-create')">Khởi tạo</button>
                    <div class="vcc-items-dropdown" id="vcc-create" style="display: none">
                        <a :href="item.url" v-for="item in creatingMenu" class="dropdown-item vcc-flex vcc-align-items-center">
                            <i class="vcc-icons mr-2" :class="item.icon"></i>{{item.name}}
                        </a>
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
            </ul>
        </div>
    </div>
</template>

<script>
    import './scss/header.css'

    export default {
        props: ['userInfo', 'srcLogo', 'activeMenu', 'tenantId'],
        data () {
            return {
                mainMenu: [
                    {name: 'Dashboard', layout: 'dashboard', url: '/'},
                    {name: 'Cloud Server', layout: 'cloud-server', url: `/iaas-cloud/servers/`},
                    {name: 'CDN', layout: 'cdn', url: '/cdn/'},
                    {name: 'Business Email', layout: 'mail-inbox', url: '/mail-inbox/ten-mien'},
                    {name: 'Simple Storage', layout: 'simple-storage', url: '/simple-storage/'},
                    {name: 'Load Balancer', layout: 'load-balancers', url: '/loadbalancers/'},
                    {name: 'VPN', layout: 'vpn', url: '/vpnaas/'},
                    {name: 'Container Registry', layout: 'container-registry', url: '/container-registry/dashboard/'},
                    {name: 'Alert', layout: 'alert', url: '/alert/'}
                ],
                creatingMenu: [
                    {name: 'Máy chủ', url: `/iaas-cloud/servers/create`, icon: 'vcc-icon-server-sm'},
                    {name: 'Ổ cứng', url: `/iaas-cloud/volumes/create`, icon: 'vcc-icon-volume-sm'},
                    {name: 'Load Balancer', url: '/loadbalancers/lb-creating/index', icon: 'vcc-icon-loadbalancer-sm'},
                    {name: 'Domain', url: '/mail-inbox/khoi-tao-ten-mien', icon: 'vcc-icon-domain-sm'},
                    {name: 'Bucket', url: '/simple-storage/creating', icon: 'vcc-icon-new-bucket-sm'},
                    {name: 'VPN', url: '/vpnaas/vpn/creating', icon: 'vcc-icon-vpn-sm'},
                    {name: 'Alert', url: '/alert/create', icon: 'vcc-icon-alert-sm'}
                ],
                notifications: null,
                notificationsUnreadCount: 0
            }
        },
        watch: {
        },
        methods: {
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
            dropdownToggle (div) {
                if (document.getElementById(div).style.display === 'none') document.getElementById(div).style.display = 'block'
                else if (document.getElementById(div).style.display === 'block') document.getElementById(div).style.display = 'none'
            },
            logout () {
                this.$emit('logout')
            }
        },
        mounted () {
            this.chatbox()
            document.onclick = function (e) {
                if (e.target.id !== 'btn-vcc-create') document.getElementById('vcc-create').style.display = 'none'
                if (e.target.id !== 'vcc-user-email') document.getElementById('vcc-user-info').style.display = 'none'
                // if (e.target.className.indexOf('vcc-notify') < 0) document.getElementById('vcc-sub-notifications').style.display = 'none'
            }
        }
    }
</script>
