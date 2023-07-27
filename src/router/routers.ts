export const constantRoute = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    name: 'Layout',
    meta: {
      title: '布局',
      hidden: true,
      icon: 'House',
    },
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue'),
        name: 'Home',
        meta: {
          title: '首页',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    path: '/screen',
    component: () => import('@/views/screen/index.vue'),
    name: 'Screen',
    meta: {
      hidden: false,
      title: '数据大屏',
      icon: 'DataAnalysis',
    },
  },
  {
    path: '/acl',
    component: () => import('@/layout/index.vue'),
    name: 'ACL',
    meta: {
      hidden: false,
      title: '权限管理',
      icon: 'SwitchButton',
    },
    children: [
      {
        path: 'user',
        component: () => import('@/views/acl/user/index.vue'),
        name: 'User',
        meta: {
          hidden: false,
          title: '用户管理',
          icon: 'UserFilled',
        },
      },
      {
        path: 'role',
        component: () => import('@/views/acl/role/index.vue'),
        name: 'Role',
        meta: {
          hidden: false,
          title: '角色管理',
          icon: 'Avatar',
        },
      },
      {
        path: 'permission',
        component: () => import('@/views/acl/permission/index.vue'),
        name: 'Permission',
        meta: {
          hidden: false,
          title: '菜单管理',
          icon: 'Grid',
        },
      },
    ],
  },
  {
    path: '/product',
    component: () => import('@/layout/index.vue'),
    name: 'Product',
    meta: {
      hidden: false,
      title: '商品管理',
      icon: 'SwitchButton',
    },
    children: [
      {
        path: 'trademark',
        component: () => import('@/views/product/trademark/index.vue'),
        name: 'Trademark',
        meta: {
          hidden: false,
          title: '商标管理',
          icon: 'UserFilled',
        },
      },
      {
        path: 'attribute',
        component: () => import('@/views/product/attribute/index.vue'),
        name: 'Attribute',
        meta: {
          hidden: false,
          title: '属性管理',
          icon: 'Avatar',
        },
      },
      {
        path: 'sku',
        component: () => import('@/views/product/sku/index.vue'),
        name: 'SKU',
        meta: {
          hidden: false,
          title: 'SKU管理',
          icon: 'Grid',
        },
      },
      {
        path: 'spu',
        component: () => import('@/views/product/spu/index.vue'),
        name: 'SPU',
        meta: {
          hidden: false,
          title: 'SPU管理',
          icon: 'Grid',
        },
      },
    ],
  },

  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'Login',
    meta: {
      title: '登陆',
      hidden: true,
    },
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: '未定义路由',
    meta: {
      title: '未定义路由',
      hidden: true,
    },
  },
];
