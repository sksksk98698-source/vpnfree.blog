export interface ClientApp {
  name: string;
  os: 'windows' | 'macos' | 'ios' | 'android' | 'linux' | 'router';
  osDisplay: string;
  badge: string;
  core: string;
  recommended: boolean;
  features: string[];
  description: string;
  downloadUrl: string;
  pricing: string; // 免费开源 / App Store 付费
}

export const CLIENT_APPS: ClientApp[] = [
  // Windows
  {
    name: 'Clash Verge Rev',
    os: 'windows',
    osDisplay: 'Windows',
    badge: '首选强推',
    core: 'Mihomo (Clash.Meta)',
    recommended: true,
    features: ['支持 TUN 模式全局代理', '强大订阅分流规则', '界面现代支持中英文', '支持脚本覆写'],
    description: '当前 Windows 平台首选的开源代理客户端，基于 Mihomo 核心持续维护，完美适配各类 VLESS、Shadowsocks、Trojan 机场订阅。',
    downloadUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases',
    pricing: '免费开源'
  },
  {
    name: 'v2rayN',
    os: 'windows',
    osDisplay: 'Windows',
    badge: '老牌经典',
    core: 'Xray / sing-box',
    recommended: true,
    features: ['全协议支持', '节点批量测速与延迟测试', '路由自定义分流', '资源占用极低'],
    description: '功能极其强大的经典代理客户端，深度支持 Xray 和 sing-box 多核心，适合需要精细调试与管理海量节点的用户。',
    downloadUrl: 'https://github.com/2dust/v2rayN/releases',
    pricing: '免费开源'
  },
  {
    name: 'FlClash',
    os: 'windows',
    osDisplay: 'Windows',
    badge: '极简跨平台',
    core: 'Mihomo',
    recommended: false,
    features: ['Flutter 跨平台界面', '轻巧流畅', '多订阅聚合管理', '一键连接'],
    description: '采用 Flutter 开发的全新界面客户端，跨平台统一交互体验，对小白用户非常友好。',
    downloadUrl: 'https://github.com/chen08209/FlClash/releases',
    pricing: '免费开源'
  },

  // macOS
  {
    name: 'Clash Verge Rev for Mac',
    os: 'macos',
    osDisplay: 'macOS',
    badge: 'Mac 必装首选',
    core: 'Mihomo (Universal)',
    recommended: true,
    features: ['原生支持 Apple Silicon & Intel', '系统代理与 TUN 模式无缝切换', '优雅的 Dark Mode 体验', '订阅自动更新'],
    description: '为 macOS 设计的极致代理利器，无论是日常科研办公还是终端代理，都能稳定高效运行。',
    downloadUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases',
    pricing: '免费开源'
  },
  {
    name: 'Surge for Mac',
    os: 'macos',
    osDisplay: 'macOS',
    badge: '专业级神器',
    core: 'Surge Engine',
    recommended: false,
    features: ['工业级网络抓包调试', '高阶设备协同网关', '极速智能路由规则', '深度网络监控'],
    description: 'Mac 上最负盛名的高级网络调试与代理工具，功能无与伦比，适合专业开发者与网络极客。',
    downloadUrl: 'https://nssurge.com/mac',
    pricing: '商业付费软件'
  },

  // iOS
  {
    name: 'Shadowrocket (小火箭)',
    os: 'ios',
    osDisplay: 'iOS / iPadOS',
    badge: 'iOS 统治级必备',
    core: '多协议原生内核',
    recommended: true,
    features: ['一键扫码/URL添加订阅', '按域名/IP精细化分流', '支持节点延迟并发测速', '规则策略库丰富'],
    description: 'iPhone/iPad 必备的规则代理工具，功能全面、更新勤快，美区 App Store 必备装机软件。',
    downloadUrl: 'https://apps.apple.com/us/app/shadowrocket/id932747118',
    pricing: 'App Store 付费 ($2.99)'
  },
  {
    name: 'Stash',
    os: 'ios',
    osDisplay: 'iOS / iPadOS',
    badge: 'Clash 规则 iOS 典范',
    core: 'Mihomo 兼容',
    recommended: true,
    features: ['完美兼容 Clash 配置文件', '支持策略组与覆写语法', '界面高级设计感强', '原生支持 iCloud 备份'],
    description: 'iOS 上的 Clash 终极形态，界面美观优雅，完美运行所有高级 Clash 规则。',
    downloadUrl: 'https://apps.apple.com/us/app/stash/id1596063718',
    pricing: 'App Store 付费 ($3.99)'
  },

  // Android
  {
    name: 'v2rayNG',
    os: 'android',
    osDisplay: 'Android',
    badge: '安卓装机标配',
    core: 'Xray-core',
    recommended: true,
    features: ['支持分应用代理模式', '极简原生 Material 界面', '批量节点真连接延迟测速', '低后台耗电'],
    description: '安卓生态最通用、最可靠的代理软件，支持一键剪贴板导入、扫码导入与订阅更新。',
    downloadUrl: 'https://github.com/2dust/v2rayNG/releases',
    pricing: '免费开源'
  },
  {
    name: 'Hiddify',
    os: 'android',
    osDisplay: 'Android',
    badge: '新一代多协议',
    core: 'sing-box',
    recommended: true,
    features: ['自动最佳节点切换', '零配置导入直连', '多语言深度汉化', '现代流线型设计'],
    description: '基于 sing-box 开发的全能客户端，开箱即用，特别适合不想研究复杂分流规则的新手朋友。',
    downloadUrl: 'https://github.com/hiddify/hiddify-app/releases',
    pricing: '免费开源'
  },

  // Router / OpenWrt
  {
    name: 'OpenClash',
    os: 'router',
    osDisplay: '软路由 / OpenWrt',
    badge: '全屋透明代理',
    core: 'Mihomo / Clash 内核',
    recommended: true,
    features: ['路由器全局透明代理', '全家智能设备无需额外配置', '游戏主机极低丢包加速', '精细域名白名单分流'],
    description: 'OpenWrt 固件上的主力插件，一次配置，让全屋智能电视、Switch/PS5 游戏主机、手机和电脑全部无缝翻墙。',
    downloadUrl: 'https://github.com/vernesong/OpenClash',
    pricing: '免费开源'
  }
];
