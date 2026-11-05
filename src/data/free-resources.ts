/**
 * 免费科学上网资源、正规应急工具及免费/付费实测反差数据
 * 专为 VPN免费 (vpnfree.blog) /free 页面打造
 */

export interface FreeTool {
  name: string;
  category: 'vpn' | 'warp' | 'dns' | 'mirror';
  tag: string;
  speedRating: string;
  quota: string;
  platform: string[];
  pros: string[];
  cons: string[];
  officialUrl: string;
  guide: string;
}

export const FREE_TOOLS: FreeTool[] = [
  {
    name: 'Cloudflare WARP (1.1.1.1)',
    category: 'warp',
    tag: '大厂官方 · 无限流量',
    speedRating: '20~80 Mbps (取决于优选IP)',
    quota: '完全无限流量',
    platform: ['Windows', 'macOS', 'iOS', 'Android', 'Linux'],
    pros: ['全球最大 CDN 巨头出品，绝对合规安全', '完全免费且不限流量，支持 WireGuard 协议', '可搭配 Endpoint 优选脚本跑满百兆宽带'],
    cons: ['在中国大陆部分地区被运营商 QoS 限速或阻断', '无法自由解锁 Netflix 原生非自制剧', '原生 IP 容易被 Google/ChatGPT 频繁弹验证码'],
    officialUrl: 'https://one.one.one.one/',
    guide: '下载官方客户端后，建议搭配开源的 WARP-Endpoint 优选 IP 工具选择电信/联通低延迟出口（如香港/新加坡机房），可大幅提高连接成功率。'
  },
  {
    name: 'Proton VPN Free',
    category: 'vpn',
    tag: '瑞士隐私法 · 严格零日志',
    speedRating: '5~15 Mbps (晚高峰限速)',
    quota: '完全无流量限制',
    platform: ['Windows', 'macOS', 'iOS', 'Android', 'Linux'],
    pros: ['瑞士顶级隐私法律保护，欧洲物理级硬件加密机房', '免费版没有任何流量上限，绝不贩卖用户数据', '原生界面无任何恶心广告'],
    cons: ['免费版仅开放荷兰、美国、日本三个节点', '服务器由系统自动随机分配，不可手动切换', '晚高峰因全球白嫖用户拥挤导致延迟高达 300ms+'],
    officialUrl: 'https://protonvpn.com/free-vpn',
    guide: '适合外贸紧急查收邮件或文字轻量搜索。如果在中国大陆网络直连困难，可在客户端设置中开启“Stealth 隐秘协议”模式绕过封锁。'
  },
  {
    name: 'Windscribe 免费版',
    category: 'vpn',
    tag: '自研混淆 · 10G/月',
    speedRating: '10~30 Mbps',
    quota: '每月 10GB (验证邮箱)',
    platform: ['Windows', 'macOS', 'iOS', 'Android', 'Chrome扩展'],
    pros: ['内置 R.O.B.E.R.T 广告与恶意域名拦截引擎', '自研 Stealth / Wstunnel 专有混淆协议，过墙成功率高', '支持全平台客户端一键登录'],
    cons: ['每月仅 10GB 流量，看两个 4K 视频就会耗尽', '免费节点较少且晚高峰偶发丢包', '不支持长期大流量下载或游戏联机'],
    officialUrl: 'https://windscribe.com/',
    guide: '注册时务必验证个人真实邮箱以激活每月 10GB 赠送额度。在大陆网络环境下请在连接设置中手动选择【Stealth】协议端口 443。'
  },
  {
    name: '公共加密安全 DNS (DoH/DoT)',
    category: 'dns',
    tag: '防劫持 · 解除部分阻断',
    speedRating: '本地千兆直连',
    quota: '完全免费无限制',
    platform: ['全平台通用'],
    pros: ['解决 80% 因本地运营商 DNS 污染导致的打不开网页', '加密传输解析请求，防止 ISP 窥探浏览历史', '零客户端负担，在系统或浏览器内直接填入即可生效'],
    cons: ['只能防 DNS 污染，无法突破针对 IP/SNI 的防火墙拦截', '无法用于观看 Netflix 或使用 ChatGPT'],
    officialUrl: 'https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-https/',
    guide: '在 Chrome/Edge 设置中开启“使用安全 DNS”，填入 Cloudflare (`https://1.1.1.1/dns-query`) 或 Google (`https://dns.google/dns-query`)。'
  }
];

export const FREE_VS_PAID = [
  {
    dimension: '晚高峰速率 (Mbps)',
    freeNode: '1 ~ 5 Mbps (严重限速，网页转圈)',
    paidIEPL: '500 ~ 1000+ Mbps (秒开 4K/8K 视频)',
    importance: '★★★★★ 核心体验'
  },
  {
    dimension: '晚高峰平均延迟 (Ping)',
    freeNode: '250ms ~ 450ms (剧烈抖动与丢包)',
    paidIEPL: '20ms ~ 45ms (IEPL 物理内网直达)',
    importance: '★★★★★ 游戏与交互'
  },
  {
    dimension: '晚高峰丢包率 (Packet Loss)',
    freeNode: '25% ~ 60% (频繁断线重连)',
    paidIEPL: '0.0% ~ 0.5% (端到端专线零丢包)',
    importance: '★★★★★ 稳定根基'
  },
  {
    dimension: 'ChatGPT / Claude 访问',
    freeNode: '100% 触发 Cloudflare 阻断或封号',
    paidIEPL: '提供海外原生住宅 IP，纯净免验',
    importance: '★★★★★ AI 开发必备'
  },
  {
    dimension: 'Netflix 4K 流媒体',
    freeNode: '仅能看自制剧，严重模糊缓冲',
    paidIEPL: '全区非自制剧完整解锁，4K 超清',
    importance: '★★★★☆ 影音娱乐'
  },
  {
    dimension: '安全与个人隐私',
    freeNode: '极高风险，部分节点存在流量窃听/注入',
    paidIEPL: '正规商业协议，无日志端到端加密',
    importance: '★★★★★ 资金安全'
  },
  {
    dimension: '月度使用成本',
    freeNode: '0 元 (但消耗海量排查与折腾时间)',
    paidIEPL: '低至 ¥5.6 ~ ¥8 元/月 (一杯奶茶钱)',
    importance: '★★★★☆ 投资回报'
  }
];

export const FREE_TRIAL_AIRPORTS = [
  {
    name: '光速云 (主推首选)',
    rank: 1,
    trialPolicy: '注册即送体验流量，专属折上折优惠码【AMM】',
    minPrice: '¥8.00 / 月起',
    feature: 'IEPL 双专线热备架构，晚高峰 0.0% 丢包，支持月付',
    affUrl: 'https://gscloud.net/#/register?code=AMM',
    coupon: 'AMM'
  },
  {
    name: '大佬云 (平价之王)',
    rank: 5,
    trialPolicy: '新人极低门槛上车，月付仅需 ¥5.6',
    minPrice: '¥5.60 / 月起',
    feature: '全中继节点优化，价格击穿行业底线，学生党首选',
    affUrl: 'https://dalaoyun.net/#/register?code=AMM',
    coupon: ''
  },
  {
    name: '飞猫云 (小白省心)',
    rank: 3,
    trialPolicy: '下载专属 App 即可免配置试用，优惠码【flycat888】',
    minPrice: '¥7.00 / 月起',
    feature: '自研客户端无需导入配置，下载即用，轻快稳定',
    affUrl: 'https://feimaoyun.com/#/register?code=flycat888',
    coupon: 'flycat888'
  }
];
