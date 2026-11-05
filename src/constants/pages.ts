/**
 * VPN免费 (vpnfree.blog) 全站页面文本常量配置
 * 专为 42 家机场评测、网络测速实验室、GEO 专线专题及客户端指南打造
 */
import { SITE } from './components';

export const FAVORITES_PAGE = {
  meta: {
    title: `我的收藏机场 — ${SITE.name} (${SITE.enName})`,
    description: '您收藏关注的翻墙机场与VPN专属对比列表，方便随时比对晚高峰延迟、协议类型与专属优惠折扣。',
  },
  title: '我的收藏机场',
  subEmpty: '点击任意机场卡片右下角的心形图标即可收藏，方便随时比对晚高峰速度与价格。',
  subCount: (n: number) => `您已收藏 ${n} 家机场，支持一键比对专线与直达官网。`,
  empty: {
    icon: '❤️',
    title: '暂未收藏任何机场',
    text: '在机场列表或深度测评页面中，轻点心形图标即可将心仪品牌加入快速对比清单。',
    cta: { label: '浏览 42 家机场品牌库', href: '/airports' },
  },
  ariaRemove: (title: string) => `从收藏夹中移除 ${title}`,
} as const;

export const ABOUT = {
  meta: {
    title: `评测标准与方法论 — ${SITE.name} (${SITE.enName})`,
    description: `了解 ${SITE.name} 如何通过千兆宽带、自动化测试脚本、晚高峰打卡及原生流媒体/AI住宅IP验证，客观公正评测 42 家翻墙机场。`,
  },
  hero: {
    title: '客观、透明、硬核的数据可观测性评测',
    paragraphs: [
      `${SITE.name} (vpnfree.blog) 是由网络工程师、跨境科研人员与出海开发者共同发起的独立网络性能观测平台。我们见惯了市面上充斥着虚假吹捧、拿钱排名的“机场评测”，深知晚高峰断流、虚假IEPL专线和无休止跑路给用户带来的巨大困扰。`,
      '在这里，我们坚持“以实测截图为依据、以晚高峰为准绳、以安全避坑为首要原则”。所有纳入评测的 42 家品牌均经过真实自费订阅测试，涵盖电信、联通、移动三大运营商物理节点测试，以及 ChatGPT、Claude、Netflix 原生住宅解锁验证。',
    ],
    image: { src: '/speedtests/guangshiyun-speedtest.png', alt: '光速云晚高峰真实测速与流媒体解锁图' },
  },
  numbers: [
    { num: '42+', label: '长期追踪机场品牌' },
    { num: '1000M', label: '对称光纤实测基准' },
    { num: '20:00-23:00', label: '晚高峰压力打卡时段' },
    { num: '100%', label: '真机环境人工复核' },
  ],
  standards: {
    eyebrow: '测试方法论与评级维度',
    title: '我们如何对机场进行严苛打分？',
    paragraphs: [
      '为了杜绝“平时飞快、晚高峰瘫痪”的虚标现象，我们的测试全部集中在晚上 20:00 至 23:00 网络拥堵高峰期进行，通过多地探针并发拉取 YouTube 4K、Speedtest 节点以及海外机房服务器。',
      '我们严格区分直连（Direct）、公网中继（Relay）、IEPL 国际以太专线及 IPLC 国际点对点专线，严厉打击将普通公网中继伪装成专线的虚假宣传行为。',
    ],
    points: [
      '晚高峰下行带宽（Mbps）与丢包率（Packet Loss）：重点考察 4K/8K 视频秒开能力与连接稳定性。',
      '延迟与抖动（Jitter）：香港专线控制在 25-45ms 以内，日韩专线控制在 45-75ms 以内，满足实时竞技与金融交易需求。',
      '流媒体与 AI 工具解锁矩阵：全面检测 Netflix、Disney+、HBO Max、YouTube Premium 以及 ChatGPT 4o、Claude 3.5 Sonnet、Midjourney 访问限制。',
      '客户端适配与协议更新：优先推荐支持 Shadowsocks 2022、Trojan、VLESS-Reality 等前沿抗封锁协议的品牌。',
      '客服响应与退款机制：考察工单回复时效、电报群活跃度及退款承诺兑现情况。',
    ],
  },
  cta: {
    title: '发现节点异常或需要补充新品牌？',
    text: '如果您发现某家机场出现大面积节点失联、超卖变卡或优惠码失效，欢迎随时向评测组提交工单。',
    button: { label: '联系评测实验室', href: '/contacts' },
  },
} as const;

