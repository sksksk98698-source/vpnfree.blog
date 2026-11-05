/**
 * 翻墙机场跑路预警与避坑雷达数据集
 * 涵盖红黄绿三色可信度评级体系、已跑路黑名单复盘、7大典型跑路征兆及替代救急机制
 */

export interface RadarBrand {
  name: string;
  status: 'green' | 'yellow' | 'red';
  statusText: string;
  uptime: string;
  operatingDuration: string;
  riskFactor: string;
  lastIncidentNote: string;
  recommendedAlternative?: {
    name: string;
    slug: string;
    reason: string;
    coupon: string;
    affLink: string;
  };
}

export const RADAR_BRANDS: RadarBrand[] = [
  // 🟢 绿色健康观察池 (长期稳定、双专线容灾、信誉极佳)
  {
    name: '光速云',
    status: 'green',
    statusText: '🟢 极度健康 · 长期信誉观察池',
    uptime: '99.98%',
    operatingDuration: '2年以上稳定运营',
    riskFactor: '极低 (双专线物理热备冗余)',
    lastIncidentNote: '晚高峰探针持续打卡 0.0% 丢包，支持月付无资金沉淀风险，工单响应时效良好。'
  },
  {
    name: '暮光加速',
    status: 'green',
    statusText: '🟢 极度健康 · 长期信誉观察池',
    uptime: '99.95%',
    operatingDuration: '2023年持续运营',
    riskFactor: '极低 (BGP高防入口+多端支持)',
    lastIncidentNote: 'TG 交流群活跃，官方公告透明，多次平稳度过敏感时期封锁。'
  },
  {
    name: '飞猫云',
    status: 'green',
    statusText: '🟢 极度健康 · 长期信誉观察池',
    uptime: '99.91%',
    operatingDuration: '自研客户端稳定运营',
    riskFactor: '低 (专属轻量架构)',
    lastIncidentNote: '客户端版本定期迭代更新，新手群客服全天在线答疑。'
  },
  {
    name: '微风网络',
    status: 'green',
    statusText: '🟢 极度健康 · 长期信誉观察池',
    uptime: '99.89%',
    operatingDuration: '老牌团队运维',
    riskFactor: '低 (IEPL专线保障)',
    lastIncidentNote: '节点负载均衡机制健全，突发故障一般在 30 分钟内自动热切备用线路。'
  },
  {
    name: '大佬云',
    status: 'green',
    statusText: '🟢 极度健康 · 长期信誉观察池',
    uptime: '99.85%',
    operatingDuration: '持续平价运营',
    riskFactor: '低 (坚持月付极致平价)',
    lastIncidentNote: '主打 5.6 元极低月付，不推高额终身会员，资金链健康透明。'
  },
  {
    name: '星岛梦',
    status: 'green',
    statusText: '🟢 极度健康 · 长期信誉观察池',
    uptime: '99.82%',
    operatingDuration: '2020年起老牌按量',
    riskFactor: '低 (老牌不限时按量)',
    lastIncidentNote: '不限时按量计费鼻祖之一，经历多轮网络波动依然稳健如初。'
  },

  // 🟡 黄色关注预警 (异动观察、延迟波动、域名频繁变更)
  {
    name: '某某低价新机场 (行业抽检样本 A)',
    status: 'yellow',
    statusText: '🟡 风险预警 · 持续异动关注',
    uptime: '91.20%',
    operatingDuration: '成立不足 3 个月',
    riskFactor: '较高 (忽然狂推年付2折促销)',
    lastIncidentNote: '近期在各大论坛大量投放“99元终身VIP”广告，晚高峰节点大量出现 40% 丢包，疑似超卖圈钱。',
    recommendedAlternative: {
      name: '光速云',
      slug: 'guangshiyun',
      reason: '拒绝终身年付陷阱，光速云 ¥8/月起支持按月体验，IEPL 物理专线保障。',
      coupon: 'AMM',
      affLink: 'https://gscloud.net/#/register?code=AMM'
    }
  },
  {
    name: '某某公网中继节点 (行业抽检样本 B)',
    status: 'yellow',
    statusText: '🟡 风险预警 · 入口频繁被墙',
    uptime: '88.50%',
    operatingDuration: '运营 6 个月',
    riskFactor: '中高 (无专线冗余，直连公网)',
    lastIncidentNote: '官网 1 个月内更换了 4 次顶级域名，TG 群已被管理员开启全员禁言，客服工单平均回复超过 72 小时。',
    recommendedAlternative: {
      name: '暮光加速',
      slug: 'muguang',
      reason: 'BGP 多入口冗余容灾，不惧单点入口被阻断，群内技术客服实时值班。',
      coupon: 'muguang5555',
      affLink: 'https://muguang.me/#/register?code=muguang5555'
    }
  },

  // 🔴 红色已跑路与永久失联通报 (历史跑路典型案例复盘)
  {
    name: '极速互联 (已跑路典型)',
    status: 'red',
    statusText: '🔴 确认为跑路 · 永久失联黑榜',
    uptime: '0.00%',
    operatingDuration: '2025年11月已彻底关站',
    riskFactor: '致命 (已跑路卷款)',
    lastIncidentNote: '跑路前一个月发起“黑五终身特惠 199元无限制”，收割数万用户后于 11 月底清空所有节点服务器并解散 Telegram 官方群。',
    recommendedAlternative: {
      name: '光速云',
      slug: 'guangshiyun',
      reason: '受害者推荐平替：拥有正规自建机房专线，支持按月付款，杜绝资金被套。',
      coupon: 'AMM',
      affLink: 'https://gscloud.net/#/register?code=AMM'
    }
  },
  {
    name: '云帆加速 (已跑路典型)',
    status: 'red',
    statusText: '🔴 确认为跑路 · 域名被封失联',
    uptime: '0.00%',
    operatingDuration: '2026年1月关站',
    riskFactor: '致命 (站长失联)',
    lastIncidentNote: '因将普通直连节点虚标为 IPLC 专线遭到大量投诉，随后支付通道被风控冻结，站长直接放弃运维关服跑路。',
    recommendedAlternative: {
      name: '大佬云',
      slug: 'dalaoyun',
      reason: '透明如实标注中继与专线，月付仅需 ¥5.6，极致性价比备用首选。',
      coupon: '',
      affLink: 'https://dalaoyun.net/#/register?code=AMM'
    }
  }
];

