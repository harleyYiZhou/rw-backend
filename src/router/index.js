import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import dashboard from '@/components/dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: dashboard,
      children: [
        {
          path: '/home',
          name: '首页',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/home/home'),
          type: 'null'
        },
        {
          path: '/system',
          name: '系统管理',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/system/menu'),
          type: 'null'
        },
        {
          path: '/streetLight',
          name: '智能路灯',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/streetLight/streetLight'),
          type: 'null'
        },
        {
          path: '/sensor',
          name: '传感器',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/sensor/tree'),
          type: 'null'
        },
        {
          path: '/lightPole',
          name: '智慧灯杆',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/lightPole/ev'),
          type: 'null'
        },
        {
          path: '/terminal',
          name: '智慧终端',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/terminal/message'),
          type: 'null'
        },
        {
          path: '/parking',
          name: '智能停车',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/parking/parking'),
          type: 'null'
        },
        {
          path: '/led',
          name: 'LED显示屏',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/led/control'),
          type: 'null'
        },

        // system
        {
          path: '/system/menu',
          name: '菜单管理',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/system/menu'),
          type: '/system'
        },
        {
          path: '/system/config',
          name: '配置管理',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/system/config'),
          type: '/system'
        },
        {
          path: '/system/user',
          name: '用户管理',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/system/user'),
          type: '/system'
        },
        {
          path: '/system/area',
          name: '地区管理',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/system/area'),
          type: '/system'
        },
        {
          path: '/system/equipment',
          name: '设备类型',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/system/equipment'),
          type: '/system'
        },
        {
          path: '/system/brand',
          name: '品牌管理',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/system/brand'),
          type: '/system'
        },
        {
          path: '/system/project',
          name: '项目分类',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/system/project'),
          type: '/system'
        },
        {
          path: '/system/log',
          name: '日志管理',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/system/log'),
          type: '/system'
        },
        // streetLight
        {
          path: '/streetLight/streetLight',
          name: '路灯项目',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/streetLight/streetLight'),
          type: '/streetLight'
        },
        {
          path: '/streetLight/equipment',
          name: '设备管理',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/streetLight/equipment'),
          type: '/streetLight'
        },
        {
          path: '/streetLight/lightManager',
          name: '路灯管理',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/streetLight/lightManager'),
          type: '/streetLight'
        },
        {
          path: '/streetLight/realTimeManager',
          name: '实时管理',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/streetLight/realTimeManager'),
          type: '/streetLight'
        },
        {
          path: '/streetLight/power',
          name: '电能分析',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/streetLight/power'),
          type: '/streetLight'
        },
        {
          path: '/streetLight/smartElectricBox',
          name: '智能电箱',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/streetLight/smartElectricBox'),
          type: '/streetLight'
        },
        {
          path: '/streetLight/energyEfficiency',
          name: '月节能效',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/streetLight/energyEfficiency'),
          type: '/streetLight'
        },
        {
          path: '/streetLight/equipmentLife',
          name: '设备寿命',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/streetLight/equipmentLife'),
          type: '/streetLight'
        },
        {
          path: '/streetLight/batchControl',
          name: '批量控制',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/streetLight/batchControl'),
          type: '/streetLight'
        },
        // sensor
        {
          path: '/sensor/tree',
          name: '树木监测',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/sensor/tree'),
          type: '/sensor'
        },
        {
          path: '/sensor/waterLevel',
          name: '水位监测',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/sensor/waterLevel'),
          type: '/sensor'
        },
        {
          path: '/sensor/manholeCover',
          name: '井盖监测',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/sensor/manholeCover'),
          type: '/sensor'
        },
        {
          path: '/sensor/environmental',
          name: '环境传感器',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/sensor/environmental'),
          type: '/sensor'
        },
        {
          path: '/sensor/treeLora',
          name: '树木监测-LORA',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/sensor/treeLora'),
          type: '/sensor'
        },
        {
          path: '/sensor/manholeLora',
          name: '井盖监测-LORA',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/sensor/manholeLora'),
          type: '/sensor'
        },
        {
          path: '/sensor/trashcan',
          name: '垃圾桶监测',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/sensor/trashcan'),
          type: '/sensor'
        },
        {
          path: '/sensor/wellAndWater',
          name: '井位与水盖监测',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/sensor/wellAndWater'),
          type: '/sensor'
        },
        {
          path: '/sensor/manholeAndGas',
          name: '井盖与燃气监测',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/sensor/manholeAndGas'),
          type: '/sensor'
        },
        {
          path: '/sensor/weather',
          name: '微气象',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/sensor/weather'),
          type: '/sensor'
        },
        // lightPole
        {
          path: '/lightPole/ev',
          name: 'EV充电杆',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/lightPole/ev'),
          type: '/lightPole'
        },
        {
          path: '/lightPole/signalLight',
          name: '信号灯',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/lightPole/signalLight'),
          type: '/lightPole'
        },
        {
          path: '/lightPole/wifi',
          name: 'WIFI管理',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/lightPole/wifi'),
          type: '/lightPole'
        },
        {
          path: '/lightPole/area',
          name: '区域管理',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/lightPole/area'),
          type: '/lightPole'
        },
        {
          path: '/lightPole/lightPole',
          name: '灯杆管理',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/lightPole/lightPole'),
          type: '/lightPole'
        },
        {
          path: '/lightPole/sos',
          name: '一键求救',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/lightPole/sos'),
          type: '/lightPole'
        },
        {
          path: '/lightPole/video',
          name: '视频监控',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/lightPole/video'),
          type: '/lightPole'
        },
        {
          path: '/lightPole/denseCrowd',
          name: '人群密集',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/lightPole/denseCrowd'),
          type: '/lightPole'
        },
        // terminal
        {
          path: '/terminal/message',
          name: '信息管理',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/terminal/message'),
          type: '/terminal'
        },
        {
          path: '/terminal/messageCategory',
          name: '信息分类',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/terminal/messageCategory'),
          type: '/terminal'
        },
        {
          path: '/terminal/annexManage',
          name: '附件管理',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/terminal/annexManage'),
          type: '/terminal'
        },
        {
          path: '/terminal/playPlan',
          name: '播放计划',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/terminal/playPlan'),
          type: '/terminal'
        },
        // parking
        {
          path: '/parking/parking',
          name: '车位监控',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/parking/parking'),
          type: '/parking'
        },
        {
          path: '/parking/wirelessParking',
          name: '无线车位监控',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/parking/wirelessParking'),
          type: '/parking'
        },
        {
          path: '/led/control',
          name: '控制卡',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/led/control'),
          type: '/led'
        },
        {
          path: '/led/program',
          name: '节目',
          icon: 'el-icon-document',
          component: () =>
                    import('@/components/led/program'),
          type: '/led'
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