export const CONTACTS = {
  meta: {
    title: `联系我们与节点反馈 — ${SITE.name}`,
    description: `联系 ${SITE.name} 评测团队，提交节点失效反馈、机场品牌入库自荐或测速数据纠错。`,
  },
  title: '联系评测实验室',
  text: '我们欢迎广大读者、网络工程师和机场运营方提供一线网络反馈。无论发现节点测速误差、优惠码失效，还是推荐新兴优质专线，均可与我们取得联系。',
  cards: {
    email: {
      title: '官方联络邮箱',
      address: SITE.contactEmail,
      note: '收到反馈后，测试工程师通常会在 24 小时内进行实测复核并回复。',
    },
    warehouse: {
      title: '观测节点分布',
      lines: ['华东上海骨干出口（电信/联通 1000M FTTH）', '华南广州深圳出口（移动/电信 1000M FTTH）'],
    },
    hours: {
      title: '测速打卡时段',
      lines: ['常规监测：每日 09:00 – 18:00 (自动探针)', '极限压力测试：每日 20:00 – 23:00 (晚高峰人工实测)'],
    },
  },
  form: {
    nameLabel: '您的称呼或代号',
    namePlaceholder: '例如：网络极客',
    emailLabel: '您的电子邮箱',
    emailPlaceholder: 'yourname@example.com',
    messageLabel: '反馈内容 / 机场自荐说明',
    messagePlaceholder: '请详细描述您遇到的问题，例如：XX机场晚高峰香港节点延迟突增至200ms以上，或推荐收录某优质专线…',
    submitLabel: '提交工单反馈',
    successNote: '感谢您的反馈！我们的测试工程师将在晚高峰时段对该节点重新打卡复测。',
  },
} as const;

export const FAQ_PAGE = {
  meta: {
    title: `常见问题解答 (FAQ) — ${SITE.name} (${SITE.enName})`,
    description: `翻墙机场选型避坑指南：机场与传统VPN区别、IEPL专线原理解析、ChatGPT解锁失败原因及新手防跑路建议。`,
  },
  title: '常见问题解答与选型避坑指南',
  introHtml:
    '整理自 10,000+ 读者的真实选购困惑。如有更多问题，欢迎查看 <a href="/about" class="text-pine underline underline-offset-2">测试方法论</a> 或 <a href="/contacts" class="text-pine underline underline-offset-2">向实验室提交反馈</a>。',
  items: [
    {
      q: '什么是机场？为什么比传统商业 VPN（如 ExpressVPN、NordVPN）更好用？',
      a: '“机场”是中文互联网对基于 Shadowsocks、Trojan、VLESS 等前沿代理协议节点托管服务的俗称。传统国际商业 VPN（如 Nord、Express）主要采用 OpenVPN/IKEv2 协议，在中国大陆因没有专门的抗封锁混淆与国内入口优化，极易受到 GFW 深度包检测（DPI）干扰，导致大面积断连。而优质机场采用国内骨干 BGP 入口与 IEPL/IPLC 物理专线出境，不仅延迟超低（低至 20ms），且晚高峰完全不受公网拥堵影响。',
    },
    {
      q: '什么是 IEPL 与 IPLC 专线？它们与普通公网中继有何本质不同？',
      a: 'IPLC（国际私有租用线路）与 IEPL（国际以太网专线）属于真正的端到端点对点内网专线。数据从国内入口机房进入后，直接通过海底/陆地光纤物理专线送达海外落地机房，全程不过国家防火墙（GFW），具有“零审查、零干扰、晚高峰零丢包、延迟极度稳定”的特点。相比之下，公网中继依然是通过普通互联网隧道转发，一旦国际出口拥堵就会严重卡顿，敏感时期甚至会被集中封锁。',
    },
    {
      q: '为什么访问 ChatGPT、Claude 或 Netflix 时经常提示“Access Denied”或封号？',
      a: 'OpenAI 与 Anthropic 对数据中心机房 IP（如阿里云、甲骨文、AWS）有极严苛的封控策略。普通廉价机场由于上万人共用同一机房 IP，极易触发风控。要稳定使用 ChatGPT 4o、Claude 3.5 Sonnet 及 Netflix 4K，必须选择拥有“海外住宅原生 IP（Residential IP）”或纯净商业宽带出口的机场（如本站排名第一的光速云、暮光加速等），本站评测页均标注了 AI/流媒体解锁实测指标。',
    },
    {
      q: '如何有效防范机场跑路？有什么购买建议？',
      a: '任何机场都存在一定的不可抗力风险。防范跑路最核心的铁律是：“坚持月付或季付，切勿被所谓终身会员或长期大折扣诱惑购买年付”。此外，优先选择运营 2 年以上、具备多条冗余专线（如光速云的双专线热备架构）、且拥有活跃 TG 交流群的品牌。对于跨境办公或重度学术刚需，建议常备一家主用专线机场 + 一家平价中继机场作为冷备。',
    },
    {
      q: '主流代理客户端该怎么选？小白和专业开发者推荐用哪个？',
      a: 'Windows 平台强烈推荐 Clash Verge Rev 或 v2rayN（小白首选，界面现代且支持内核热更新）；macOS 平台推荐 Clash Verge Rev 或 Stash；iOS (iPhone/iPad) 首选 Shadowrocket（小火箭，操作直观性价比最高）或 Stash；Android 推荐 v2rayNG 或 Clash Meta for Android；软路由用户首选 OpenClash。详细下载与配置教程请参阅本站的【客户端大全】专题页面。',
    },
    {
      q: '为什么同一个机场，不同人测出来的速度差别很大？',
      a: '机场测速受多重变量影响：① 本地运营商（电信、联通、移动的国际骨干出口路由各异）；② 测速时段（白天闲时与晚高峰 20:00-23:00 差距巨大）；③ 本地宽带带宽与 Wi-Fi 信号衰减；④ 客户端分流规则与 DNS 污染。本站所有测评均以晚高峰千兆有线光纤直连为基准，尽量还原最严苛环境下的真实表现。',
    },
  ],
} as const;