export const WARNING_SIGNS = [
  {
    title: '1. 突然推出狂暴的“终身会员”或“三年巨惠”',
    desc: '正规 IEPL/IPLC 专线的带宽采购成本是按月向运营商交纳的真金白银。任何推出“99元用一辈子”的商家，其算盘绝不是长期运营，而是资金链断裂后的最后一波极限圈钱。'
  },
  {
    title: '2. 官方交流群由自由聊天突然改为“全员禁言”',
    desc: '当一家机场的 Telegram 官方群或 QQ 群被管理员毫无预兆地转为只读频道、禁止所有人发言时，通常意味着大面积故障无法解决，为了掩盖用户退款声讨而进行言论封锁。'
  },
  {
    title: '3. 官网频繁更换域名且旧域名迟迟不设跳转',
    desc: '正常机场更换域名会提前邮件公告并设置 301 自动跳转。如果原官网突然打不开，备用地址在第三方不知名域名间跳转，往往是站长已被注销或域名被注册商封禁的前兆。'
  },
  {
    title: '4. 节点列表大量断连，借口“专线升级”超过两周',
    desc: '真正的专线扩容维护通常在凌晨半小时内完成。如果节点由 50 个骤减到 3 个，且长达 14 天以上未恢复，说明商家欠费已被机房停机拔线。'
  },
  {
    title: '5. 支付网关变为不安全的个人转账二维码',
    desc: '无法接入正规海外商业免签支付通道，只能让用户扫个人微信赞赏码或支付宝收款码，说明其商户资质已被微信/支付宝集中风控封禁，随时面临资金冻结跑路。'
  },
  {
    title: '6. 退款工单超时不回，或直接强行“关闭工单”',
    desc: '一旦客服系统停止运作，工单挂起数天无人问津，甚至在用户申请退款后直接封禁用户账号，这是跑路前最恶劣的直接表现。'
  },
  {
    title: '7. 虚假宣传“100%不过墙/绝对合法国家级通道”',
    desc: '凡是将科学上网服务包装成“国家授权、合法合规公网”的个人小作坊，不仅涉嫌虚假宣传诈骗，且随时可能因触碰监管红线而被执法机关依法关停。'
  }
];
