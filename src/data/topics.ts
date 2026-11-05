export interface Topic {
  slug: string;
  title: string;
  subtitle: string;
  icon: string;
  badge: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroDescription: string;
  matchingAirportIds: string[]; // references ap_1, ap_2, etc.
  keyFeatures: { title: string; desc: string }[];
  buyingGuide: { step: string; content: string }[];
  faq: { q: string; a: string }[];
}

export const TOPICS: Topic[] = [
  {
    slug: 'hongkong',
    title: '香港低延迟专线',
    subtitle: '超低 Ping 20ms、大带宽、外贸及跨域游戏首选',
    icon: '⚡',
    badge: 'GEO 专线',
    metaTitle: '2026 香港低延迟专线机场推荐 — 20ms 晚高峰稳定不丢包',
    metaDescription: '针对香港专线节点进行深度横评，精选覆盖 IEPL/IPLC 内网直连香港专线的机场，平均延迟 20-30ms，4K视频秒开，外贸办公与联机对战首选。',
    heroHeadline: '2026 香港优质专线机场深度精选',
    heroDescription: '香港节点是国内翻墙连接物理距离最近、RTT 延迟最低的核心出口枢纽。本次评测聚焦专线直连、晚高峰带宽储备与抗封锁能力。',
    matchingAirportIds: ['ap_1', 'ap_2', 'ap_3', 'ap_4', 'ap_6', 'ap_7', 'ap_8', 'ap_9'],
    keyFeatures: [
      { title: '物理近端极速直达', desc: '平均 RTT 仅 20~35ms，网页响应如本地网络般顺滑。' },
      { title: 'IEPL / IPLC 专线直连', desc: '不走公网国际出口，彻底避开晚高峰骨干网拥堵与抖动。' },
      { title: '原生大带宽解锁', desc: '支持 Netflix 香港区、TVB Anywhere 及各类港区中文资源。' }
    ],
    buyingGuide: [
      { step: '第一步：优先选择主推的 IEPL 双专线架构', content: '如光速云提供香港多达 20 个负载均衡节点，即使单节点维护也丝毫不影响使用。' },
      { step: '第二步：观察测速实测报告中的丢包率', content: '晚高峰持续测速丢包率低于 1% 的节点才具备真正的游戏与会议稳定性。' },
      { step: '第三步：搭配本地运营商优化分流', content: '电信、联通走广深中转，移动走香港 CMI，速度提升明显。' }
    ],
    faq: [
      { q: '香港专线玩外服游戏延迟大概多少？', a: '走正规 IEPL 内网专线，广东地区延迟约 15-25ms，江浙沪约 35-45ms，北方地区约 50-60ms，基本达到电竞级水准。' },
      { q: '为什么有的香港节点打不开 ChatGPT？', a: 'OpenAI 官方目前未在香港地区提供直营服务。需要选择配备智能分流或美区/日区落地中继的机场。' }
    ]
  },
  {
    slug: 'ai-chatgpt',
    title: 'ChatGPT & Claude 解锁',
    subtitle: '免降级、支持 GPT-4o / Claude 3.5 Sonnet 原生 IP',
    icon: '🤖',
    badge: 'AI 专题',
    metaTitle: '2026 ChatGPT / Claude AI 专用机场推荐 — 原生纯净 IP 免封号',
    metaDescription: '针对 OpenAI ChatGPT、Anthropic Claude、Google Gemini 进行专线解锁实测，严选住宅纯净 IP 机场，杜绝 Access Denied 报错。',
    heroHeadline: 'ChatGPT & Claude AI 原生纯净解锁专线',
    heroDescription: 'OpenAI 与 Anthropic 对代理节点的数据中心 IP 风控极其严苛。本专题精选具备原生纯净机房 IP、住宅中继及无感知分流的顶级机场。',
    matchingAirportIds: ['ap_1', 'ap_2', 'ap_3', 'ap_4', 'ap_5', 'ap_8', 'ap_9', 'ap_10'],
    keyFeatures: [
      { title: '纯净原生 IP 落地', desc: '有效防止 OpenAI 出现“Unable to load site”或频繁风控人机验证。' },
      { title: 'Claude 3.5 免降级免封禁', desc: 'Anthropic 对节点欺诈度评分要求极高，专线落地确保对话不报错中断。' },
      { title: '长连接低抖动', desc: 'API 调用与流式输出（Streaming Token）丝滑稳定，代码补全不中断。' }
    ],
    buyingGuide: [
      { step: '核查流媒体与 AI 解锁矩阵', content: '选择本站明确标注 AI 解锁状态为【支持】的机场，如光速云、暮光加速。' },
      { step: '首选美国或台湾节点', content: '美国原生节点对 OpenAI 兼容度最佳，台湾/日本节点则兼顾低延迟与高可用。' },
      { step: '建议开启全局或精准分流规则', content: '在 Clash 或小火箭中配置 OpenAI 策略组，强制走美区原生专线。' }
    ],
    faq: [
      { q: '为什么节点能上网页但 ChatGPT 提示 Access Denied？', a: '这是因为节点的 IP 被 Cloudflare 识别为公共数据中心跳板。本站推荐的专线机场均定期轮换落地池，有效规避该问题。' }
    ]
  },
  {
    slug: 'streaming-netflix',
    title: 'Netflix & 4K 流媒体',
    subtitle: '秒开 4K/8K 奈飞原创剧、Disney+、YouTube 高清',
    icon: '🎬',
    badge: '影音流媒体',
    metaTitle: '2026 Netflix / Disney+ 4K流媒体翻墙机场推荐 — 秒开超清非自制剧',
    metaDescription: '针对 Netflix 全区非自制剧、Disney+、HBO Max、YouTube 4K 进行深度晚高峰实测，精选单节点带宽最高达 2.5Gbps 的高吞吐机场。',
    heroHeadline: 'Netflix 4K / Disney+ / YouTube 全区畅爽解锁',
    heroDescription: '支持美区、日区、港区、韩区等热门影音库，支持非自制剧完整解锁与多码率 4K/8K HDR 无缓冲串流。',
    matchingAirportIds: ['ap_1', 'ap_3', 'ap_6', 'ap_7', 'ap_9', 'ap_11', 'ap_16'],
    keyFeatures: [
      { title: '全区非自制剧解锁', desc: '突破奈飞区域版权库封锁，享受绝美 4K 超高清视听体验。' },
      { title: '超大带宽吞吐冗余', desc: '单节点提供 1Gbps~2.5Gbps 物理接入，多线程下载秒起步。' },
      { title: '晚高峰抗拥堵协议', desc: '采用 VLESS、Trojan 等现代加密协议，抗 QoS 流量限制。' }
    ],
    buyingGuide: [
      { step: '优先看晚高峰测速实测图', content: '关注本站提供的 MAI-TEST-BOT 实测报告，确保晚高峰下载速率在 200Mbps 以上。' },
      { step: '注意套餐流量包大小', content: '看 4K 视频每小时消耗约 7GB 流量，建议选择月流量在 200GB 以上的套餐。' }
    ],
    faq: [
      { q: '自制剧和非自制剧解锁有什么区别？', a: '自制剧（Netflix Originals）对所有登录 IP 开放；而《绝命毒师》《老友记》等版权非自制剧仅对原生居民 IP 解锁。' }
    ]
  },
  {
    slug: 'budget-friendly',
    title: '平价学生党精选',
    subtitle: '月付 5.6 元~10 元档极致性价比，稳定且省钱',
    icon: '💰',
    badge: '平价高性比',
    metaTitle: '2026 便宜平价高性价比机场推荐 — 月付5.6元起稳定专线',
    metaDescription: '为学生党和预算有限的用户精选 5.6 元、7 元、8 元档的高性价比翻墙机场，年付低至百元以内，拒绝跑路，用最少的钱买最稳的线路。',
    heroHeadline: '2026 极致平价与百元内高性价比机场',
    heroDescription: '翻墙不需要高昂开销。我们实测筛选出单价月均在 5~10 元、支持月付或年付且具备专线中转的高口碑低门槛品牌。',
    matchingAirportIds: ['ap_1', 'ap_3', 'ap_4', 'ap_5', 'ap_8', 'ap_21', 'ap_22', 'ap_23', 'ap_24', 'ap_26'],
    keyFeatures: [
      { title: '极致低门槛起步', desc: '最低年付折合仅约 5.6 元/月起，学生党毫无负担。' },
      { title: '专线中转不减配', desc: '打破“便宜没好货”的刻板印象，依然配备 IEPL 隧道或 BGP 入口。' },
      { title: '支持小额月付尝鲜', desc: '支持月付体验，满意再续费，资金风险极小。' }
    ],
    buyingGuide: [
      { step: '建议先买单月测试晚高峰', content: '虽然价格便宜，但建议先买一个月的月付套餐，在晚上 8 点到 10 点实测本地网络契合度。' },
      { step: '善用本站专属优惠码', content: '如光速云【AMM】、飞猫云【flycat888】、微风网络【flat888】，立减 10%~30%。' }
    ],
    faq: [
      { q: '便宜机场会不会容易跑路？', a: '选择运营时间超过 2~3 年的老牌机场（如光速云 2020 年运营、星岛梦 2020 年运营），可靠性远高于新开的小作坊。' }
    ]
  }
];
