/**
 * 全站基础配置与导航菜单（VPN免费 / vpnfree.blog）
 */

export const SITE = {
  name: 'VPN免费',
  enName: 'VPNFree',
  url: 'https://vpnfree.blog',
  defaultTitle: 'VPN免费 (vpnfree.blog) — 2026 翻墙机场与VPN推荐 · 42家品牌晚高峰测速实验室',
  defaultDescription:
    '专业独立网络观察台，基于 42 家翻墙机场深度实测数据。提供 IEPL/IPLC 专线实测测速图、ChatGPT/Claude AI 住宅原生解锁矩阵、全平台客户端下载及独家折扣码。',
  logoDark: '/logo/brand-dark.svg',
  logoLight: '/logo/brand-light.svg',
  contactEmail: 'contact@vpnfree.blog',
} as const;

/**
 * 搜索引擎站长平台验证代码配置（直接编译进 HTML 源码，零延迟安全生效）
 * 当站长获取到具体 Token 时，可直接填入下列对应字段或通过环境变量传入
 */
export const SEARCH_VERIFICATION = {
  google: process.env.PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  bing: process.env.PUBLIC_BING_SITE_VERIFICATION || '',
  shenma: process.env.PUBLIC_SHENMA_SITE_VERIFICATION || '',
  baidu: process.env.PUBLIC_BAIDU_SITE_VERIFICATION || '',
};

export const ANNOUNCEMENT = {
  text: '🔥 2026 晚高峰实测数据已上线 · 光速云独家优惠码【AMM】折合¥8/月起',
  linkLabel: '查看光速云深度实测报告 →',
  linkHref: '/airports/guangshiyun',
} as const;

export const HEADER = {
  navLinks: [
    { label: '机场排行榜', href: '/' },
    { label: '42家品牌库', href: '/airports' },
    { label: '测速实验室', href: '/speedtest' },
    { label: 'GEO专题', href: '/topics' },
    { label: '免费专区', href: '/free' },
    { label: '避坑雷达', href: '/radar' },
    { label: '百科FAQ', href: '/faq' },
  ],
  aria: {
    search: '搜索机场或节点',
    account: '用户中心',
    favorites: '收藏夹',
    theme: '切换明暗模式',
    cart: '对比清单',
    menu: '展开导航菜单',
  },
} as const;

export const SEARCH = {
  placeholder: '搜索 42 家机场品牌、协议、专线或节点（如 光速云、VLESS、IEPL）…',
  escHint: 'Esc',
  emptyText: '未找到相关机场。尝试搜索“光速云”、“VLESS”、“香港专线”或“5元”。',
} as const;