export const PRIVACY = {
  meta: {
    title: `隐私权保护政策 — ${SITE.name}`,
    description: `${SITE.name} 承诺严格保护访问者个人隐私，不记录用户节点使用日志，不进行第三方数据追踪。`,
  },
  title: '隐私权保护政策',
  updated: `最近更新日期：2026年3月1日`,
  sections: [
    {
      h: '1. 信息收集原则与范围',
      p: 'VPN免费 (vpnfree.blog) 仅作为公开网络性能观测与测速评测展示平台。本站不提供任何直接代理服务器租用服务，不收集、不存储、不分析任何用户的代理订阅链接、网络访问流量或个人身份敏感信息。',
    },
    {
      h: '2. 本地缓存与 Cookie 使用',
      p: '本站仅在用户本地浏览器使用 LocalStorage 存储必要的明暗主题偏好设置（app-theme）及用户自愿保存的“收藏机场列表”（store-favorites-v1）。此类数据完全保留在您的本地终端设备中，绝不上报至任何远端服务器。',
    },
    {
      h: '3. 外部链接与第三方平台',
      p: '本站包含指向 42 家机场品牌官方网站及 GitHub 开源客户端仓库的外部链接。当您离开本站访问第三方网站时，请注意查阅相应平台的隐私政策，本站对第三方平台的数据收集与处理行为概不负责。',
    },
    {
      h: '4. 联系与反馈数据安全',
      p: '如果您通过联系页面主动向我们发送工单反馈或邮件沟通，您的联系方式将仅用于回复您的具体诉求，绝不会透露或转售给任何第三方商业实体。',
    },
  ],
} as const;

export const TERMS = {
  meta: {
    title: `免责声明与服务条款 — ${SITE.name}`,
    description: `查阅 ${SITE.name} 的免责声明、网络合规指引与联盟推广佣金透明披露。`,
  },
  title: '免责声明与服务条款',
  updated: `最近更新日期：2026年3月1日`,
  sections: [
    {
      h: '1. 评测数据客观性与时效性说明',
      p: '本站所有测速截图、解锁矩阵及延迟数据均基于特定测试时段与特定网络接入环境（千兆宽带+晚高峰打卡）。由于跨境网络波动、运营商路由变更及机场节点扩容维护等不可控因素，本站评测数据仅供学术研究、跨境科研选型参考，不构成对任何节点在任意时刻 100% 可用性的担保。',
    },
    {
      h: '2. 联盟推广佣金透明披露 (Affiliate Disclosure)',
      p: '为了维持本站独立评测服务器、自动化测速探针及自费购买机场订阅的运营成本，本站部分前往机场官方的跳转链接包含推广合作标识（按国际标准统一标明 rel="nofollow sponsored noopener"）。当您通过专属折扣码购买服务时，本站可能获得微薄佣金，但这绝不会增加您的实际购买成本，亦不会影响我们对任何劣质节点的如实曝光。',
    },
    {
      h: '3. 当地法律法规遵守义务',
      p: '本站坚决倡导合规合法使用网络技术。所有读者在使用网络代理技术时，必须严格遵守所在国家与地区的法律法规，严禁利用网络代理从事任何违法犯罪、危害国家安全或侵犯他人合法权益的活动。对于因滥用代理技术导致的任何法律后果，使用者需自行承担全部法律责任。',
    },
    {
      h: '4. 知识产权与原创保护',
      p: '本站所有评测长文、测速图表、数据对比矩阵及原创版面设计均享有完整的版权保护。未经本站明确书面许可，任何个人或组织不得擅自抓取、镜像、抄袭或伪造本站原创评测内容。',
    },
  ],
} as const;

export const NOT_FOUND = {
  meta: {
    title: `页面未找到 (404) — ${SITE.name}`,
    description: '抱歉，您访问的评测页面不存在或已被移除。',
  },
  title: '404 · 目标页面不存在',
  text: '您访问的机场评测、专线专题或客户端页面可能已被迁移、重命名或临时下线。',
  ctaPrimary: { label: '返回首页排行榜', href: '/' },
  ctaSecondary: { label: '浏览 42 家机场品牌库', href: '/airports' },
} as const;