export const FOOTER = {
  tagline:
    'VPN免费（vpnfree.blog）是由技术极客与网络工程师运营的独立网络可观测性评测平台。我们拒绝任何虚假广告，坚持真实晚高峰打卡测速，为跨境科研、外贸出海、AI 开发者及影音爱好者提供客观的专线选型指南。',
  columns: [
    {
      title: 'TOP 热门机场',
      links: [
        { label: '光速云（主推IEPL双专线）', href: '/airports/guangshiyun' },
        { label: '暮光加速（多设备办公）', href: '/airports/muguang' },
        { label: '飞猫云（7元入门专属APP）', href: '/airports/feimao' },
        { label: '微风网络（高性价比专线）', href: '/airports/weifeng' },
        { label: '大佬云（5.6元极限平价）', href: '/airports/dalaoyun' },
        { label: '星岛梦（2020老牌不限时）', href: '/airports/xingdaomeng' },
      ],
    },
    {
      title: 'GEO 专线专题',
      links: [
        { label: '香港低延迟专线（超低20ms）', href: '/topics/hongkong' },
        { label: 'ChatGPT & Claude 原生解锁', href: '/topics/ai-chatgpt' },
        { label: 'Netflix 4K 与 Disney+ 全区', href: '/topics/streaming-netflix' },
        { label: '平价学生党精选（5.6元起）', href: '/topics/budget-friendly' },
        { label: '完整 42 家品牌库筛选', href: '/airports' },
      ],
    },
    {
      title: '科学上网与防坑指南',
      links: [
        { label: '免费专区（正规免费资源）', href: '/free' },
        { label: '避坑雷达（跑路预警黑名单）', href: '/radar' },
        { label: '百科FAQ（万字级选型全书）', href: '/faq' },
        { label: '全平台客户端下载与教程', href: '/clients' },
        { label: '测速实验室（实测大图）', href: '/speedtest' },
        { label: '评测方法论与透明声明', href: '/about' },
      ],
    },
  ],
  legalLinks: [
    { label: '免责声明与佣金披露', href: '/terms' },
    { label: '隐私权保护政策', href: '/privacy' },
  ],
  affDisclaimer: '合规声明：本站部分链接包含联盟注册推广标识（统一标明 rel="nofollow sponsored noopener"）。通过链接购买可能为本站运维带来微薄佣金，绝不影响您的购买价格及专属优惠折扣。本站所有测评均基于客观真实网络环境，不保证节点在任何时段 100% 可用。',
  copyright: `© 2026 VPN免费 (vpnfree.blog). 保留所有权利.`,
} as const;

export const THANKS_MODAL = {
  emoji: '📋',
  title: '已复制官方优惠码！',
  text: '优惠码已成功复制到剪贴板。正在为您前往机场官方安全注册页面，结算时粘贴即可享受专属折上折！',
  starLabel: '前往官方注册页面',
  starHref: '#',
  keepLabel: '继续查看其他机场评测',
} as const;

export const CART = {
  ariaDrawer: '机场对比清单',
  clearLabel: '清空对比',
  ariaClear: '清空对比清单',
  ariaClose: '关闭对比清单',
  emptyLine1: '您还没有添加对比机场。',
  emptyLine2: '在任意机场卡片点击“加入对比”，即可横向查看延迟、价格与解锁能力。',
  subtotalLabel: '已选对比',
  shippingNote: '对比数据基于 2026 最新网络可观测性实测。',
  checkoutLabel: '查看完整横向对比表',
  checkoutPreparing: '生成对比分析中…',
  checkoutFailedPrefix: '错误: ',
} as const;

export const NAV_DRAWER = {
  ariaDrawer: '移动端菜单',
  ariaClose: '关闭导航菜单',
  home: { label: '首页 · 机场排行榜', href: '/' },
  collections: [
    { label: '42家机场品牌库', href: '/airports' },
    { label: '香港低延迟专线', href: '/topics/hongkong' },
    { label: 'ChatGPT & AI 解锁专线', href: '/topics/ai-chatgpt' },
    { label: 'Netflix 4K 流媒体专线', href: '/topics/streaming-netflix' },
    { label: '平价高性价比机场（5.6元起）', href: '/topics/budget-friendly' },
  ],
  pages: [
    { label: '免费专区 (正规资源与对比)', href: '/free' },
    { label: '避坑雷达 (跑路预警黑榜)', href: '/radar' },
    { label: '百科FAQ (选型知识全书)', href: '/faq' },
    { label: '测速实验室 (含实测大图)', href: '/speedtest' },
    { label: '第三方代理客户端下载大全', href: '/clients' },
    { label: '评测标准与免责声明', href: '/about' },
  ],
  footer: {
    supportText: '商务合作与纠错反馈: contact@vpnfree.blog',
    hoursText: '每周一晚高峰持续更新测速数据',
  },
} as const;

export const PRODUCT_CARD = {
  saleBadge: 'HOT 推荐',
  addToCart: '直达官网',
  ariaFav: (title: string) => `收藏 ${title}`,
  ariaAdd: (title: string) => `访问 ${title} 官方注册页面`,
} as const;
