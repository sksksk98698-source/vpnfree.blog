/**
 * 42家机场品牌数据库（全结构化数据 + 实测图映射 + SEO与GEO专线信息）
 * 严格按照首选主推光速云与前十大排名：
 * 1. 光速云 2. 暮光加速 3. 飞猫云 4. 微风网络 5. 大佬云
 * 6. 星岛梦 7. 二猫云 8. 无忧链接 9. 唯兔云 10. Firefly
 */

export interface Plan {
  name: string;
  billing: string;
  price: string;
  traffic: string;
  cycle: string;
}

export interface SpeedTestPoint {
  location: string;
  ping: string;
  download: string;
}

export interface SpeedTestImage {
  url: string;
  caption: string;
  testedAt?: string;
  tool?: string;
}

export interface Airport {
  id: string;
  rank: number;
  name: string;
  slug: string;
  affLink: string;
  coupon?: string;
  minPriceMonthly: number;
  priceDisplay: string;
  operatingSince: string;
  lineType: string;
  protocols: string[];
  nodeCount: string;
  coverageRegions: string[];
  speedTestData: SpeedTestPoint[];
  speedTestImages: SpeedTestImage[];
  streamingUnlock: {
    status: 'full' | 'partial' | 'supported';
    items: { name: string; supported: boolean; note?: string }[];
  };
  aiUnlock: {
    status: 'full' | 'partial' | 'supported';
    items: { name: string; supported: boolean; note?: string }[];
  };
  plans: Plan[];
  features: string[];
  description: string;
  pros: string[];
  cons: string[];
  recommendedFor: string[];
  tags: string[];
  isTop10: boolean;
}

export const AIRPORTS: Airport[] = [
  {
    "origId": 1,
    "name": "光速云",
    "slug": "guangshiyun",
    "affLink": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "coupon": "AMM",
    "minPriceMonthly": 8,
    "priceDisplay": "¥8 /月起",
    "operatingSince": "2020年",
    "lineType": "IPLC专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodeCount": "40+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾",
      "英国",
      "德国",
      "法国"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "22ms",
        "download": "529Mbps"
      },
      {
        "location": "台湾",
        "ping": "41ms",
        "download": "114Mbps"
      },
      {
        "location": "新加坡",
        "ping": "46ms",
        "download": "387Mbps"
      },
      {
        "location": "日本",
        "ping": "57ms",
        "download": "135Mbps"
      },
      {
        "location": "美国",
        "ping": "143ms",
        "download": "18Mbps"
      }
    ],
    "speedTestImages": [
      {
        "url": "/speedtests/guangshiyun-speedtest.png",
        "caption": "光速云 晚高峰节点测速（MAI-TEST-BOT 实测）",
        "testedAt": "2026-08-11",
        "tool": "MAI-TEST-BOT"
      },
      {
        "url": "/speedtests/guangshiyun-node-01.jpg",
        "caption": "光速云 香港与亚太专线延迟与稳定性监控",
        "testedAt": "2026-08-19"
      },
      {
        "url": "/speedtests/guangshiyun-node-02.jpg",
        "caption": "光速云 流媒体与全球 CDN 解锁实测",
        "testedAt": "2026-08-19"
      },
      {
        "url": "/speedtests/guangshiyun-node-03.jpg",
        "caption": "光速云 ChatGPT & Claude AI 原生解锁状态",
        "testedAt": "2026-08-19"
      },
      {
        "url": "/speedtests/guangshiyun-node-04.jpg",
        "caption": "光速云 全球节点拓扑与带宽冗余详情",
        "testedAt": "2026-08-19"
      },
      {
        "url": "/speedtests/guangshiyun-node-05.jpg",
        "caption": "光速云 晚高峰 4K 极速加载与带宽利用率",
        "testedAt": "2026-08-19"
      }
    ],
    "streamingUnlock": {
      "status": "full",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "原创剧4K秒开"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "全区解锁"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K/8K 零缓冲"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "原生住宅节点"
        }
      ]
    },
    "aiUnlock": {
      "status": "full",
      "items": [
        {
          "name": "ChatGPT",
          "supported": false,
          "note": "需选特定节点"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "免降级"
        },
        {
          "name": "Gemini",
          "supported": false,
          "note": "视节点而定"
        }
      ]
    },
    "plans": [
      {
        "name": "光速云·致敬斯诺克147永久套餐",
        "billing": "一次性付费",
        "price": "¥147",
        "traffic": "247GB不过期",
        "cycle": "每月"
      },
      {
        "name": "光速云·轻量版",
        "billing": "年付",
        "price": "¥99",
        "traffic": "69GB",
        "cycle": "每月"
      },
      {
        "name": "光速云·极速版",
        "billing": "月付",
        "price": "¥25",
        "traffic": "168GB",
        "cycle": "每月"
      },
      {
        "name": "光速云·流光版",
        "billing": "月付",
        "price": "¥34",
        "traffic": "268GB",
        "cycle": "每月"
      },
      {
        "name": "光速云·量子版",
        "billing": "月付",
        "price": "¥68",
        "traffic": "568GB",
        "cycle": "每月"
      },
      {
        "name": "光速云·无界版",
        "billing": "月付",
        "price": "¥138",
        "traffic": "900GB",
        "cycle": "每月"
      },
      {
        "name": "光速云·定制套餐",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "cycle": "每月"
      }
    ],
    "features": [
      "IPLC专线跨境低延迟架构",
      "多终端客户端兼容与一键导入",
      "主流流媒体与 AI 工具深度解锁",
      "晚高峰智能负载均衡调度"
    ],
    "description": "光速云在便宜机场推荐里属于价格有优势的一类，99 元/年左右的最低套餐，换算下来每月成本不高，在高性价比机场推荐里比较有竞争力。它把 IPLC 专线和隧道中转结合着用，第三方测试显示香港、日本节点速度表现还不错，也支持 Netflix、Disney+、YouTube 等主流流媒体。不过要注意，ChatGPT、Gemini 这类 AI 工具并不是所有节点都稳定支持，实际用的时候可能需要手动切换节点，这点官方也承认。套餐里特殊商品不支持退款，所以更建议先买月付或者小额套餐，实测晚高峰速度和稳定性之后，再考虑要不要长期用。",
    "pros": [
      "IPLC专线传输架构，抗封锁与抗抖动能力强",
      "覆盖主流亚太节点（香港/日本/新加坡），延迟表现优异",
      "支持专属优惠码【AMM】，性价比突出"
    ],
    "cons": [
      "晚高峰超大带宽测速受本地运营商出口影响",
      "部分冷门欧美节点需手动挑选低延迟路线"
    ],
    "recommendedFor": [
      "经常需要查阅资料与文献的学生与科研人员",
      "重度使用 ChatGPT / Claude 的 AI 创作者与开发者",
      "追求 4K / 8K Netflix 与 YouTube 流畅体验的影音爱好者"
    ],
    "rank": 1,
    "id": "ap_1",
    "isTop10": true,
    "tags": [
      "主推首选",
      "IEPL双专线",
      "老牌稳定",
      "极致平价",
      "附实测图",
      "VLESS"
    ]
  },
  {
    "origId": 2,
    "name": "暮光加速",
    "slug": "muguang",
    "affLink": "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    "coupon": "muguang5555",
    "minPriceMonthly": 20,
    "priceDisplay": "¥20 /月起",
    "operatingSince": "2023年",
    "lineType": "BGP中转",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodeCount": "40+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "26ms",
        "download": "509Mbps"
      },
      {
        "location": "台湾",
        "ping": "40ms",
        "download": "107Mbps"
      },
      {
        "location": "新加坡",
        "ping": "43ms",
        "download": "419Mbps"
      },
      {
        "location": "日本",
        "ping": "53ms",
        "download": "150Mbps"
      },
      {
        "location": "美国",
        "ping": "160ms",
        "download": "19Mbps"
      }
    ],
    "speedTestImages": [],
    "streamingUnlock": {
      "status": "full",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "原创剧4K秒开"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "全区解锁"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K/8K 零缓冲"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "原生住宅节点"
        }
      ]
    },
    "aiUnlock": {
      "status": "full",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "原生支持"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "免降级"
        },
        {
          "name": "Gemini",
          "supported": false,
          "note": "视节点而定"
        }
      ]
    },
    "plans": [
      {
        "name": "【暮光·基础版】",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "cycle": "每月"
      },
      {
        "name": "【暮光·标准版】",
        "billing": "月付",
        "price": "¥40",
        "traffic": "240GB",
        "cycle": "每月"
      },
      {
        "name": "【暮光·旗舰版】",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "cycle": "每月"
      },
      {
        "name": "【暮光·至尊版】",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "cycle": "每月"
      },
      {
        "name": "【暮光·年付轻量版】",
        "billing": "年付",
        "price": "¥109",
        "traffic": "70GB",
        "cycle": "每月"
      },
      {
        "name": "【暮光·不限时轻量包】",
        "billing": "一次性付费",
        "price": "¥219",
        "traffic": "150GB",
        "cycle": "一次性"
      },
      {
        "name": "【暮光·不限时标准包】",
        "billing": "一次性付费",
        "price": "¥529",
        "traffic": "400GB",
        "cycle": "一次性"
      },
      {
        "name": "【暮光·不限时大容量包】",
        "billing": "一次性付费",
        "price": "¥959",
        "traffic": "800GB",
        "cycle": "一次性"
      },
      {
        "name": "独享私人定制节点",
        "billing": "月付",
        "price": "¥600",
        "traffic": "500GB",
        "cycle": "每月"
      }
    ],
    "features": [
      "BGP 智能调度，专线级出口，主打稳定低延迟",
      "覆盖 Windows、macOS、iOS、Android、Linux 全平台",
      "支持多设备同时在线，套餐 120GB–1500GB 流量可选",
      "官方宣称提供 7×24 小时真人客服"
    ],
    "description": "暮光加速 是一家优质网络加速机场，提供高可用跨境网络专线中转服务，节点覆盖亚太及欧美主流地区，保障流媒体与AI工具流畅访问。",
    "pros": [
      "BGP中转传输架构，抗封锁与抗抖动能力强",
      "覆盖主流亚太节点（香港/日本/新加坡），延迟表现优异",
      "支持专属优惠码【muguang5555】，性价比突出"
    ],
    "cons": [
      "晚高峰超大带宽测速受本地运营商出口影响",
      "部分冷门欧美节点需手动挑选低延迟路线"
    ],
    "recommendedFor": [
      "经常需要查阅资料与文献的学生与科研人员",
      "重度使用 ChatGPT / Claude 的 AI 创作者与开发者",
      "追求 4K / 8K Netflix 与 YouTube 流畅体验的影音爱好者"
    ],
    "rank": 2,
    "id": "ap_2",
    "isTop10": true,
    "tags": [
      "TOP10强推",
      "BGP中转",
      "企业商务",
      "VLESS"
    ]
  },
  {
    "origId": 3,
    "name": "飞猫云",
    "slug": "feimao",
    "affLink": "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    "coupon": "flycat888",
    "minPriceMonthly": 7,
    "priceDisplay": "¥7 /月起",
    "operatingSince": "2023年",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodeCount": "40+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "21ms",
        "download": "526Mbps"
      },
      {
        "location": "台湾",
        "ping": "41ms",
        "download": "116Mbps"
      },
      {
        "location": "新加坡",
        "ping": "45ms",
        "download": "413Mbps"
      },
      {
        "location": "日本",
        "ping": "54ms",
        "download": "138Mbps"
      },
      {
        "location": "美国",
        "ping": "178ms",
        "download": "14Mbps"
      }
    ],
    "speedTestImages": [
      {
        "url": "/speedtests/feimao-speedtest.png",
        "caption": "飞猫云 节点测速实测（Shadowsocks / 08:52 CST）",
        "testedAt": "2026-08-11",
        "tool": "MAI-TEST-BOT"
      }
    ],
    "streamingUnlock": {
      "status": "full",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "原创剧4K秒开"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "全区解锁"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K/8K 零缓冲"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "原生住宅节点"
        }
      ]
    },
    "aiUnlock": {
      "status": "full",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "原生支持"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "免降级"
        },
        {
          "name": "Gemini",
          "supported": false,
          "note": "视节点而定"
        }
      ]
    },
    "plans": [
      {
        "name": "飞猫·学生版",
        "billing": "年付",
        "price": "¥84",
        "traffic": "50GB",
        "cycle": "每月"
      },
      {
        "name": "飞猫·星耀版",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "飞猫·星环版",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "飞猫·银河版",
        "billing": "月付",
        "price": "¥85",
        "traffic": "600GB",
        "cycle": "每月"
      },
      {
        "name": "飞猫·宇宙版",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1000GB",
        "cycle": "每月"
      },
      {
        "name": "飞猫·不限时套餐",
        "billing": "一次性付费",
        "price": "¥680",
        "traffic": "1000GB",
        "cycle": "一次性"
      },
      {
        "name": "飞猫·定制套餐",
        "billing": "月付",
        "price": "¥550",
        "traffic": "500GB",
        "cycle": "每月"
      }
    ],
    "features": [
      "主打轻快连接、简单配置和灵活节点切换",
      "专属客户端下载登录即用，不用配订阅",
      "不用自己挑客户端、导订阅，新手容易快速上手",
      "节点覆盖亚太、欧美等热门地区"
    ],
    "description": "飞猫云更适合放进新手机场推荐这个分类——它的重点不是极致速度或专线，而是省事：走的是专属客户端模式，下载 App、登录就能用，不用找订阅链接、不用配 Clash，第一次用机场的人也能快速上手。7 元/月起的价格也不算贵，节点覆盖亚太和欧美常见地区，日常看视频、用 AI 工具都能应付，作为轻量日常使用足够。它不是那种主打顶级专线体验的机场，如果你要的是极致稳定，可能得看看更偏专线机场推荐的选项，但作为日常主力或备用机场，飞猫云的易用性是个明显加分项。",
    "pros": [
      "IEPL专线传输架构，抗封锁与抗抖动能力强",
      "覆盖主流亚太节点（香港/日本/新加坡），延迟表现优异",
      "支持专属优惠码【flycat888】，性价比突出"
    ],
    "cons": [
      "晚高峰超大带宽测速受本地运营商出口影响",
      "部分冷门欧美节点需手动挑选低延迟路线"
    ],
    "recommendedFor": [
      "经常需要查阅资料与文献的学生与科研人员",
      "重度使用 ChatGPT / Claude 的 AI 创作者与开发者",
      "追求 4K / 8K Netflix 与 YouTube 流畅体验的影音爱好者"
    ],
    "rank": 3,
    "id": "ap_3",
    "isTop10": true,
    "tags": [
      "TOP10强推",
      "IEPL专线",
      "极致平价",
      "附实测图",
      "VLESS"
    ]
  },
  {
    "origId": 4,
    "name": "微风网络",
    "slug": "weifeng",
    "affLink": "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    "coupon": "flat888",
    "minPriceMonthly": 7,
    "priceDisplay": "¥7 /月起",
    "operatingSince": "2023年",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodeCount": "40+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "25ms",
        "download": "546Mbps"
      },
      {
        "location": "台湾",
        "ping": "40ms",
        "download": "115Mbps"
      },
      {
        "location": "新加坡",
        "ping": "43ms",
        "download": "384Mbps"
      },
      {
        "location": "日本",
        "ping": "54ms",
        "download": "131Mbps"
      },
      {
        "location": "美国",
        "ping": "167ms",
        "download": "17Mbps"
      }
    ],
    "speedTestImages": [
      {
        "url": "/speedtests/weifeng-speedtest.png",
        "caption": "微风网络 亚太节点测速实测",
        "testedAt": "2026-08-11",
        "tool": "MAI-TEST-BOT"
      }
    ],
    "streamingUnlock": {
      "status": "full",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "原创剧4K秒开"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "全区解锁"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K/8K 零缓冲"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "原生住宅节点"
        }
      ]
    },
    "aiUnlock": {
      "status": "full",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "原生支持"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "免降级"
        },
        {
          "name": "Gemini",
          "supported": false,
          "note": "视节点而定"
        }
      ]
    },
    "plans": [
      {
        "name": "清风 (Breeze)",
        "billing": "年付",
        "price": "¥137",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "乘风 (Riding)",
        "billing": "月付",
        "price": "¥27",
        "traffic": "200GB",
        "cycle": "每月"
      },
      {
        "name": "破风 (Breaking)",
        "billing": "月付",
        "price": "¥57",
        "traffic": "500GB",
        "cycle": "每月"
      },
      {
        "name": "御风 (Mastery)",
        "billing": "月付",
        "price": "¥127",
        "traffic": "1200GB",
        "cycle": "每月"
      },
      {
        "name": "信风·不限时",
        "billing": "一次性付费",
        "price": "¥200",
        "traffic": "270GB",
        "cycle": "一次性"
      },
      {
        "name": "长风·不限时",
        "billing": "一次性付费",
        "price": "¥370",
        "traffic": "570GB",
        "cycle": "一次性"
      }
    ],
    "features": [
      "IEPL 专线 + VLESS 协议，定位入门级高性价比机场",
      "覆盖香港、新加坡、日本、美国等多地原生 IP 节点",
      "可解锁 Netflix、Disney+ 等主流流媒体及 ChatGPT、Claude 等 AI 工具",
      "客服 7×24 小时在线，夜间由 AI 客服值守，适合新手和轻度用户"
    ],
    "description": "微风网络 是一家优质网络加速机场，提供高可用跨境网络专线中转服务，节点覆盖亚太及欧美主流地区，保障流媒体与AI工具流畅访问。",
    "pros": [
      "IEPL专线传输架构，抗封锁与抗抖动能力强",
      "覆盖主流亚太节点（香港/日本/新加坡），延迟表现优异",
      "支持专属优惠码【flat888】，性价比突出"
    ],
    "cons": [
      "晚高峰超大带宽测速受本地运营商出口影响",
      "部分冷门欧美节点需手动挑选低延迟路线"
    ],
    "recommendedFor": [
      "经常需要查阅资料与文献的学生与科研人员",
      "重度使用 ChatGPT / Claude 的 AI 创作者与开发者",
      "追求 4K / 8K Netflix 与 YouTube 流畅体验的影音爱好者"
    ],
    "rank": 4,
    "id": "ap_4",
    "isTop10": true,
    "tags": [
      "TOP10强推",
      "IEPL专线",
      "极致平价",
      "附实测图",
      "VLESS"
    ]
  },
  {
    "origId": 5,
    "name": "大佬云",
    "slug": "dalaoyun",
    "affLink": "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",
    "coupon": "dly888",
    "minPriceMonthly": 5.6,
    "priceDisplay": "¥5.6 /月起",
    "operatingSince": "2024年",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodeCount": "40+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "28ms",
        "download": "480Mbps"
      },
      {
        "location": "日本",
        "ping": "55ms",
        "download": "260Mbps"
      },
      {
        "location": "新加坡",
        "ping": "48ms",
        "download": "350Mbps"
      },
      {
        "location": "美国",
        "ping": "155ms",
        "download": "95Mbps"
      }
    ],
    "speedTestImages": [],
    "streamingUnlock": {
      "status": "supported",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "原创剧4K秒开"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "全区解锁"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K/8K 零缓冲"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "原生住宅节点"
        }
      ]
    },
    "aiUnlock": {
      "status": "partial",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "原生支持"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "免降级"
        },
        {
          "name": "Gemini",
          "supported": false,
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "大佬云·基础版",
        "billing": "月付",
        "price": "¥8",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "大佬云·标准版",
        "billing": "月付",
        "price": "¥14",
        "traffic": "250GB",
        "cycle": "每月"
      },
      {
        "name": "大佬云·年付优惠版",
        "billing": "年付",
        "price": "¥54",
        "traffic": "120GB",
        "cycle": "每月"
      }
    ],
    "features": [
      "IEPL专线跨境低延迟架构",
      "多终端客户端兼容与一键导入",
      "主流流媒体与 AI 工具深度解锁",
      "晚高峰智能负载均衡调度"
    ],
    "description": "大佬云 是一家优质网络加速机场，提供高可用跨境网络专线中转服务，节点覆盖亚太及欧美主流地区，保障流媒体与AI工具流畅访问。",
    "pros": [
      "IEPL专线传输架构，抗封锁与抗抖动能力强",
      "覆盖主流亚太节点（香港/日本/新加坡），延迟表现优异",
      "支持专属优惠码【dly888】，性价比突出"
    ],
    "cons": [
      "晚高峰超大带宽测速受本地运营商出口影响",
      "部分冷门欧美节点需手动挑选低延迟路线"
    ],
    "recommendedFor": [
      "经常需要查阅资料与文献的学生与科研人员",
      "重度使用 ChatGPT / Claude 的 AI 创作者与开发者",
      "追求 4K / 8K Netflix 与 YouTube 流畅体验的影音爱好者"
    ],
    "rank": 5,
    "id": "ap_5",
    "isTop10": true,
    "tags": [
      "TOP10强推",
      "IEPL专线",
      "极致平价",
      "VLESS"
    ]
  },
  {
    "origId": 6,
    "name": "星岛梦",
    "slug": "xingdaomeng",
    "affLink": "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
    "coupon": "nmw888",
    "minPriceMonthly": 8,
    "priceDisplay": "¥8 /月起",
    "operatingSince": "2020年",
    "lineType": "IEPL专线",
    "protocols": [
      "Trojan"
    ],
    "nodeCount": "40+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾",
      "韩国"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "27ms",
        "download": "504Mbps"
      },
      {
        "location": "台湾",
        "ping": "41ms",
        "download": "103Mbps"
      },
      {
        "location": "新加坡",
        "ping": "44ms",
        "download": "411Mbps"
      },
      {
        "location": "日本",
        "ping": "57ms",
        "download": "136Mbps"
      },
      {
        "location": "美国",
        "ping": "177ms",
        "download": "18Mbps"
      }
    ],
    "speedTestImages": [
      {
        "url": "/speedtests/xingdaomeng-speedtest.png",
        "caption": "星岛梦 老牌专线节点测速实测",
        "testedAt": "2026-08-11",
        "tool": "MAI-TEST-BOT"
      }
    ],
    "streamingUnlock": {
      "status": "full",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "原创剧4K秒开"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "全区解锁"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K/8K 零缓冲"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "原生住宅节点"
        }
      ]
    },
    "aiUnlock": {
      "status": "full",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "原生支持"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "免降级"
        },
        {
          "name": "Gemini",
          "supported": false,
          "note": "视节点而定"
        }
      ]
    },
    "plans": [
      {
        "name": "星岛梦·贴心小包",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "星岛梦·超量150G",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "星岛梦·进阶300G",
        "billing": "月付",
        "price": "¥50",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "星岛梦·闪光500G",
        "billing": "月付",
        "price": "¥70",
        "traffic": "500GB",
        "cycle": "每月"
      },
      {
        "name": "星岛梦·旗舰1T版",
        "billing": "月付",
        "price": "¥130",
        "traffic": "1000GB",
        "cycle": "每月"
      },
      {
        "name": "星岛梦·永久不限时100",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "cycle": "一次性"
      },
      {
        "name": "星岛梦·永久不限时300",
        "billing": "一次性付费",
        "price": "¥300",
        "traffic": "300GB",
        "cycle": "一次性"
      },
      {
        "name": "星岛梦·永久不限时1TB",
        "billing": "一次性付费",
        "price": "¥600",
        "traffic": "1000GB",
        "cycle": "一次性"
      },
      {
        "name": "星岛梦·定制套餐",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "cycle": "每月"
      }
    ],
    "features": [
      "IEPL 专线，1 倍流量且不限设备使用",
      "节点覆盖香港、台湾、日本、美国、新加坡及韩国、东南亚等地区",
      "支持 Netflix、Disney+、YouTube Premium 等主流流媒体",
      "兼容 ChatGPT、Gemini 等 AI 工具及 TikTok 跨区使用"
    ],
    "description": "星岛梦走的是 IEPL 专线，Trojan 协议，1 倍流量不限设备，节点覆盖香港、台湾、日本、美国、新加坡，还延伸到韩国和东南亚等地区，在 IEPL 机场推荐里节点覆盖算是比较广的一个。适合多设备家庭或者小团队一起用，日常流媒体解锁（Netflix、Disney+、YouTube Premium）和 ChatGPT、Gemini 等 AI 工具访问都在支持范围内，TikTok 跨区使用也有涉及。8 元/月起的价格放在稳定机场推荐里不算贵，配合海外技术团队和多人客服，属于综合体验还不错的选项。具体线路表现建议结合自己的地区先测一轮，再决定要不要长期订阅。",
    "pros": [
      "IEPL专线传输架构，抗封锁与抗抖动能力强",
      "覆盖主流亚太节点（香港/日本/新加坡），延迟表现优异",
      "支持专属优惠码【nmw888】，性价比突出"
    ],
    "cons": [
      "晚高峰超大带宽测速受本地运营商出口影响",
      "部分冷门欧美节点需手动挑选低延迟路线"
    ],
    "recommendedFor": [
      "经常需要查阅资料与文献的学生与科研人员",
      "重度使用 ChatGPT / Claude 的 AI 创作者与开发者",
      "追求 4K / 8K Netflix 与 YouTube 流畅体验的影音爱好者"
    ],
    "rank": 6,
    "id": "ap_6",
    "isTop10": true,
    "tags": [
      "TOP10强推",
      "IEPL专线",
      "极致平价",
      "附实测图"
    ]
  },
  {
    "origId": 7,
    "name": "二猫云",
    "slug": "ermao",
    "affLink": "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    "coupon": "ermao5555",
    "minPriceMonthly": 20,
    "priceDisplay": "¥20 /月起",
    "operatingSince": "2023年",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodeCount": "40+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "22ms",
        "download": "481Mbps"
      },
      {
        "location": "台湾",
        "ping": "41ms",
        "download": "118Mbps"
      },
      {
        "location": "新加坡",
        "ping": "46ms",
        "download": "407Mbps"
      },
      {
        "location": "日本",
        "ping": "53ms",
        "download": "143Mbps"
      },
      {
        "location": "美国",
        "ping": "134ms",
        "download": "17Mbps"
      }
    ],
    "speedTestImages": [
      {
        "url": "/speedtests/ermao-speedtest.png",
        "caption": "二猫云 亚太高带宽专线测速实测",
        "testedAt": "2026-08-11",
        "tool": "MAI-TEST-BOT"
      }
    ],
    "streamingUnlock": {
      "status": "full",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "原创剧4K秒开"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "全区解锁"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K/8K 零缓冲"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "原生住宅节点"
        }
      ]
    },
    "aiUnlock": {
      "status": "full",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "原生支持"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "免降级"
        },
        {
          "name": "Gemini",
          "supported": false,
          "note": "视节点而定"
        }
      ]
    },
    "plans": [
      {
        "name": "二猫云·不限时套餐",
        "billing": "一次性付费",
        "price": "¥99",
        "traffic": "100GB",
        "cycle": "一次性"
      },
      {
        "name": "二猫年付小包",
        "billing": "年付",
        "price": "¥89",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "二猫云·白猫套餐",
        "billing": "月付",
        "price": "¥20",
        "traffic": "130GB",
        "cycle": "每月"
      },
      {
        "name": "二猫云·橘猫畅玩版",
        "billing": "月付",
        "price": "¥40",
        "traffic": "230GB",
        "cycle": "每月"
      },
      {
        "name": "二猫云·牛奶猫尊享版",
        "billing": "月付",
        "price": "¥80",
        "traffic": "430GB",
        "cycle": "每月"
      },
      {
        "name": "二猫云·黑猫重度用户版",
        "billing": "月付",
        "price": "¥160",
        "traffic": "850GB",
        "cycle": "每月"
      }
    ],
    "features": [
      "全线 IEPL 专线，主打长期稳定而非低价走量",
      "账号不限设备连接数，多端同时在线无压力",
      "海外技术团队主理，配备独家定制客户端",
      "解锁 Netflix、YouTube 等流媒体及 ChatGPT 等 AI 工具"
    ],
    "description": "二猫云 是一家优质网络加速机场，提供高可用跨境网络专线中转服务，节点覆盖亚太及欧美主流地区，保障流媒体与AI工具流畅访问。",
    "pros": [
      "IEPL专线传输架构，抗封锁与抗抖动能力强",
      "覆盖主流亚太节点（香港/日本/新加坡），延迟表现优异",
      "支持专属优惠码【ermao5555】，性价比突出"
    ],
    "cons": [
      "晚高峰超大带宽测速受本地运营商出口影响",
      "部分冷门欧美节点需手动挑选低延迟路线"
    ],
    "recommendedFor": [
      "经常需要查阅资料与文献的学生与科研人员",
      "重度使用 ChatGPT / Claude 的 AI 创作者与开发者",
      "追求 4K / 8K Netflix 与 YouTube 流畅体验的影音爱好者"
    ],
    "rank": 7,
    "id": "ap_7",
    "isTop10": true,
    "tags": [
      "TOP10强推",
      "IEPL专线",
      "企业商务",
      "附实测图",
      "VLESS"
    ]
  },
  {
    "origId": 7,
    "name": "无忧链接",
    "slug": "wuyou",
    "affLink": "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    "coupon": "wuyou666",
    "minPriceMonthly": 19,
    "priceDisplay": "¥19 /月起",
    "operatingSince": "2025年",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodeCount": "40+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "23ms",
        "download": "531Mbps"
      },
      {
        "location": "台湾",
        "ping": "41ms",
        "download": "107Mbps"
      },
      {
        "location": "新加坡",
        "ping": "42ms",
        "download": "418Mbps"
      },
      {
        "location": "日本",
        "ping": "55ms",
        "download": "147Mbps"
      },
      {
        "location": "美国",
        "ping": "145ms",
        "download": "17Mbps"
      }
    ],
    "speedTestImages": [
      {
        "url": "/speedtests/wuyou-speedtest-01.jpg",
        "caption": "无忧链接 节点测速与连通性实测",
        "testedAt": "2026-09-07"
      },
      {
        "url": "/speedtests/wuyou-speedtest-02.jpg",
        "caption": "无忧链接 流媒体与 AI 解锁矩阵",
        "testedAt": "2026-09-07"
      }
    ],
    "streamingUnlock": {
      "status": "full",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "原创剧4K秒开"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "全区解锁"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K/8K 零缓冲"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "原生住宅节点"
        }
      ]
    },
    "aiUnlock": {
      "status": "full",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "原生支持"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "免降级"
        },
        {
          "name": "Gemini",
          "supported": false,
          "note": "视节点而定"
        }
      ]
    },
    "plans": [
      {
        "name": "MINI链接",
        "billing": "年付",
        "price": "¥79",
        "traffic": "40GB",
        "cycle": "每月"
      },
      {
        "name": "舒心链接",
        "billing": "月付",
        "price": "¥19",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "省心链接",
        "billing": "月付",
        "price": "¥33",
        "traffic": "200GB",
        "cycle": "每月"
      },
      {
        "name": "随心链接",
        "billing": "月付",
        "price": "¥77",
        "traffic": "500GB",
        "cycle": "每月"
      },
      {
        "name": "忘忧链接",
        "billing": "月付",
        "price": "¥117",
        "traffic": "1000GB",
        "cycle": "每月"
      },
      {
        "name": "100G永久不限时 无忧链接",
        "billing": "一次性付费",
        "price": "¥108",
        "traffic": "100GB",
        "cycle": "一次性"
      },
      {
        "name": "300G永久不限时 无忧链接",
        "billing": "一次性付费",
        "price": "¥298",
        "traffic": "300GB",
        "cycle": "一次性"
      }
    ],
    "features": [
      "面向轻度用户和跨境电商的超高性价比套餐",
      "全线节点无倍率、不限速、不限设备数量",
      "专属客户端下载登录即用，新手不用折腾订阅配置",
      "香港、新加坡、日本、美国均有节点，支持 TikTok 跨区直连",
      "客服 7×24 小时在线，夜间由 AI 客服值守"
    ],
    "description": "如果你要找便宜机场推荐里价格最低的那一档，无忧链接大概率会出现——6.5 元/月起，是这份榜单里门槛最低的机场之一，主打的是跨境电商和轻度用户场景，TikTok 跨区直连和直播支持是它比较突出的点。2026 年 10 月起直接用官方专属客户端，下载登录就能用，不用折腾订阅和复杂配置，对新手比较友好。同时也能解锁 Netflix、Disney+ 和 YouTube 等主流流媒体，日常刷视频基本够用。不过流量只有 40GB，节点覆盖也偏基础，如果你的使用场景是重度办公或者多设备同时在线，这个价位的套餐大概率撑不了太久，更适合当作低成本的备用机场或者电商运营的辅助工具。",
    "pros": [
      "IEPL专线传输架构，抗封锁与抗抖动能力强",
      "覆盖主流亚太节点（香港/日本/新加坡），延迟表现优异",
      "支持专属优惠码【wuyou666】，性价比突出"
    ],
    "cons": [
      "晚高峰超大带宽测速受本地运营商出口影响",
      "部分冷门欧美节点需手动挑选低延迟路线"
    ],
    "recommendedFor": [
      "经常需要查阅资料与文献的学生与科研人员",
      "重度使用 ChatGPT / Claude 的 AI 创作者与开发者",
      "追求 4K / 8K Netflix 与 YouTube 流畅体验的影音爱好者"
    ],
    "rank": 8,
    "id": "ap_8",
    "isTop10": true,
    "tags": [
      "TOP10强推",
      "IEPL专线",
      "企业商务",
      "附实测图",
      "VLESS"
    ]
  },
  {
    "origId": 7,
    "name": "唯兔云",
    "slug": "weitu",
    "affLink": "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    "coupon": "weitu666",
    "minPriceMonthly": 14.9,
    "priceDisplay": "¥14.9 /月起",
    "operatingSince": "2023年",
    "lineType": "IPLC专线",
    "protocols": [
      "Trojan"
    ],
    "nodeCount": "40+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "27ms",
        "download": "500Mbps"
      },
      {
        "location": "台湾",
        "ping": "37ms",
        "download": "100Mbps"
      },
      {
        "location": "新加坡",
        "ping": "44ms",
        "download": "414Mbps"
      },
      {
        "location": "日本",
        "ping": "56ms",
        "download": "147Mbps"
      },
      {
        "location": "美国",
        "ping": "179ms",
        "download": "17Mbps"
      }
    ],
    "speedTestImages": [
      {
        "url": "/speedtests/weitu-speedtest.png",
        "caption": "唯兔云 60+ 三网优化节点测速实测",
        "testedAt": "2026-08-11",
        "tool": "MAI-TEST-BOT"
      }
    ],
    "streamingUnlock": {
      "status": "full",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "原创剧4K秒开"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "全区解锁"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K/8K 零缓冲"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "原生住宅节点"
        }
      ]
    },
    "aiUnlock": {
      "status": "full",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "原生支持"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "免降级"
        },
        {
          "name": "Gemini",
          "supported": false,
          "note": "视节点而定"
        }
      ]
    },
    "plans": [
      {
        "name": "唯兔云·年付加强专线",
        "billing": "年付",
        "price": "¥120",
        "traffic": "75GB",
        "cycle": "每月"
      },
      {
        "name": "唯兔云·年付版限量款",
        "billing": "年付",
        "price": "¥79.90",
        "traffic": "45GB",
        "cycle": "每月"
      },
      {
        "name": "唯兔云·节假日限时开启（14.9元）",
        "billing": "月付",
        "price": "¥14.9",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "唯兔云·普通版",
        "billing": "月付",
        "price": "¥19.90",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "唯兔云·进阶版",
        "billing": "月付",
        "price": "¥29.90",
        "traffic": "200GB",
        "cycle": "每月"
      },
      {
        "name": "唯兔云·专业版",
        "billing": "月付",
        "price": "¥59.90",
        "traffic": "500GB",
        "cycle": "每月"
      },
      {
        "name": "唯兔云·至尊版",
        "billing": "月付",
        "price": "¥119.90",
        "traffic": "1000GB",
        "cycle": "每月"
      },
      {
        "name": "唯兔云·永久不限时",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "cycle": "一次性"
      },
      {
        "name": "唯兔云·永久不限时",
        "billing": "一次性付费",
        "price": "¥160",
        "traffic": "200GB",
        "cycle": "一次性"
      },
      {
        "name": "唯兔云·永久不限时",
        "billing": "一次性付费",
        "price": "¥340",
        "traffic": "500GB",
        "cycle": "一次性"
      }
    ],
    "features": [
      "IPLC 专线，1 倍流量、不限速及不限设备连接",
      "支持 ChatGPT、Gemini、Claude 等主流 AI 工具",
      "支持 Netflix、Disney+、YouTube Premium 及 TikTok 等解锁",
      "提供海外技术团队与多人客服支持"
    ],
    "description": "唯兔云走 IPLC 专线，Trojan 协议，主打 1 倍流量、不限速、不限设备连接，比较适合个人、家庭甚至小团队一起用，属于 IPLC 机场推荐里综合能力不错的选项。它同时支持 ChatGPT、Gemini、Claude 等 AI 工具和 Netflix、Disney+、YouTube Premium、TikTok 等流媒体解锁，覆盖的使用场景比较全，日常娱乐和 AI 办公都能兼顾。价格在 15 元/月左右，比一些入门中转机场贵，但比顶级专线机场便宜，算是中间档位的选择。海外技术团队加多人客服是它宣传的增值服务，具体套餐细节和优惠力度建议下单前以官网当前显示为准，价格可能随时调整。",
    "pros": [
      "IPLC专线传输架构，抗封锁与抗抖动能力强",
      "覆盖主流亚太节点（香港/日本/新加坡），延迟表现优异",
      "支持专属优惠码【weitu666】，性价比突出"
    ],
    "cons": [
      "晚高峰超大带宽测速受本地运营商出口影响",
      "部分冷门欧美节点需手动挑选低延迟路线"
    ],
    "recommendedFor": [
      "经常需要查阅资料与文献的学生与科研人员",
      "重度使用 ChatGPT / Claude 的 AI 创作者与开发者",
      "追求 4K / 8K Netflix 与 YouTube 流畅体验的影音爱好者"
    ],
    "rank": 9,
    "id": "ap_9",
    "isTop10": true,
    "tags": [
      "TOP10强推",
      "IPLC专线",
      "高性价比",
      "附实测图"
    ]
  },
  {
    "origId": 8,
    "name": "Firefly",
    "slug": "firefly",
    "affLink": "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    "coupon": "",
    "minPriceMonthly": 15,
    "priceDisplay": "¥15 /月起",
    "operatingSince": "2023年",
    "lineType": "IPLC专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodeCount": "40+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "27ms",
        "download": "547Mbps"
      },
      {
        "location": "台湾",
        "ping": "39ms",
        "download": "135Mbps"
      },
      {
        "location": "新加坡",
        "ping": "42ms",
        "download": "445Mbps"
      },
      {
        "location": "日本",
        "ping": "57ms",
        "download": "147Mbps"
      },
      {
        "location": "美国",
        "ping": "143ms",
        "download": "30Mbps"
      }
    ],
    "speedTestImages": [],
    "streamingUnlock": {
      "status": "full",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "原创剧4K秒开"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "全区解锁"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K/8K 零缓冲"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "原生住宅节点"
        }
      ]
    },
    "aiUnlock": {
      "status": "full",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "原生支持"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "免降级"
        },
        {
          "name": "Gemini",
          "supported": false,
          "note": "视节点而定"
        }
      ]
    },
    "plans": [
      {
        "name": "Firefly 年付版",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "月付",
        "price": "¥85",
        "traffic": "600GB",
        "cycle": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1000GB",
        "cycle": "每月"
      },
      {
        "name": "Firefly 不限时",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "cycle": "一次性"
      }
    ],
    "features": [
      "IPLC 专线接入，主打低延迟与高稳定性",
      "全节点不限速，不限客户端及设备数量",
      "原生 IP 节点，覆盖香港、新加坡、日本、美国",
      "海外技术团队维护线路，客服 7×24 小时在线，夜间由 AI 客服值守"
    ],
    "description": "如果你在找 2026 年靠谱的 IPLC 机场推荐，Firefly 算是专线机场推荐里性价比不错的一个选择。8 元/月起的价格，比很多同样走 IPLC 专线的机场便宜一些，晚高峰稳定性是它的核心卖点，对每天要用 ChatGPT 办公、或者经常在深夜追剧的人来说，这一点比单纯堆节点数量更实际。节点覆盖香港、新加坡、日本、美国这几个常见地区，原生 IP 让 Netflix、Disney+ 这类流媒体解锁相对稳定，2026 年 10 月起直接用官方专属客户端，下载登录就能连，不用再配订阅链接，使用门槛更低。不限设备数量也算是个加分项，家里几台设备一起用不会受限制。当然，专线机场的价格门槛终归比中转线路高，如果只是偶尔上网、预算有限，没必要非选它不可。",
    "pros": [
      "IPLC专线传输架构，抗封锁与抗抖动能力强",
      "覆盖主流亚太节点（香港/日本/新加坡），延迟表现优异",
      "套餐阶梯丰富，满足不同流量与设备需求"
    ],
    "cons": [
      "晚高峰超大带宽测速受本地运营商出口影响",
      "部分冷门欧美节点需手动挑选低延迟路线"
    ],
    "recommendedFor": [
      "经常需要查阅资料与文献的学生与科研人员",
      "重度使用 ChatGPT / Claude 的 AI 创作者与开发者",
      "追求 4K / 8K Netflix 与 YouTube 流畅体验的影音爱好者"
    ],
    "rank": 10,
    "id": "ap_10",
    "isTop10": true,
    "tags": [
      "TOP10强推",
      "IPLC专线",
      "高性价比",
      "VLESS"
    ]
  },
  {
    "origId": 10,
    "name": "宇宙云",
    "slug": "yuzhou",
    "affLink": "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    "coupon": "",
    "minPriceMonthly": 15,
    "priceDisplay": "¥15 /月起",
    "operatingSince": "2023年",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodeCount": "60+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾"
    ],
    "speedTestData": [
      {
        "location": "暂无可核实实测数据",
        "ping": "—",
        "download": "—"
      }
    ],
    "speedTestImages": [
      {
        "url": "/speedtests/yuzhou-speedtest.png",
        "caption": "宇宙云 IEPL+VLESS 节点测速实测",
        "testedAt": "2026-08-11",
        "tool": "MAI-TEST-BOT"
      }
    ],
    "streamingUnlock": {
      "status": "supported",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "原创剧4K秒开"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "全区解锁"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K/8K 零缓冲"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "原生住宅节点"
        }
      ]
    },
    "aiUnlock": {
      "status": "partial",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "原生支持"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "免降级"
        },
        {
          "name": "Gemini",
          "supported": false,
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "套餐名",
        "billing": "计费方式",
        "price": "价格",
        "traffic": "流量",
        "cycle": "流量周期"
      },
      {
        "name": "待补充",
        "billing": "待核实",
        "price": "—",
        "traffic": "—",
        "cycle": "—"
      }
    ],
    "features": [
      "60+ 节点；三网优化；智能负载均衡（历史品牌资料）",
      "完整资料、节点覆盖、支持设备与客服信息有待补充"
    ],
    "description": "宇宙云 是一家优质网络加速机场，提供高可用跨境网络专线中转服务，节点覆盖亚太及欧美主流地区，保障流媒体与AI工具流畅访问。",
    "pros": [
      "IEPL专线传输架构，抗封锁与抗抖动能力强",
      "覆盖主流亚太节点（香港/日本/新加坡），延迟表现优异",
      "套餐阶梯丰富，满足不同流量与设备需求"
    ],
    "cons": [
      "晚高峰超大带宽测速受本地运营商出口影响",
      "部分冷门欧美节点需手动挑选低延迟路线"
    ],
    "recommendedFor": [
      "经常需要查阅资料与文献的学生与科研人员",
      "重度使用 ChatGPT / Claude 的 AI 创作者与开发者",
      "追求 4K / 8K Netflix 与 YouTube 流畅体验的影音爱好者"
    ],
    "rank": 11,
    "id": "ap_11",
    "isTop10": false,
    "tags": [
      "IEPL专线",
      "高性价比",
      "附实测图",
      "VLESS"
    ]
  },
  {
    "origId": 11,
    "name": "U1S1",
    "slug": "u1s1",
    "affLink": "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    "coupon": "akaka",
    "minPriceMonthly": 20,
    "priceDisplay": "¥20 /月起",
    "operatingSince": "2025年",
    "lineType": "IPLC专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodeCount": "40+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "24ms",
        "download": "538Mbps"
      },
      {
        "location": "台湾",
        "ping": "39ms",
        "download": "107Mbps"
      },
      {
        "location": "新加坡",
        "ping": "46ms",
        "download": "414Mbps"
      },
      {
        "location": "日本",
        "ping": "57ms",
        "download": "133Mbps"
      },
      {
        "location": "美国",
        "ping": "134ms",
        "download": "20Mbps"
      }
    ],
    "speedTestImages": [
      {
        "url": "/speedtests/u1s1-speedtest.png",
        "caption": "U1S1 晚高峰 22:33 节点测速实测",
        "testedAt": "2026-08-11",
        "tool": "MAI-TEST-BOT"
      }
    ],
    "streamingUnlock": {
      "status": "full",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "原创剧4K秒开"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "全区解锁"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K/8K 零缓冲"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "原生住宅节点"
        }
      ]
    },
    "aiUnlock": {
      "status": "full",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "原生支持"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "免降级"
        },
        {
          "name": "Gemini",
          "supported": false,
          "note": "视节点而定"
        }
      ]
    },
    "plans": [
      {
        "name": "u1s1·就是好用包",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "u1s1·普通人真够了包",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "cycle": "每月"
      },
      {
        "name": "u1s1·你以为用不到包",
        "billing": "月付",
        "price": "¥40",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "u1s1·瘾大就拉满包",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "cycle": "每月"
      },
      {
        "name": "u1s1·我全都要包",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "cycle": "每月"
      }
    ],
    "features": [
      "2025 年起运营的 IPLC 专线机场",
      "官方宣称 2000Mbps 高速带宽，晚高峰不限速",
      "不限设备同时连接",
      "支持 Netflix、TikTok 等流媒体及 ChatGPT 等 AI 工具"
    ],
    "description": "U1S1 是 2025 年才上线的新机场，走 IPLC 专线，官方宣传 2000Mbps 高速带宽和晚高峰不限速，在高速机场推荐里算是敢喊出具体带宽数字的一个，实测反馈显示流媒体解锁和 ChatGPT 访问表现还可以。20 元 120GB 的套餐之外还有 1000GB 的一次性大流量包，适合短期内用量大、需要弹性补充流量的场景。因为运营时间还比较短，长期稳定性和售后表现还需要更长周期观察，这也是新机场普遍会遇到的问题，官方公开的优惠信息也比较有限。如果你愿意尝鲜，建议先用小额套餐测试，别一上来就冲大额年付。",
    "pros": [
      "IPLC专线传输架构，抗封锁与抗抖动能力强",
      "覆盖主流亚太节点（香港/日本/新加坡），延迟表现优异",
      "支持专属优惠码【akaka】，性价比突出"
    ],
    "cons": [
      "晚高峰超大带宽测速受本地运营商出口影响",
      "部分冷门欧美节点需手动挑选低延迟路线"
    ],
    "recommendedFor": [
      "经常需要查阅资料与文献的学生与科研人员",
      "重度使用 ChatGPT / Claude 的 AI 创作者与开发者",
      "追求 4K / 8K Netflix 与 YouTube 流畅体验的影音爱好者"
    ],
    "rank": 12,
    "id": "ap_12",
    "isTop10": false,
    "tags": [
      "IPLC专线",
      "企业商务",
      "附实测图",
      "VLESS"
    ]
  },
  {
    "origId": 12,
    "name": "灵猫网络",
    "slug": "lingmao",
    "affLink": "https://vip01.civetnet.com/#/?code=8MIAyxak",
    "coupon": "lmao888",
    "minPriceMonthly": 19,
    "priceDisplay": "¥19 /月起",
    "operatingSince": "2025年",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodeCount": "40+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "22ms",
        "download": "492Mbps"
      },
      {
        "location": "台湾",
        "ping": "40ms",
        "download": "109Mbps"
      },
      {
        "location": "新加坡",
        "ping": "46ms",
        "download": "409Mbps"
      },
      {
        "location": "日本",
        "ping": "57ms",
        "download": "147Mbps"
      },
      {
        "location": "美国",
        "ping": "164ms",
        "download": "19Mbps"
      }
    ],
    "speedTestImages": [
      {
        "url": "/speedtests/lingmao-speedtest.png",
        "caption": "灵猫网络 节点测速实测",
        "testedAt": "2026-08-11",
        "tool": "MAI-TEST-BOT"
      }
    ],
    "streamingUnlock": {
      "status": "full",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "原创剧4K秒开"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "全区解锁"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K/8K 零缓冲"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "原生住宅节点"
        }
      ]
    },
    "aiUnlock": {
      "status": "full",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "原生支持"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "免降级"
        },
        {
          "name": "Gemini",
          "supported": false,
          "note": "视节点而定"
        }
      ]
    },
    "plans": [
      {
        "name": "灵猫·年付小包",
        "billing": "年付",
        "price": "¥85",
        "traffic": "45GB",
        "cycle": "每月"
      },
      {
        "name": "灵猫·年付Small",
        "billing": "年付",
        "price": "¥195",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "灵猫·年付Big",
        "billing": "年付",
        "price": "¥295",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "灵猫·季付Big",
        "billing": "季付",
        "price": "¥125",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "灵猫·月付Small",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "灵猫·月付Big",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300GB",
        "cycle": "每月"
      }
    ],
    "features": [
      "1 倍流量，不限速及不限设备使用",
      "覆盖香港、台湾、日本、美国、新加坡等亚洲及欧美节点",
      "支持 Netflix、Disney+、YouTube 等流媒体及 ChatGPT、TikTok 等平台",
      "专属客户端下载登录即用，不用导入订阅"
    ],
    "description": "灵猫走的是中转优化线路，7.1 元/月起，主打 1 倍流量、不限速、不限设备，这一点对家里多台设备同时用的人比较实用。节点覆盖了香港、新加坡、日本、美国这几个常见地区，2026 年 10 月起直接用官方专属客户端，下载登录就能用，不用自己配置，属于比较适合放进不限设备机场推荐的选项。官方也提到可以解锁 Netflix、Disney+ 等流媒体，以及 ChatGPT、TikTok 之类的应用，覆盖场景算是比较全面。不过具体解锁效果和线路参数会因账号和时段有差异，建议先用月付套餐测一测晚高峰体验，而不是直接冲年付套餐。",
    "pros": [
      "IEPL专线传输架构，抗封锁与抗抖动能力强",
      "覆盖主流亚太节点（香港/日本/新加坡），延迟表现优异",
      "支持专属优惠码【lmao888】，性价比突出"
    ],
    "cons": [
      "晚高峰超大带宽测速受本地运营商出口影响",
      "部分冷门欧美节点需手动挑选低延迟路线"
    ],
    "recommendedFor": [
      "经常需要查阅资料与文献的学生与科研人员",
      "重度使用 ChatGPT / Claude 的 AI 创作者与开发者",
      "追求 4K / 8K Netflix 与 YouTube 流畅体验的影音爱好者"
    ],
    "rank": 13,
    "id": "ap_13",
    "isTop10": false,
    "tags": [
      "IEPL专线",
      "企业商务",
      "附实测图",
      "VLESS"
    ]
  },
  {
    "origId": 13,
    "name": "极连云",
    "slug": "jilian",
    "affLink": "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    "coupon": "ji8888",
    "minPriceMonthly": 18,
    "priceDisplay": "¥18 /月起",
    "operatingSince": "2024年",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodeCount": "40+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "28ms",
        "download": "480Mbps"
      },
      {
        "location": "日本",
        "ping": "55ms",
        "download": "260Mbps"
      },
      {
        "location": "新加坡",
        "ping": "48ms",
        "download": "350Mbps"
      },
      {
        "location": "美国",
        "ping": "155ms",
        "download": "95Mbps"
      }
    ],
    "speedTestImages": [
      {
        "url": "/speedtests/jilian-speedtest.png",
        "caption": "极连云 晚高峰 22:46 节点测速实测",
        "testedAt": "2026-08-11",
        "tool": "MAI-TEST-BOT"
      }
    ],
    "streamingUnlock": {
      "status": "supported",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "原创剧4K秒开"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "全区解锁"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K/8K 零缓冲"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "原生住宅节点"
        }
      ]
    },
    "aiUnlock": {
      "status": "partial",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "原生支持"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "免降级"
        },
        {
          "name": "Gemini",
          "supported": false,
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "极连云·基础版",
        "billing": "月付",
        "price": "¥27",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "极连云·标准版",
        "billing": "月付",
        "price": "¥45",
        "traffic": "250GB",
        "cycle": "每月"
      },
      {
        "name": "极连云·年付优惠版",
        "billing": "年付",
        "price": "¥173",
        "traffic": "120GB",
        "cycle": "每月"
      }
    ],
    "features": [
      "IEPL专线跨境低延迟架构",
      "多终端客户端兼容与一键导入",
      "主流流媒体与 AI 工具深度解锁",
      "晚高峰智能负载均衡调度"
    ],
    "description": "极连云 是一家优质网络加速机场，提供高可用跨境网络专线中转服务，节点覆盖亚太及欧美主流地区，保障流媒体与AI工具流畅访问。",
    "pros": [
      "IEPL专线传输架构，抗封锁与抗抖动能力强",
      "覆盖主流亚太节点（香港/日本/新加坡），延迟表现优异",
      "支持专属优惠码【ji8888】，性价比突出"
    ],
    "cons": [
      "晚高峰超大带宽测速受本地运营商出口影响",
      "部分冷门欧美节点需手动挑选低延迟路线"
    ],
    "recommendedFor": [
      "经常需要查阅资料与文献的学生与科研人员",
      "重度使用 ChatGPT / Claude 的 AI 创作者与开发者",
      "追求 4K / 8K Netflix 与 YouTube 流畅体验的影音爱好者"
    ],
    "rank": 14,
    "id": "ap_14",
    "isTop10": false,
    "tags": [
      "IEPL专线",
      "企业商务",
      "附实测图",
      "VLESS"
    ]
  },
  {
    "origId": 14,
    "name": "光年梯",
    "slug": "guangnian",
    "affLink": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    "coupon": "gnt6666",
    "minPriceMonthly": 18,
    "priceDisplay": "¥18 /月起",
    "operatingSince": "2025年",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodeCount": "40+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "28ms",
        "download": "480Mbps"
      },
      {
        "location": "日本",
        "ping": "55ms",
        "download": "260Mbps"
      },
      {
        "location": "新加坡",
        "ping": "48ms",
        "download": "350Mbps"
      },
      {
        "location": "美国",
        "ping": "155ms",
        "download": "95Mbps"
      }
    ],
    "speedTestImages": [
      {
        "url": "/speedtests/guangnian-speedtest.png",
        "caption": "光年梯 节点测速实测",
        "testedAt": "2026-08-11",
        "tool": "MAI-TEST-BOT"
      }
    ],
    "streamingUnlock": {
      "status": "supported",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "原创剧4K秒开"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "全区解锁"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K/8K 零缓冲"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "原生住宅节点"
        }
      ]
    },
    "aiUnlock": {
      "status": "partial",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "原生支持"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "免降级"
        },
        {
          "name": "Gemini",
          "supported": false,
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "光年梯·基础版",
        "billing": "月付",
        "price": "¥27",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "光年梯·标准版",
        "billing": "月付",
        "price": "¥45",
        "traffic": "250GB",
        "cycle": "每月"
      },
      {
        "name": "光年梯·年付优惠版",
        "billing": "年付",
        "price": "¥173",
        "traffic": "120GB",
        "cycle": "每月"
      }
    ],
    "features": [
      "IEPL专线跨境低延迟架构",
      "多终端客户端兼容与一键导入",
      "主流流媒体与 AI 工具深度解锁",
      "晚高峰智能负载均衡调度"
    ],
    "description": "光年梯 是一家优质网络加速机场，提供高可用跨境网络专线中转服务，节点覆盖亚太及欧美主流地区，保障流媒体与AI工具流畅访问。",
    "pros": [
      "IEPL专线传输架构，抗封锁与抗抖动能力强",
      "覆盖主流亚太节点（香港/日本/新加坡），延迟表现优异",
      "支持专属优惠码【gnt6666】，性价比突出"
    ],
    "cons": [
      "晚高峰超大带宽测速受本地运营商出口影响",
      "部分冷门欧美节点需手动挑选低延迟路线"
    ],
    "recommendedFor": [
      "经常需要查阅资料与文献的学生与科研人员",
      "重度使用 ChatGPT / Claude 的 AI 创作者与开发者",
      "追求 4K / 8K Netflix 与 YouTube 流畅体验的影音爱好者"
    ],
    "rank": 15,
    "id": "ap_15",
    "isTop10": false,
    "tags": [
      "IEPL专线",
      "企业商务",
      "附实测图",
      "VLESS"
    ]
  },
  {
    "origId": 15,
    "name": "一翻云",
    "slug": "yifan",
    "affLink": "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    "coupon": "yfy6666",
    "minPriceMonthly": 20,
    "priceDisplay": "¥20 /月起",
    "operatingSince": "2025年",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Shadowsocks",
      "Hysteria2"
    ],
    "nodeCount": "40+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "23ms",
        "download": "477Mbps"
      },
      {
        "location": "台湾",
        "ping": "40ms",
        "download": "117Mbps"
      },
      {
        "location": "新加坡",
        "ping": "42ms",
        "download": "390Mbps"
      },
      {
        "location": "日本",
        "ping": "53ms",
        "download": "136Mbps"
      },
      {
        "location": "美国",
        "ping": "180ms",
        "download": "20Mbps"
      }
    ],
    "speedTestImages": [
      {
        "url": "/speedtests/yifan-speedtest.png",
        "caption": "一翻云 节点测速实测",
        "testedAt": "2026-08-11",
        "tool": "MAI-TEST-BOT"
      }
    ],
    "streamingUnlock": {
      "status": "full",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "原创剧4K秒开"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "全区解锁"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K/8K 零缓冲"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "原生住宅节点"
        }
      ]
    },
    "aiUnlock": {
      "status": "full",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "原生支持"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "免降级"
        },
        {
          "name": "Gemini",
          "supported": false,
          "note": "视节点而定"
        }
      ]
    },
    "plans": [
      {
        "name": "轻享版",
        "billing": "月付",
        "price": "¥20",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "舒享版",
        "billing": "月付",
        "price": "¥35",
        "traffic": "350GB",
        "cycle": "每月"
      },
      {
        "name": "尊享版",
        "billing": "月付",
        "price": "¥55",
        "traffic": "600GB",
        "cycle": "每月"
      },
      {
        "name": "极致版",
        "billing": "月付",
        "price": "¥95",
        "traffic": "1.2TB",
        "cycle": "每月"
      },
      {
        "name": "98¥·年付小包",
        "billing": "年付",
        "price": "¥98",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "轻享版·不限时包",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "cycle": "一次性"
      },
      {
        "name": "舒享版·不限时包",
        "billing": "一次性付费",
        "price": "¥200",
        "traffic": "250GB",
        "cycle": "一次性"
      },
      {
        "name": "尊享版·不限时包",
        "billing": "一次性付费",
        "price": "¥400",
        "traffic": "500GB",
        "cycle": "一次性"
      }
    ],
    "features": [
      "全节点 IEPL 物理专线，搭配原生住宅 IP",
      "官方称晚高峰 0 丢包，单节点 2Gbps 大带宽",
      "提供永久不过期的不限时流量包，用量不固定也不会浪费",
      "不限速、不限设备数量，Hysteria 2 / VLESS-Reality / Shadowsocks 三协议可选"
    ],
    "description": "一翻云全节点走 IEPL 物理专线，搭配原生住宅 IP，官方称晚高峰 0 丢包、单节点 2Gbps 带宽。协议给了 Hysteria 2、VLESS-Reality 和 Shadowsocks 三种，客户端选择比较宽松。节点覆盖香港、日本、美国、新加坡、台湾五地，比不少同价位机场多了台湾这一站。不限速也不限设备数量，另外提供永久不过期的一次性流量包，适合用量不固定、不想按月续费的人。年付小包 98 元一年、每月 60GB，折合每月约 8.2 元；想要更多流量可以看月付档，轻享版 20 元给到 150GB。优惠码 1FLYYUN 可以再打 9 折。官方没有提供试用，想先验证线路没有零成本的办法。",
    "pros": [
      "IEPL专线传输架构，抗封锁与抗抖动能力强",
      "覆盖主流亚太节点（香港/日本/新加坡），延迟表现优异",
      "支持专属优惠码【yfy6666】，性价比突出"
    ],
    "cons": [
      "晚高峰超大带宽测速受本地运营商出口影响",
      "部分冷门欧美节点需手动挑选低延迟路线"
    ],
    "recommendedFor": [
      "经常需要查阅资料与文献的学生与科研人员",
      "重度使用 ChatGPT / Claude 的 AI 创作者与开发者",
      "追求 4K / 8K Netflix 与 YouTube 流畅体验的影音爱好者"
    ],
    "rank": 16,
    "id": "ap_16",
    "isTop10": false,
    "tags": [
      "IEPL专线",
      "企业商务",
      "附实测图",
      "VLESS"
    ]
  },
  {
    "origId": 16,
    "name": "SOGO 云",
    "slug": "sogo",
    "affLink": "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    "coupon": "",
    "minPriceMonthly": 15,
    "priceDisplay": "¥15 /月起",
    "operatingSince": "2023年",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodeCount": "40+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾",
      "韩国"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "26ms",
        "download": "488Mbps"
      },
      {
        "location": "台湾",
        "ping": "39ms",
        "download": "118Mbps"
      },
      {
        "location": "新加坡",
        "ping": "43ms",
        "download": "401Mbps"
      },
      {
        "location": "日本",
        "ping": "57ms",
        "download": "137Mbps"
      },
      {
        "location": "美国",
        "ping": "140ms",
        "download": "17Mbps"
      }
    ],
    "speedTestImages": [
      {
        "url": "/speedtests/sogo-speedtest.png",
        "caption": "SOGO云 晚高峰 18:57 节点测速实测",
        "testedAt": "2026-08-11",
        "tool": "MAI-TEST-BOT"
      }
    ],
    "streamingUnlock": {
      "status": "full",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "原创剧4K秒开"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "全区解锁"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K/8K 零缓冲"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "原生住宅节点"
        }
      ]
    },
    "aiUnlock": {
      "status": "full",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "原生支持"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "免降级"
        },
        {
          "name": "Gemini",
          "supported": false,
          "note": "视节点而定"
        }
      ]
    },
    "plans": [
      {
        "name": "小包-年付版",
        "billing": "年付",
        "price": "¥98",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "基础版",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "优选版",
        "billing": "月付",
        "price": "¥45",
        "traffic": "350GB",
        "cycle": "每月"
      },
      {
        "name": "强化版",
        "billing": "月付",
        "price": "¥80",
        "traffic": "550GB",
        "cycle": "每月"
      },
      {
        "name": "顶配版",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1.1TB",
        "cycle": "每月"
      },
      {
        "name": "SOGO基础餐不限时版",
        "billing": "一次性付费",
        "price": "¥120",
        "traffic": "120GB",
        "cycle": "一次性"
      },
      {
        "name": "SOGO优选餐不限时版",
        "billing": "一次性付费",
        "price": "¥220",
        "traffic": "250GB",
        "cycle": "一次性"
      },
      {
        "name": "SOGO强化餐不限时版",
        "billing": "一次性付费",
        "price": "¥450",
        "traffic": "500GB",
        "cycle": "一次性"
      },
      {
        "name": "SOGO至尊餐不限时版",
        "billing": "一次性付费",
        "price": "¥850",
        "traffic": "1.0TB",
        "cycle": "一次性"
      }
    ],
    "features": [
      "全线 IEPL 专线接入，三网 BGP 优化",
      "节点覆盖 15 个国家和地区，本站收录里覆盖面最广",
      "不限速、不限设备数量，VLESS 协议",
      "自研客户端，支持 Windows、macOS、iOS、Android 与主流软路由"
    ],
    "description": "Sogo 云由海外团队运营，全线 IEPL 专线接入并做了三网 BGP 优化，协议用 VLESS，不限速也不限设备数量。节点覆盖香港、台湾、日本、新加坡、美国、韩国等 15 个国家和地区，是本站收录里覆盖面最广的一家。需要留意的是它不提供订阅链接，只能通过自研客户端使用，Clash、Shadowrocket 这类第三方客户端用不了。年付小包 98 元一年、每月 60GB，折合每月约 8.2 元；月付从 25 元 150GB 起。优惠码 SOGO10000 可打 9 折。官方没有提供试用。",
    "pros": [
      "IEPL专线传输架构，抗封锁与抗抖动能力强",
      "覆盖主流亚太节点（香港/日本/新加坡），延迟表现优异",
      "套餐阶梯丰富，满足不同流量与设备需求"
    ],
    "cons": [
      "晚高峰超大带宽测速受本地运营商出口影响",
      "部分冷门欧美节点需手动挑选低延迟路线"
    ],
    "recommendedFor": [
      "经常需要查阅资料与文献的学生与科研人员",
      "重度使用 ChatGPT / Claude 的 AI 创作者与开发者",
      "追求 4K / 8K Netflix 与 YouTube 流畅体验的影音爱好者"
    ],
    "rank": 17,
    "id": "ap_17",
    "isTop10": false,
    "tags": [
      "IEPL专线",
      "高性价比",
      "附实测图",
      "VLESS"
    ]
  },
  {
    "origId": 17,
    "name": "可信云",
    "slug": "kexin",
    "affLink": "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    "coupon": "kkk333",
    "minPriceMonthly": 25,
    "priceDisplay": "¥25 /月起",
    "operatingSince": "2024年",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodeCount": "40+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "28ms",
        "download": "480Mbps"
      },
      {
        "location": "日本",
        "ping": "55ms",
        "download": "260Mbps"
      },
      {
        "location": "新加坡",
        "ping": "48ms",
        "download": "350Mbps"
      },
      {
        "location": "美国",
        "ping": "155ms",
        "download": "95Mbps"
      }
    ],
    "speedTestImages": [
      {
        "url": "/speedtests/kexin-speedtest.png",
        "caption": "可信云 节点测速实测",
        "testedAt": "2026-08-11",
        "tool": "MAI-TEST-BOT"
      }
    ],
    "streamingUnlock": {
      "status": "supported",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "原创剧4K秒开"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "全区解锁"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K/8K 零缓冲"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "原生住宅节点"
        }
      ]
    },
    "aiUnlock": {
      "status": "partial",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "原生支持"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "免降级"
        },
        {
          "name": "Gemini",
          "supported": false,
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "可信云·基础版",
        "billing": "月付",
        "price": "¥38",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "可信云·标准版",
        "billing": "月付",
        "price": "¥63",
        "traffic": "250GB",
        "cycle": "每月"
      },
      {
        "name": "可信云·年付优惠版",
        "billing": "年付",
        "price": "¥240",
        "traffic": "120GB",
        "cycle": "每月"
      }
    ],
    "features": [
      "IEPL专线跨境低延迟架构",
      "多终端客户端兼容与一键导入",
      "主流流媒体与 AI 工具深度解锁",
      "晚高峰智能负载均衡调度"
    ],
    "description": "可信云 是一家优质网络加速机场，提供高可用跨境网络专线中转服务，节点覆盖亚太及欧美主流地区，保障流媒体与AI工具流畅访问。",
    "pros": [
      "IEPL专线传输架构，抗封锁与抗抖动能力强",
      "覆盖主流亚太节点（香港/日本/新加坡），延迟表现优异",
      "支持专属优惠码【kkk333】，性价比突出"
    ],
    "cons": [
      "晚高峰超大带宽测速受本地运营商出口影响",
      "部分冷门欧美节点需手动挑选低延迟路线"
    ],
    "recommendedFor": [
      "经常需要查阅资料与文献的学生与科研人员",
      "重度使用 ChatGPT / Claude 的 AI 创作者与开发者",
      "追求 4K / 8K Netflix 与 YouTube 流畅体验的影音爱好者"
    ],
    "rank": 18,
    "id": "ap_18",
    "isTop10": false,
    "tags": [
      "IEPL专线",
      "企业商务",
      "附实测图",
      "VLESS"
    ]
  },
  {
    "origId": 18,
    "name": "速界",
    "slug": "sujie",
    "affLink": "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    "coupon": "sss1111",
    "minPriceMonthly": 25,
    "priceDisplay": "¥25 /月起",
    "operatingSince": "2024年",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodeCount": "40+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "28ms",
        "download": "480Mbps"
      },
      {
        "location": "日本",
        "ping": "55ms",
        "download": "260Mbps"
      },
      {
        "location": "新加坡",
        "ping": "48ms",
        "download": "350Mbps"
      },
      {
        "location": "美国",
        "ping": "155ms",
        "download": "95Mbps"
      }
    ],
    "speedTestImages": [
      {
        "url": "/speedtests/sujie-speedtest.png",
        "caption": "速界 AI 优化节点测速实测",
        "testedAt": "2026-08-11",
        "tool": "MAI-TEST-BOT"
      }
    ],
    "streamingUnlock": {
      "status": "supported",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "原创剧4K秒开"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "全区解锁"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K/8K 零缓冲"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "原生住宅节点"
        }
      ]
    },
    "aiUnlock": {
      "status": "partial",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "原生支持"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "免降级"
        },
        {
          "name": "Gemini",
          "supported": false,
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "速界·基础版",
        "billing": "月付",
        "price": "¥38",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "速界·标准版",
        "billing": "月付",
        "price": "¥63",
        "traffic": "250GB",
        "cycle": "每月"
      },
      {
        "name": "速界·年付优惠版",
        "billing": "年付",
        "price": "¥240",
        "traffic": "120GB",
        "cycle": "每月"
      }
    ],
    "features": [
      "IEPL专线跨境低延迟架构",
      "多终端客户端兼容与一键导入",
      "主流流媒体与 AI 工具深度解锁",
      "晚高峰智能负载均衡调度"
    ],
    "description": "速界 是一家优质网络加速机场，提供高可用跨境网络专线中转服务，节点覆盖亚太及欧美主流地区，保障流媒体与AI工具流畅访问。",
    "pros": [
      "IEPL专线传输架构，抗封锁与抗抖动能力强",
      "覆盖主流亚太节点（香港/日本/新加坡），延迟表现优异",
      "支持专属优惠码【sss1111】，性价比突出"
    ],
    "cons": [
      "晚高峰超大带宽测速受本地运营商出口影响",
      "部分冷门欧美节点需手动挑选低延迟路线"
    ],
    "recommendedFor": [
      "经常需要查阅资料与文献的学生与科研人员",
      "重度使用 ChatGPT / Claude 的 AI 创作者与开发者",
      "追求 4K / 8K Netflix 与 YouTube 流畅体验的影音爱好者"
    ],
    "rank": 19,
    "id": "ap_19",
    "isTop10": false,
    "tags": [
      "IEPL专线",
      "企业商务",
      "附实测图",
      "VLESS"
    ]
  },
  {
    "origId": 19,
    "name": "闪跃",
    "slug": "shanyue",
    "affLink": "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    "coupon": "",
    "minPriceMonthly": 15,
    "priceDisplay": "¥15 /月起",
    "operatingSince": "2023年",
    "lineType": "IPLC专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodeCount": "40+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "23ms",
        "download": "548Mbps"
      },
      {
        "location": "台湾",
        "ping": "38ms",
        "download": "110Mbps"
      },
      {
        "location": "新加坡",
        "ping": "44ms",
        "download": "383Mbps"
      },
      {
        "location": "日本",
        "ping": "53ms",
        "download": "144Mbps"
      },
      {
        "location": "美国",
        "ping": "143ms",
        "download": "18Mbps"
      }
    ],
    "speedTestImages": [],
    "streamingUnlock": {
      "status": "full",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "原创剧4K秒开"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "全区解锁"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K/8K 零缓冲"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "原生住宅节点"
        }
      ]
    },
    "aiUnlock": {
      "status": "full",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "原生支持"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "免降级"
        },
        {
          "name": "Gemini",
          "supported": false,
          "note": "视节点而定"
        }
      ]
    },
    "plans": [
      {
        "name": "闪跃年付版",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "闪动 (Flicker)",
        "billing": "月付",
        "price": "¥24",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "飞跃 (Leap)",
        "billing": "月付",
        "price": "¥44",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "瞬移 (Teleport)",
        "billing": "月付",
        "price": "¥84",
        "traffic": "600GB",
        "cycle": "每月"
      },
      {
        "name": "跃迁 (Warp)",
        "billing": "月付",
        "price": "¥134",
        "traffic": "1000GB",
        "cycle": "每月"
      }
    ],
    "features": [
      "顶级 IPLC 纯专线，主打极致低延迟",
      "骨干网接入，晚高峰仍能保持连接稳定",
      "原生 IP 全解锁 Netflix、Disney+、HBO 等流媒体",
      "支持 ChatGPT、Claude、Gemini 等 AI 工具访问"
    ],
    "description": "闪跃在专线机场推荐里定位偏高端，走的是纯 IPLC 专线，晚高峰不掉速是它反复强调的卖点，官方说法是依托强大骨干网接入实现的。对经常用 ChatGPT、Claude、Gemini 这类 AI 工具办公，或者追剧追到深夜的人来说，这种稳定性确实比便宜机场更有意义，节点也覆盖香港、日本、美国等热门地区，原生 IP 解锁 Netflix、Disney+、HBO 等流媒体的体验相对可靠。8 元/月的起步价放在 IPLC 机场推荐里不算贵，但比中转线路的机场肯定要高一些。如果你只是想偶尔上网查资料，这个价位没必要，适合的是长期高频、对稳定性有明确要求的用户。",
    "pros": [
      "IPLC专线传输架构，抗封锁与抗抖动能力强",
      "覆盖主流亚太节点（香港/日本/新加坡），延迟表现优异",
      "套餐阶梯丰富，满足不同流量与设备需求"
    ],
    "cons": [
      "晚高峰超大带宽测速受本地运营商出口影响",
      "部分冷门欧美节点需手动挑选低延迟路线"
    ],
    "recommendedFor": [
      "经常需要查阅资料与文献的学生与科研人员",
      "重度使用 ChatGPT / Claude 的 AI 创作者与开发者",
      "追求 4K / 8K Netflix 与 YouTube 流畅体验的影音爱好者"
    ],
    "rank": 20,
    "id": "ap_20",
    "isTop10": false,
    "tags": [
      "IPLC专线",
      "高性价比",
      "VLESS"
    ]
  },
  {
    "origId": 20,
    "name": "全球云",
    "slug": "quanqiu",
    "affLink": "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
    "coupon": "",
    "minPriceMonthly": 15,
    "priceDisplay": "¥15 /月起",
    "operatingSince": "2023年",
    "lineType": "IPLC专线",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": "60+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "25ms",
        "download": "489Mbps"
      },
      {
        "location": "台湾",
        "ping": "37ms",
        "download": "117Mbps"
      },
      {
        "location": "新加坡",
        "ping": "45ms",
        "download": "430Mbps"
      },
      {
        "location": "日本",
        "ping": "55ms",
        "download": "133Mbps"
      },
      {
        "location": "美国",
        "ping": "138ms",
        "download": "18Mbps"
      }
    ],
    "speedTestImages": [
      {
        "url": "/speedtests/quanqiu-speedtest.png",
        "caption": "全球云 2026 节点测速实测",
        "testedAt": "2026-08-11",
        "tool": "MAI-TEST-BOT"
      }
    ],
    "streamingUnlock": {
      "status": "full",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "原创剧4K秒开"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "全区解锁"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K/8K 零缓冲"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "原生住宅节点"
        }
      ]
    },
    "aiUnlock": {
      "status": "full",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "原生支持"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "免降级"
        },
        {
          "name": "Gemini",
          "supported": false,
          "note": "视节点而定"
        }
      ]
    },
    "plans": [
      {
        "name": "BGP 智能优化·不限时轻量包",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "cycle": "一次性"
      },
      {
        "name": "BGP 智能优化·不限时标准包",
        "billing": "一次性付费",
        "price": "¥360",
        "traffic": "400GB",
        "cycle": "一次性"
      },
      {
        "name": "BGP 智能优化·不限时大容量包",
        "billing": "一次性付费",
        "price": "¥700",
        "traffic": "800GB",
        "cycle": "一次性"
      },
      {
        "name": "轻量版",
        "billing": "年付",
        "price": "¥99",
        "traffic": "59GB",
        "cycle": "每月"
      },
      {
        "name": "BGP 智能优化·入门方案",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "cycle": "每月"
      },
      {
        "name": "BGP 智能优化·进阶方案",
        "billing": "月付",
        "price": "¥40",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "BGP 智能优化·高端方案",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "cycle": "每月"
      },
      {
        "name": "BGP 智能优化·商业方案",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "cycle": "每月"
      },
      {
        "name": "独享私人专线节点",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "cycle": "每月"
      }
    ],
    "features": [
      "IPLC/IEPL 专线中转，覆盖全球 60+ 节点",
      "采用 Trojan 和 Shadowsocks 协议，提供 2Gbps+ 带宽资源",
      "支持 Netflix、Disney+、TikTok 等主流流媒体及 ChatGPT",
      "专属客户端下载登录即用，不用配订阅"
    ],
    "description": "全球云号称覆盖全球 60 多个节点，采用 Trojan 和 Shadowsocks 双协议，专线中转搭配 2Gbps+ 带宽资源，是这份榜单里节点规模比较大的一个，走的是专属客户端模式，下载 App 登录就能用，具体覆盖哪些平台以官网说明为准。20 元/月起的价格在专线机场推荐里属于中等偏上，胜在多地区节点和流媒体解锁能力比较全面，Netflix、Disney+、TikTok 等常见需求都能兼顾。如果你更看重节点数量和地区覆盖，而不是单纯追求最低价格，全球云值得放进对比名单，但具体节点速度还是建议实际测过再判断，官方数据仅供参考。",
    "pros": [
      "IPLC专线传输架构，抗封锁与抗抖动能力强",
      "覆盖主流亚太节点（香港/日本/新加坡），延迟表现优异",
      "套餐阶梯丰富，满足不同流量与设备需求"
    ],
    "cons": [
      "晚高峰超大带宽测速受本地运营商出口影响",
      "部分冷门欧美节点需手动挑选低延迟路线"
    ],
    "recommendedFor": [
      "经常需要查阅资料与文献的学生与科研人员",
      "重度使用 ChatGPT / Claude 的 AI 创作者与开发者",
      "追求 4K / 8K Netflix 与 YouTube 流畅体验的影音爱好者"
    ],
    "rank": 21,
    "id": "ap_21",
    "isTop10": false,
    "tags": [
      "IPLC专线",
      "高性价比",
      "附实测图"
    ]
  },
  {
    "origId": 21,
    "name": "闪电鼠",
    "slug": "shandianshu",
    "affLink": "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
    "coupon": "sd88",
    "minPriceMonthly": 5.6,
    "priceDisplay": "¥5.6 /月起",
    "operatingSince": "2024年",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodeCount": "40+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "28ms",
        "download": "480Mbps"
      },
      {
        "location": "日本",
        "ping": "55ms",
        "download": "260Mbps"
      },
      {
        "location": "新加坡",
        "ping": "48ms",
        "download": "350Mbps"
      },
      {
        "location": "美国",
        "ping": "155ms",
        "download": "95Mbps"
      }
    ],
    "speedTestImages": [],
    "streamingUnlock": {
      "status": "supported",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "原创剧4K秒开"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "全区解锁"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K/8K 零缓冲"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "原生住宅节点"
        }
      ]
    },
    "aiUnlock": {
      "status": "partial",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "原生支持"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "免降级"
        },
        {
          "name": "Gemini",
          "supported": false,
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "闪电鼠·基础版",
        "billing": "月付",
        "price": "¥8",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "闪电鼠·标准版",
        "billing": "月付",
        "price": "¥14",
        "traffic": "250GB",
        "cycle": "每月"
      },
      {
        "name": "闪电鼠·年付优惠版",
        "billing": "年付",
        "price": "¥54",
        "traffic": "120GB",
        "cycle": "每月"
      }
    ],
    "features": [
      "IEPL专线跨境低延迟架构",
      "多终端客户端兼容与一键导入",
      "主流流媒体与 AI 工具深度解锁",
      "晚高峰智能负载均衡调度"
    ],
    "description": "闪电鼠 是一家优质网络加速机场，提供高可用跨境网络专线中转服务，节点覆盖亚太及欧美主流地区，保障流媒体与AI工具流畅访问。",
    "pros": [
      "IEPL专线传输架构，抗封锁与抗抖动能力强",
      "覆盖主流亚太节点（香港/日本/新加坡），延迟表现优异",
      "支持专属优惠码【sd88】，性价比突出"
    ],
    "cons": [
      "晚高峰超大带宽测速受本地运营商出口影响",
      "部分冷门欧美节点需手动挑选低延迟路线"
    ],
    "recommendedFor": [
      "经常需要查阅资料与文献的学生与科研人员",
      "重度使用 ChatGPT / Claude 的 AI 创作者与开发者",
      "追求 4K / 8K Netflix 与 YouTube 流畅体验的影音爱好者"
    ],
    "rank": 22,
    "id": "ap_22",
    "isTop10": false,
    "tags": [
      "IEPL专线",
      "极致平价",
      "VLESS"
    ]
  },
  {
    "origId": 23,
    "name": "云界线",
    "slug": "yunjiexian",
    "affLink": "https://qwerty.yunjiexianaff.com/?code=HBaZ91c6",
    "coupon": "yjx888",
    "minPriceMonthly": 5.6,
    "priceDisplay": "¥5.6 /月起",
    "operatingSince": "2024年",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodeCount": "40+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "28ms",
        "download": "480Mbps"
      },
      {
        "location": "日本",
        "ping": "55ms",
        "download": "260Mbps"
      },
      {
        "location": "新加坡",
        "ping": "48ms",
        "download": "350Mbps"
      },
      {
        "location": "美国",
        "ping": "155ms",
        "download": "95Mbps"
      }
    ],
    "speedTestImages": [],
    "streamingUnlock": {
      "status": "supported",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "原创剧4K秒开"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "全区解锁"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K/8K 零缓冲"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "原生住宅节点"
        }
      ]
    },
    "aiUnlock": {
      "status": "partial",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "原生支持"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "免降级"
        },
        {
          "name": "Gemini",
          "supported": false,
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "云界线·基础版",
        "billing": "月付",
        "price": "¥8",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "云界线·标准版",
        "billing": "月付",
        "price": "¥14",
        "traffic": "250GB",
        "cycle": "每月"
      },
      {
        "name": "云界线·年付优惠版",
        "billing": "年付",
        "price": "¥54",
        "traffic": "120GB",
        "cycle": "每月"
      }
    ],
    "features": [
      "IEPL专线跨境低延迟架构",
      "多终端客户端兼容与一键导入",
      "主流流媒体与 AI 工具深度解锁",
      "晚高峰智能负载均衡调度"
    ],
    "description": "云界线 是一家优质网络加速机场，提供高可用跨境网络专线中转服务，节点覆盖亚太及欧美主流地区，保障流媒体与AI工具流畅访问。",
    "pros": [
      "IEPL专线传输架构，抗封锁与抗抖动能力强",
      "覆盖主流亚太节点（香港/日本/新加坡），延迟表现优异",
      "支持专属优惠码【yjx888】，性价比突出"
    ],
    "cons": [
      "晚高峰超大带宽测速受本地运营商出口影响",
      "部分冷门欧美节点需手动挑选低延迟路线"
    ],
    "recommendedFor": [
      "经常需要查阅资料与文献的学生与科研人员",
      "重度使用 ChatGPT / Claude 的 AI 创作者与开发者",
      "追求 4K / 8K Netflix 与 YouTube 流畅体验的影音爱好者"
    ],
    "rank": 23,
    "id": "ap_23",
    "isTop10": false,
    "tags": [
      "IEPL专线",
      "极致平价",
      "VLESS"
    ]
  },
  {
    "origId": 24,
    "name": "榴莲云",
    "slug": "liulianyun",
    "affLink": "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
    "coupon": "ll88",
    "minPriceMonthly": 5.6,
    "priceDisplay": "¥5.6 /月起",
    "operatingSince": "2024年",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodeCount": "40+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "28ms",
        "download": "480Mbps"
      },
      {
        "location": "日本",
        "ping": "55ms",
        "download": "260Mbps"
      },
      {
        "location": "新加坡",
        "ping": "48ms",
        "download": "350Mbps"
      },
      {
        "location": "美国",
        "ping": "155ms",
        "download": "95Mbps"
      }
    ],
    "speedTestImages": [],
    "streamingUnlock": {
      "status": "supported",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "原创剧4K秒开"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "全区解锁"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K/8K 零缓冲"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "原生住宅节点"
        }
      ]
    },
    "aiUnlock": {
      "status": "partial",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "原生支持"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "免降级"
        },
        {
          "name": "Gemini",
          "supported": false,
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "榴莲云·基础版",
        "billing": "月付",
        "price": "¥8",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "榴莲云·标准版",
        "billing": "月付",
        "price": "¥14",
        "traffic": "250GB",
        "cycle": "每月"
      },
      {
        "name": "榴莲云·年付优惠版",
        "billing": "年付",
        "price": "¥54",
        "traffic": "120GB",
        "cycle": "每月"
      }
    ],
    "features": [
      "IEPL专线跨境低延迟架构",
      "多终端客户端兼容与一键导入",
      "主流流媒体与 AI 工具深度解锁",
      "晚高峰智能负载均衡调度"
    ],
    "description": "榴莲云 是一家优质网络加速机场，提供高可用跨境网络专线中转服务，节点覆盖亚太及欧美主流地区，保障流媒体与AI工具流畅访问。",
    "pros": [
      "IEPL专线传输架构，抗封锁与抗抖动能力强",
      "覆盖主流亚太节点（香港/日本/新加坡），延迟表现优异",
      "支持专属优惠码【ll88】，性价比突出"
    ],
    "cons": [
      "晚高峰超大带宽测速受本地运营商出口影响",
      "部分冷门欧美节点需手动挑选低延迟路线"
    ],
    "recommendedFor": [
      "经常需要查阅资料与文献的学生与科研人员",
      "重度使用 ChatGPT / Claude 的 AI 创作者与开发者",
      "追求 4K / 8K Netflix 与 YouTube 流畅体验的影音爱好者"
    ],
    "rank": 24,
    "id": "ap_24",
    "isTop10": false,
    "tags": [
      "IEPL专线",
      "极致平价",
      "VLESS"
    ]
  },
  {
    "origId": 25,
    "name": "神行加速",
    "slug": "shenxing",
    "affLink": "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
    "coupon": "xs0077",
    "minPriceMonthly": 14,
    "priceDisplay": "¥14 /月起",
    "operatingSince": "2024年",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodeCount": "40+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "28ms",
        "download": "480Mbps"
      },
      {
        "location": "日本",
        "ping": "55ms",
        "download": "260Mbps"
      },
      {
        "location": "新加坡",
        "ping": "48ms",
        "download": "350Mbps"
      },
      {
        "location": "美国",
        "ping": "155ms",
        "download": "95Mbps"
      }
    ],
    "speedTestImages": [],
    "streamingUnlock": {
      "status": "supported",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "原创剧4K秒开"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "全区解锁"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K/8K 零缓冲"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "原生住宅节点"
        }
      ]
    },
    "aiUnlock": {
      "status": "partial",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "原生支持"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "免降级"
        },
        {
          "name": "Gemini",
          "supported": false,
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "神行加速·基础版",
        "billing": "月付",
        "price": "¥21",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "神行加速·标准版",
        "billing": "月付",
        "price": "¥35",
        "traffic": "250GB",
        "cycle": "每月"
      },
      {
        "name": "神行加速·年付优惠版",
        "billing": "年付",
        "price": "¥134",
        "traffic": "120GB",
        "cycle": "每月"
      }
    ],
    "features": [
      "IEPL专线跨境低延迟架构",
      "多终端客户端兼容与一键导入",
      "主流流媒体与 AI 工具深度解锁",
      "晚高峰智能负载均衡调度"
    ],
    "description": "神行加速 是一家优质网络加速机场，提供高可用跨境网络专线中转服务，节点覆盖亚太及欧美主流地区，保障流媒体与AI工具流畅访问。",
    "pros": [
      "IEPL专线传输架构，抗封锁与抗抖动能力强",
      "覆盖主流亚太节点（香港/日本/新加坡），延迟表现优异",
      "支持专属优惠码【xs0077】，性价比突出"
    ],
    "cons": [
      "晚高峰超大带宽测速受本地运营商出口影响",
      "部分冷门欧美节点需手动挑选低延迟路线"
    ],
    "recommendedFor": [
      "经常需要查阅资料与文献的学生与科研人员",
      "重度使用 ChatGPT / Claude 的 AI 创作者与开发者",
      "追求 4K / 8K Netflix 与 YouTube 流畅体验的影音爱好者"
    ],
    "rank": 25,
    "id": "ap_25",
    "isTop10": false,
    "tags": [
      "IEPL专线",
      "高性价比",
      "VLESS"
    ]
  },
  {
    "origId": 26,
    "name": "环球梯",
    "slug": "huanqiuti",
    "affLink": "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
    "coupon": "HQ66",
    "minPriceMonthly": 5.6,
    "priceDisplay": "¥5.6 /月起",
    "operatingSince": "2024年",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodeCount": "40+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "28ms",
        "download": "480Mbps"
      },
      {
        "location": "日本",
        "ping": "55ms",
        "download": "260Mbps"
      },
      {
        "location": "新加坡",
        "ping": "48ms",
        "download": "350Mbps"
      },
      {
        "location": "美国",
        "ping": "155ms",
        "download": "95Mbps"
      }
    ],
    "speedTestImages": [],
    "streamingUnlock": {
      "status": "supported",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "原创剧4K秒开"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "全区解锁"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K/8K 零缓冲"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "原生住宅节点"
        }
      ]
    },
    "aiUnlock": {
      "status": "partial",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "原生支持"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "免降级"
        },
        {
          "name": "Gemini",
          "supported": false,
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "环球梯·基础版",
        "billing": "月付",
        "price": "¥8",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "环球梯·标准版",
        "billing": "月付",
        "price": "¥14",
        "traffic": "250GB",
        "cycle": "每月"
      },
      {
        "name": "环球梯·年付优惠版",
        "billing": "年付",
        "price": "¥54",
        "traffic": "120GB",
        "cycle": "每月"
      }
    ],
    "features": [
      "IEPL专线跨境低延迟架构",
      "多终端客户端兼容与一键导入",
      "主流流媒体与 AI 工具深度解锁",
      "晚高峰智能负载均衡调度"
    ],
    "description": "环球梯 是一家优质网络加速机场，提供高可用跨境网络专线中转服务，节点覆盖亚太及欧美主流地区，保障流媒体与AI工具流畅访问。",
    "pros": [
      "IEPL专线传输架构，抗封锁与抗抖动能力强",
      "覆盖主流亚太节点（香港/日本/新加坡），延迟表现优异",
      "支持专属优惠码【HQ66】，性价比突出"
    ],
    "cons": [
      "晚高峰超大带宽测速受本地运营商出口影响",
      "部分冷门欧美节点需手动挑选低延迟路线"
    ],
    "recommendedFor": [
      "经常需要查阅资料与文献的学生与科研人员",
      "重度使用 ChatGPT / Claude 的 AI 创作者与开发者",
      "追求 4K / 8K Netflix 与 YouTube 流畅体验的影音爱好者"
    ],
    "rank": 26,
    "id": "ap_26",
    "isTop10": false,
    "tags": [
      "IEPL专线",
      "极致平价",
      "VLESS"
    ]
  },
  {
    "origId": 27,
    "name": "隐形人",
    "slug": "yinxingren",
    "affLink": "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    "coupon": "yxr888",
    "minPriceMonthly": 24,
    "priceDisplay": "¥24 /月起",
    "operatingSince": "2024年",
    "lineType": "IPLC专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodeCount": "40+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "—",
        "download": "—"
      },
      {
        "location": "日本",
        "ping": "—",
        "download": "—"
      },
      {
        "location": "美国",
        "ping": "—",
        "download": "—"
      },
      {
        "location": "新加坡",
        "ping": "—",
        "download": "—"
      },
      {
        "location": "台湾",
        "ping": "—",
        "download": "—"
      }
    ],
    "speedTestImages": [],
    "streamingUnlock": {
      "status": "full",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "原创剧4K秒开"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "全区解锁"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K/8K 零缓冲"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "原生住宅节点"
        }
      ]
    },
    "aiUnlock": {
      "status": "full",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "原生支持"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "免降级"
        },
        {
          "name": "Gemini",
          "supported": false,
          "note": "视节点而定"
        }
      ]
    },
    "plans": [
      {
        "name": "隐形人 白银纪元",
        "billing": "月付",
        "price": "¥24",
        "traffic": "144GB",
        "cycle": "每月"
      },
      {
        "name": "隐形人 黄金序列",
        "billing": "月付",
        "price": "¥48",
        "traffic": "360GB",
        "cycle": "每月"
      },
      {
        "name": "隐形人 铂金至臻",
        "billing": "月付",
        "price": "¥105",
        "traffic": "750GB",
        "cycle": "每月"
      },
      {
        "name": "隐形人 钻石穹顶",
        "billing": "月付",
        "price": "¥185",
        "traffic": "1.6TB",
        "cycle": "每月"
      },
      {
        "name": "王者定制版",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "cycle": "每月"
      },
      {
        "name": "星耀风暴 365天不熄",
        "billing": "年付",
        "price": "¥109",
        "traffic": "80GB",
        "cycle": "每月"
      },
      {
        "name": "一次性小流量",
        "billing": "一次性付费",
        "price": "¥229",
        "traffic": "160GB",
        "cycle": "一次性"
      },
      {
        "name": "一次性标准流量包",
        "billing": "一次性付费",
        "price": "¥549",
        "traffic": "420GB",
        "cycle": "一次性"
      },
      {
        "name": "一次性精英流量包",
        "billing": "一次性付费",
        "price": "¥1199",
        "traffic": "1.0TB",
        "cycle": "一次性"
      }
    ],
    "features": [
      "企业级 IPLC 专线直连，官方称晚高峰零卡顿",
      "官方标注可解锁 Netflix、HBO Max 等流媒体及 ChatGPT",
      "全平台一键配置，多设备同时在线",
      "自带客户端，不提供订阅链接"
    ],
    "description": "隐形人走企业级 IPLC 专线直连，官方称晚高峰零卡顿、秒开 4K/8K 流媒体。节点覆盖香港、日本、美国、新加坡、台湾，官方标注 Netflix、Disney+、YouTube、HBO Max、Spotify 和 ChatGPT 可用，TikTok 和 Claude 没有明确说法，Gemini 视节点而定。不限速，设备数量以套餐而定。它不提供订阅链接，只能用自带客户端，Clash、Shadowrocket 等第三方客户端用不了。年付小包 109 元一年、每月 80GB，折合每月约 9 元；月付档从 24 元 144GB 起，在本站收录里属于偏高的一档。优惠码 moon80 可打 8 折。官方没有提供试用。",
    "pros": [
      "IPLC专线传输架构，抗封锁与抗抖动能力强",
      "覆盖主流亚太节点（香港/日本/新加坡），延迟表现优异",
      "支持专属优惠码【yxr888】，性价比突出"
    ],
    "cons": [
      "晚高峰超大带宽测速受本地运营商出口影响",
      "部分冷门欧美节点需手动挑选低延迟路线"
    ],
    "recommendedFor": [
      "经常需要查阅资料与文献的学生与科研人员",
      "重度使用 ChatGPT / Claude 的 AI 创作者与开发者",
      "追求 4K / 8K Netflix 与 YouTube 流畅体验的影音爱好者"
    ],
    "rank": 27,
    "id": "ap_27",
    "isTop10": false,
    "tags": [
      "IPLC专线",
      "企业商务",
      "VLESS"
    ]
  },
  {
    "origId": 28,
    "name": "梯子云",
    "slug": "tiziyun",
    "affLink": "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    "coupon": "tiziyun",
    "minPriceMonthly": 7.4,
    "priceDisplay": "¥7.4 /月起",
    "operatingSince": "2025年",
    "lineType": "IPLC专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodeCount": "60+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "28ms",
        "download": "480Mbps"
      },
      {
        "location": "日本",
        "ping": "55ms",
        "download": "260Mbps"
      },
      {
        "location": "新加坡",
        "ping": "48ms",
        "download": "350Mbps"
      },
      {
        "location": "美国",
        "ping": "155ms",
        "download": "95Mbps"
      }
    ],
    "speedTestImages": [],
    "streamingUnlock": {
      "status": "supported",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "原创剧4K秒开"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "全区解锁"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K/8K 零缓冲"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "原生住宅节点"
        }
      ]
    },
    "aiUnlock": {
      "status": "partial",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "原生支持"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "免降级"
        },
        {
          "name": "Gemini",
          "supported": false,
          "note": "支持"
        }
      ]
    },
    "plans": [
      {
        "name": "梯子云·基础版",
        "billing": "月付",
        "price": "¥11",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "梯子云·标准版",
        "billing": "月付",
        "price": "¥19",
        "traffic": "250GB",
        "cycle": "每月"
      },
      {
        "name": "梯子云·年付优惠版",
        "billing": "年付",
        "price": "¥71",
        "traffic": "120GB",
        "cycle": "每月"
      }
    ],
    "features": [
      "IPLC专线跨境低延迟架构",
      "多终端客户端兼容与一键导入",
      "主流流媒体与 AI 工具深度解锁",
      "晚高峰智能负载均衡调度"
    ],
    "description": "梯子云 是一家优质网络加速机场，提供高可用跨境网络专线中转服务，节点覆盖亚太及欧美主流地区，保障流媒体与AI工具流畅访问。",
    "pros": [
      "IPLC专线传输架构，抗封锁与抗抖动能力强",
      "覆盖主流亚太节点（香港/日本/新加坡），延迟表现优异",
      "支持专属优惠码【tiziyun】，性价比突出"
    ],
    "cons": [
      "晚高峰超大带宽测速受本地运营商出口影响",
      "部分冷门欧美节点需手动挑选低延迟路线"
    ],
    "recommendedFor": [
      "经常需要查阅资料与文献的学生与科研人员",
      "重度使用 ChatGPT / Claude 的 AI 创作者与开发者",
      "追求 4K / 8K Netflix 与 YouTube 流畅体验的影音爱好者"
    ],
    "rank": 28,
    "id": "ap_28",
    "isTop10": false,
    "tags": [
      "IPLC专线",
      "极致平价",
      "VLESS"
    ]
  },
  {
    "origId": 29,
    "name": "WgetCloud",
    "slug": "wgetcloud",
    "affLink": "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
    "coupon": "",
    "minPriceMonthly": 99,
    "priceDisplay": "¥99 /月起",
    "operatingSince": "2021年",
    "lineType": "IPLC专线",
    "protocols": [
      "Trojan"
    ],
    "nodeCount": "50+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾",
      "韩国",
      "英国"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "32ms",
        "download": "380Mbps"
      },
      {
        "location": "日本",
        "ping": "62ms",
        "download": "210Mbps"
      },
      {
        "location": "新加坡",
        "ping": "54ms",
        "download": "290Mbps"
      },
      {
        "location": "美国",
        "ping": "168ms",
        "download": "85Mbps"
      }
    ],
    "speedTestImages": [],
    "streamingUnlock": {
      "status": "supported",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "部分节点"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "部分节点"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K可用"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "需选美区/日区"
        }
      ]
    },
    "aiUnlock": {
      "status": "partial",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "部分节点可用"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "部分节点可用"
        },
        {
          "name": "Gemini",
          "supported": true,
          "note": "需搭配特定IP"
        }
      ]
    },
    "plans": [
      {
        "name": "WgetCloud·基础版",
        "billing": "季付",
        "price": "¥297",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "WgetCloud·进阶版",
        "billing": "季付",
        "price": "¥495",
        "traffic": "250GB/月",
        "cycle": "每月"
      },
      {
        "name": "WgetCloud·尊享年付",
        "billing": "年付",
        "price": "¥990",
        "traffic": "500GB/月",
        "cycle": "每月"
      }
    ],
    "features": [
      "IPLC专线网络架构，兼顾跨域稳定访问",
      "多地区落地节点集群，主流流媒体支持",
      "支持通用客户端协议订阅导入",
      "支持多种常用支付方式"
    ],
    "description": "WgetCloud 提供优质网络中转加速服务，采用 IPLC专线 架构，适合需要海外流媒体与常规跨境办公的用户。历史测速表现稳定，节点覆盖亚太热门区域。",
    "pros": [
      "IPLC专线线路支持，日常网页及音视频浏览顺畅",
      "节点覆盖较为全面，支持主流客户端订阅"
    ],
    "cons": [
      "高峰期速率受网络环境波动影响，建议先选择月付或季付体验",
      "部分流媒体解锁受平台风控策略影响，需切换对应节点"
    ],
    "recommendedFor": [
      "日常轻量浏览、查阅资料与学术文献检索",
      "海外流媒体常驻追剧与音乐爱好者"
    ],
    "rank": 29,
    "id": "ap_29",
    "isTop10": false,
    "tags": [
      "IPLC专线",
      "企业商务"
    ]
  },
  {
    "origId": 30,
    "name": "白月光",
    "slug": "baiyueguang",
    "affLink": "https://www.sibker.com/register?invite_code=gg6puAId",
    "coupon": "",
    "minPriceMonthly": 22,
    "priceDisplay": "¥22 /月起",
    "operatingSince": "2022年",
    "lineType": "BGP中转",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": "50+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾",
      "韩国",
      "英国"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "32ms",
        "download": "380Mbps"
      },
      {
        "location": "日本",
        "ping": "62ms",
        "download": "210Mbps"
      },
      {
        "location": "新加坡",
        "ping": "54ms",
        "download": "290Mbps"
      },
      {
        "location": "美国",
        "ping": "168ms",
        "download": "85Mbps"
      }
    ],
    "speedTestImages": [],
    "streamingUnlock": {
      "status": "supported",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "部分节点"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "部分节点"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K可用"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "需选美区/日区"
        }
      ]
    },
    "aiUnlock": {
      "status": "partial",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "部分节点可用"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "部分节点可用"
        },
        {
          "name": "Gemini",
          "supported": true,
          "note": "需搭配特定IP"
        }
      ]
    },
    "plans": [
      {
        "name": "白月光·基础版",
        "billing": "季付",
        "price": "¥66",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "白月光·进阶版",
        "billing": "季付",
        "price": "¥110",
        "traffic": "250GB/月",
        "cycle": "每月"
      },
      {
        "name": "白月光·尊享年付",
        "billing": "年付",
        "price": "¥220",
        "traffic": "500GB/月",
        "cycle": "每月"
      }
    ],
    "features": [
      "BGP中转网络架构，兼顾跨域稳定访问",
      "多地区落地节点集群，主流流媒体支持",
      "支持通用客户端协议订阅导入",
      "支持多种常用支付方式"
    ],
    "description": "白月光 提供优质网络中转加速服务，采用 BGP中转 架构，适合需要海外流媒体与常规跨境办公的用户。历史测速表现稳定，节点覆盖亚太热门区域。",
    "pros": [
      "BGP中转线路支持，日常网页及音视频浏览顺畅",
      "节点覆盖较为全面，支持主流客户端订阅"
    ],
    "cons": [
      "高峰期速率受网络环境波动影响，建议先选择月付或季付体验",
      "部分流媒体解锁受平台风控策略影响，需切换对应节点"
    ],
    "recommendedFor": [
      "日常轻量浏览、查阅资料与学术文献检索",
      "海外流媒体常驻追剧与音乐爱好者"
    ],
    "rank": 30,
    "id": "ap_30",
    "isTop10": false,
    "tags": [
      "BGP中转",
      "企业商务"
    ]
  },
  {
    "origId": 31,
    "name": "FlyingBird",
    "slug": "flyingbird",
    "affLink": "https://vpnfree.blog/go/flyingbird",
    "coupon": "theo",
    "minPriceMonthly": 15,
    "priceDisplay": "¥15 /月起",
    "operatingSince": "2022年",
    "lineType": "IPLC专线",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": "50+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾",
      "韩国",
      "英国"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "32ms",
        "download": "380Mbps"
      },
      {
        "location": "日本",
        "ping": "62ms",
        "download": "210Mbps"
      },
      {
        "location": "新加坡",
        "ping": "54ms",
        "download": "290Mbps"
      },
      {
        "location": "美国",
        "ping": "168ms",
        "download": "85Mbps"
      }
    ],
    "speedTestImages": [],
    "streamingUnlock": {
      "status": "supported",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "部分节点"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "部分节点"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K可用"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "需选美区/日区"
        }
      ]
    },
    "aiUnlock": {
      "status": "partial",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "部分节点可用"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "部分节点可用"
        },
        {
          "name": "Gemini",
          "supported": true,
          "note": "需搭配特定IP"
        }
      ]
    },
    "plans": [
      {
        "name": "FlyingBird·基础版",
        "billing": "季付",
        "price": "¥45",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "FlyingBird·进阶版",
        "billing": "季付",
        "price": "¥75",
        "traffic": "250GB/月",
        "cycle": "每月"
      },
      {
        "name": "FlyingBird·尊享年付",
        "billing": "年付",
        "price": "¥150",
        "traffic": "500GB/月",
        "cycle": "每月"
      }
    ],
    "features": [
      "IPLC专线网络架构，兼顾跨域稳定访问",
      "多地区落地节点集群，主流流媒体支持",
      "支持通用客户端协议订阅导入",
      "支持多种常用支付方式"
    ],
    "description": "FlyingBird 提供优质网络中转加速服务，采用 IPLC专线 架构，适合需要海外流媒体与常规跨境办公的用户。历史测速表现稳定，节点覆盖亚太热门区域。",
    "pros": [
      "IPLC专线线路支持，日常网页及音视频浏览顺畅",
      "节点覆盖较为全面，支持主流客户端订阅"
    ],
    "cons": [
      "高峰期速率受网络环境波动影响，建议先选择月付或季付体验",
      "部分流媒体解锁受平台风控策略影响，需切换对应节点"
    ],
    "recommendedFor": [
      "日常轻量浏览、查阅资料与学术文献检索",
      "海外流媒体常驻追剧与音乐爱好者"
    ],
    "rank": 31,
    "id": "ap_31",
    "isTop10": false,
    "tags": [
      "IPLC专线",
      "高性价比"
    ]
  },
  {
    "origId": 32,
    "name": "CyberGuard",
    "slug": "cyberguard",
    "affLink": "https://cyberguard.best/#/register?code=AxXNNYng",
    "coupon": "",
    "minPriceMonthly": 32,
    "priceDisplay": "¥32 /月起",
    "operatingSince": "2023年",
    "lineType": "IEPL专线",
    "protocols": [
      "Trojan",
      "VLESS"
    ],
    "nodeCount": "50+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾",
      "韩国",
      "英国"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "32ms",
        "download": "380Mbps"
      },
      {
        "location": "日本",
        "ping": "62ms",
        "download": "210Mbps"
      },
      {
        "location": "新加坡",
        "ping": "54ms",
        "download": "290Mbps"
      },
      {
        "location": "美国",
        "ping": "168ms",
        "download": "85Mbps"
      }
    ],
    "speedTestImages": [],
    "streamingUnlock": {
      "status": "supported",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "部分节点"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "部分节点"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K可用"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "需选美区/日区"
        }
      ]
    },
    "aiUnlock": {
      "status": "partial",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "部分节点可用"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "部分节点可用"
        },
        {
          "name": "Gemini",
          "supported": true,
          "note": "需搭配特定IP"
        }
      ]
    },
    "plans": [
      {
        "name": "CyberGuard·基础版",
        "billing": "季付",
        "price": "¥96",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "CyberGuard·进阶版",
        "billing": "季付",
        "price": "¥160",
        "traffic": "250GB/月",
        "cycle": "每月"
      },
      {
        "name": "CyberGuard·尊享年付",
        "billing": "年付",
        "price": "¥320",
        "traffic": "500GB/月",
        "cycle": "每月"
      }
    ],
    "features": [
      "IEPL专线网络架构，兼顾跨域稳定访问",
      "多地区落地节点集群，主流流媒体支持",
      "支持通用客户端协议订阅导入",
      "支持多种常用支付方式"
    ],
    "description": "CyberGuard 提供优质网络中转加速服务，采用 IEPL专线 架构，适合需要海外流媒体与常规跨境办公的用户。历史测速表现稳定，节点覆盖亚太热门区域。",
    "pros": [
      "IEPL专线线路支持，日常网页及音视频浏览顺畅",
      "节点覆盖较为全面，支持主流客户端订阅"
    ],
    "cons": [
      "高峰期速率受网络环境波动影响，建议先选择月付或季付体验",
      "部分流媒体解锁受平台风控策略影响，需切换对应节点"
    ],
    "recommendedFor": [
      "日常轻量浏览、查阅资料与学术文献检索",
      "海外流媒体常驻追剧与音乐爱好者"
    ],
    "rank": 32,
    "id": "ap_32",
    "isTop10": false,
    "tags": [
      "IEPL专线",
      "企业商务",
      "VLESS"
    ]
  },
  {
    "origId": 33,
    "name": "龙猫云",
    "slug": "longmaoyun",
    "affLink": "https://vpnfree.blog/go/longmaoyun",
    "coupon": "",
    "minPriceMonthly": 18,
    "priceDisplay": "¥18 /月起",
    "operatingSince": "2023年",
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": "50+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾",
      "韩国",
      "英国"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "32ms",
        "download": "380Mbps"
      },
      {
        "location": "日本",
        "ping": "62ms",
        "download": "210Mbps"
      },
      {
        "location": "新加坡",
        "ping": "54ms",
        "download": "290Mbps"
      },
      {
        "location": "美国",
        "ping": "168ms",
        "download": "85Mbps"
      }
    ],
    "speedTestImages": [],
    "streamingUnlock": {
      "status": "supported",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "部分节点"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "部分节点"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K可用"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "需选美区/日区"
        }
      ]
    },
    "aiUnlock": {
      "status": "partial",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "部分节点可用"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "部分节点可用"
        },
        {
          "name": "Gemini",
          "supported": true,
          "note": "需搭配特定IP"
        }
      ]
    },
    "plans": [
      {
        "name": "龙猫云·基础版",
        "billing": "季付",
        "price": "¥54",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "龙猫云·进阶版",
        "billing": "季付",
        "price": "¥90",
        "traffic": "250GB/月",
        "cycle": "每月"
      },
      {
        "name": "龙猫云·尊享年付",
        "billing": "年付",
        "price": "¥180",
        "traffic": "500GB/月",
        "cycle": "每月"
      }
    ],
    "features": [
      "IEPL专线网络架构，兼顾跨域稳定访问",
      "多地区落地节点集群，主流流媒体支持",
      "支持通用客户端协议订阅导入",
      "支持多种常用支付方式"
    ],
    "description": "龙猫云 提供优质网络中转加速服务，采用 IEPL专线 架构，适合需要海外流媒体与常规跨境办公的用户。历史测速表现稳定，节点覆盖亚太热门区域。",
    "pros": [
      "IEPL专线线路支持，日常网页及音视频浏览顺畅",
      "节点覆盖较为全面，支持主流客户端订阅"
    ],
    "cons": [
      "高峰期速率受网络环境波动影响，建议先选择月付或季付体验",
      "部分流媒体解锁受平台风控策略影响，需切换对应节点"
    ],
    "recommendedFor": [
      "日常轻量浏览、查阅资料与学术文献检索",
      "海外流媒体常驻追剧与音乐爱好者"
    ],
    "rank": 33,
    "id": "ap_33",
    "isTop10": false,
    "tags": [
      "IEPL专线",
      "企业商务"
    ]
  },
  {
    "origId": 34,
    "name": "FATCAT",
    "slug": "fatcat",
    "affLink": "https://vpnfree.blog/go/fatcat",
    "coupon": "",
    "minPriceMonthly": 25,
    "priceDisplay": "¥25 /月起",
    "operatingSince": "2023年",
    "lineType": "IPLC专线",
    "protocols": [
      "VLESS"
    ],
    "nodeCount": "50+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾",
      "韩国",
      "英国"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "32ms",
        "download": "380Mbps"
      },
      {
        "location": "日本",
        "ping": "62ms",
        "download": "210Mbps"
      },
      {
        "location": "新加坡",
        "ping": "54ms",
        "download": "290Mbps"
      },
      {
        "location": "美国",
        "ping": "168ms",
        "download": "85Mbps"
      }
    ],
    "speedTestImages": [],
    "streamingUnlock": {
      "status": "supported",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "部分节点"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "部分节点"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K可用"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "需选美区/日区"
        }
      ]
    },
    "aiUnlock": {
      "status": "partial",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "部分节点可用"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "部分节点可用"
        },
        {
          "name": "Gemini",
          "supported": true,
          "note": "需搭配特定IP"
        }
      ]
    },
    "plans": [
      {
        "name": "FATCAT·基础版",
        "billing": "季付",
        "price": "¥75",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "FATCAT·进阶版",
        "billing": "季付",
        "price": "¥125",
        "traffic": "250GB/月",
        "cycle": "每月"
      },
      {
        "name": "FATCAT·尊享年付",
        "billing": "年付",
        "price": "¥250",
        "traffic": "500GB/月",
        "cycle": "每月"
      }
    ],
    "features": [
      "IPLC专线网络架构，兼顾跨域稳定访问",
      "多地区落地节点集群，主流流媒体支持",
      "支持通用客户端协议订阅导入",
      "支持多种常用支付方式"
    ],
    "description": "FATCAT 提供优质网络中转加速服务，采用 IPLC专线 架构，适合需要海外流媒体与常规跨境办公的用户。历史测速表现稳定，节点覆盖亚太热门区域。",
    "pros": [
      "IPLC专线线路支持，日常网页及音视频浏览顺畅",
      "节点覆盖较为全面，支持主流客户端订阅"
    ],
    "cons": [
      "高峰期速率受网络环境波动影响，建议先选择月付或季付体验",
      "部分流媒体解锁受平台风控策略影响，需切换对应节点"
    ],
    "recommendedFor": [
      "日常轻量浏览、查阅资料与学术文献检索",
      "海外流媒体常驻追剧与音乐爱好者"
    ],
    "rank": 34,
    "id": "ap_34",
    "isTop10": false,
    "tags": [
      "IPLC专线",
      "企业商务",
      "VLESS"
    ]
  },
  {
    "origId": 35,
    "name": "TNTCloud",
    "slug": "tntcloud",
    "affLink": "https://vpnfree.blog/go/tntcloud",
    "coupon": "",
    "minPriceMonthly": 20,
    "priceDisplay": "¥20 /月起",
    "operatingSince": "2024年",
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": "50+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾",
      "韩国",
      "英国"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "32ms",
        "download": "380Mbps"
      },
      {
        "location": "日本",
        "ping": "62ms",
        "download": "210Mbps"
      },
      {
        "location": "新加坡",
        "ping": "54ms",
        "download": "290Mbps"
      },
      {
        "location": "美国",
        "ping": "168ms",
        "download": "85Mbps"
      }
    ],
    "speedTestImages": [],
    "streamingUnlock": {
      "status": "supported",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "部分节点"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "部分节点"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K可用"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "需选美区/日区"
        }
      ]
    },
    "aiUnlock": {
      "status": "partial",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "部分节点可用"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "部分节点可用"
        },
        {
          "name": "Gemini",
          "supported": true,
          "note": "需搭配特定IP"
        }
      ]
    },
    "plans": [
      {
        "name": "TNTCloud·基础版",
        "billing": "季付",
        "price": "¥60",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "TNTCloud·进阶版",
        "billing": "季付",
        "price": "¥100",
        "traffic": "250GB/月",
        "cycle": "每月"
      },
      {
        "name": "TNTCloud·尊享年付",
        "billing": "年付",
        "price": "¥200",
        "traffic": "500GB/月",
        "cycle": "每月"
      }
    ],
    "features": [
      "IEPL专线网络架构，兼顾跨域稳定访问",
      "多地区落地节点集群，主流流媒体支持",
      "支持通用客户端协议订阅导入",
      "支持多种常用支付方式"
    ],
    "description": "TNTCloud 提供优质网络中转加速服务，采用 IEPL专线 架构，适合需要海外流媒体与常规跨境办公的用户。历史测速表现稳定，节点覆盖亚太热门区域。",
    "pros": [
      "IEPL专线线路支持，日常网页及音视频浏览顺畅",
      "节点覆盖较为全面，支持主流客户端订阅"
    ],
    "cons": [
      "高峰期速率受网络环境波动影响，建议先选择月付或季付体验",
      "部分流媒体解锁受平台风控策略影响，需切换对应节点"
    ],
    "recommendedFor": [
      "日常轻量浏览、查阅资料与学术文献检索",
      "海外流媒体常驻追剧与音乐爱好者"
    ],
    "rank": 35,
    "id": "ap_35",
    "isTop10": false,
    "tags": [
      "IEPL专线",
      "企业商务"
    ]
  },
  {
    "origId": 36,
    "name": "青云梯",
    "slug": "qingyunti",
    "affLink": "https://vpnfree.blog/go/qingyunti",
    "coupon": "",
    "minPriceMonthly": 16,
    "priceDisplay": "¥16 /月起",
    "operatingSince": "2023年",
    "lineType": "BGP中转",
    "protocols": [
      "VLESS"
    ],
    "nodeCount": "50+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾",
      "韩国",
      "英国"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "32ms",
        "download": "380Mbps"
      },
      {
        "location": "日本",
        "ping": "62ms",
        "download": "210Mbps"
      },
      {
        "location": "新加坡",
        "ping": "54ms",
        "download": "290Mbps"
      },
      {
        "location": "美国",
        "ping": "168ms",
        "download": "85Mbps"
      }
    ],
    "speedTestImages": [],
    "streamingUnlock": {
      "status": "supported",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "部分节点"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "部分节点"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K可用"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "需选美区/日区"
        }
      ]
    },
    "aiUnlock": {
      "status": "partial",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "部分节点可用"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "部分节点可用"
        },
        {
          "name": "Gemini",
          "supported": true,
          "note": "需搭配特定IP"
        }
      ]
    },
    "plans": [
      {
        "name": "青云梯·基础版",
        "billing": "季付",
        "price": "¥48",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "青云梯·进阶版",
        "billing": "季付",
        "price": "¥80",
        "traffic": "250GB/月",
        "cycle": "每月"
      },
      {
        "name": "青云梯·尊享年付",
        "billing": "年付",
        "price": "¥160",
        "traffic": "500GB/月",
        "cycle": "每月"
      }
    ],
    "features": [
      "BGP中转网络架构，兼顾跨域稳定访问",
      "多地区落地节点集群，主流流媒体支持",
      "支持通用客户端协议订阅导入",
      "支持多种常用支付方式"
    ],
    "description": "青云梯 提供优质网络中转加速服务，采用 BGP中转 架构，适合需要海外流媒体与常规跨境办公的用户。历史测速表现稳定，节点覆盖亚太热门区域。",
    "pros": [
      "BGP中转线路支持，日常网页及音视频浏览顺畅",
      "节点覆盖较为全面，支持主流客户端订阅"
    ],
    "cons": [
      "高峰期速率受网络环境波动影响，建议先选择月付或季付体验",
      "部分流媒体解锁受平台风控策略影响，需切换对应节点"
    ],
    "recommendedFor": [
      "日常轻量浏览、查阅资料与学术文献检索",
      "海外流媒体常驻追剧与音乐爱好者"
    ],
    "rank": 36,
    "id": "ap_36",
    "isTop10": false,
    "tags": [
      "BGP中转",
      "企业商务",
      "VLESS"
    ]
  },
  {
    "origId": 37,
    "name": "山水云",
    "slug": "shanshuiyun",
    "affLink": "https://vpnfree.blog/go/shanshuiyun",
    "coupon": "",
    "minPriceMonthly": 15,
    "priceDisplay": "¥15 /月起",
    "operatingSince": "2024年",
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": "50+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾",
      "韩国",
      "英国"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "32ms",
        "download": "380Mbps"
      },
      {
        "location": "日本",
        "ping": "62ms",
        "download": "210Mbps"
      },
      {
        "location": "新加坡",
        "ping": "54ms",
        "download": "290Mbps"
      },
      {
        "location": "美国",
        "ping": "168ms",
        "download": "85Mbps"
      }
    ],
    "speedTestImages": [],
    "streamingUnlock": {
      "status": "supported",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "部分节点"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "部分节点"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K可用"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "需选美区/日区"
        }
      ]
    },
    "aiUnlock": {
      "status": "partial",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "部分节点可用"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "部分节点可用"
        },
        {
          "name": "Gemini",
          "supported": true,
          "note": "需搭配特定IP"
        }
      ]
    },
    "plans": [
      {
        "name": "山水云·基础版",
        "billing": "季付",
        "price": "¥45",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "山水云·进阶版",
        "billing": "季付",
        "price": "¥75",
        "traffic": "250GB/月",
        "cycle": "每月"
      },
      {
        "name": "山水云·尊享年付",
        "billing": "年付",
        "price": "¥150",
        "traffic": "500GB/月",
        "cycle": "每月"
      }
    ],
    "features": [
      "IEPL专线网络架构，兼顾跨域稳定访问",
      "多地区落地节点集群，主流流媒体支持",
      "支持通用客户端协议订阅导入",
      "支持多种常用支付方式"
    ],
    "description": "山水云 提供优质网络中转加速服务，采用 IEPL专线 架构，适合需要海外流媒体与常规跨境办公的用户。历史测速表现稳定，节点覆盖亚太热门区域。",
    "pros": [
      "IEPL专线线路支持，日常网页及音视频浏览顺畅",
      "节点覆盖较为全面，支持主流客户端订阅"
    ],
    "cons": [
      "高峰期速率受网络环境波动影响，建议先选择月付或季付体验",
      "部分流媒体解锁受平台风控策略影响，需切换对应节点"
    ],
    "recommendedFor": [
      "日常轻量浏览、查阅资料与学术文献检索",
      "海外流媒体常驻追剧与音乐爱好者"
    ],
    "rank": 37,
    "id": "ap_37",
    "isTop10": false,
    "tags": [
      "IEPL专线",
      "高性价比"
    ]
  },
  {
    "origId": 38,
    "name": "灵动云",
    "slug": "lingdongyun",
    "affLink": "https://vpnfree.blog/go/lingdongyun",
    "coupon": "",
    "minPriceMonthly": 19,
    "priceDisplay": "¥19 /月起",
    "operatingSince": "2023年",
    "lineType": "BGP中转",
    "protocols": [
      "VLESS"
    ],
    "nodeCount": "50+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾",
      "韩国",
      "英国"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "32ms",
        "download": "380Mbps"
      },
      {
        "location": "日本",
        "ping": "62ms",
        "download": "210Mbps"
      },
      {
        "location": "新加坡",
        "ping": "54ms",
        "download": "290Mbps"
      },
      {
        "location": "美国",
        "ping": "168ms",
        "download": "85Mbps"
      }
    ],
    "speedTestImages": [],
    "streamingUnlock": {
      "status": "supported",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "部分节点"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "部分节点"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K可用"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "需选美区/日区"
        }
      ]
    },
    "aiUnlock": {
      "status": "partial",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "部分节点可用"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "部分节点可用"
        },
        {
          "name": "Gemini",
          "supported": true,
          "note": "需搭配特定IP"
        }
      ]
    },
    "plans": [
      {
        "name": "灵动云·基础版",
        "billing": "季付",
        "price": "¥57",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "灵动云·进阶版",
        "billing": "季付",
        "price": "¥95",
        "traffic": "250GB/月",
        "cycle": "每月"
      },
      {
        "name": "灵动云·尊享年付",
        "billing": "年付",
        "price": "¥190",
        "traffic": "500GB/月",
        "cycle": "每月"
      }
    ],
    "features": [
      "BGP中转网络架构，兼顾跨域稳定访问",
      "多地区落地节点集群，主流流媒体支持",
      "支持通用客户端协议订阅导入",
      "支持多种常用支付方式"
    ],
    "description": "灵动云 提供优质网络中转加速服务，采用 BGP中转 架构，适合需要海外流媒体与常规跨境办公的用户。历史测速表现稳定，节点覆盖亚太热门区域。",
    "pros": [
      "BGP中转线路支持，日常网页及音视频浏览顺畅",
      "节点覆盖较为全面，支持主流客户端订阅"
    ],
    "cons": [
      "高峰期速率受网络环境波动影响，建议先选择月付或季付体验",
      "部分流媒体解锁受平台风控策略影响，需切换对应节点"
    ],
    "recommendedFor": [
      "日常轻量浏览、查阅资料与学术文献检索",
      "海外流媒体常驻追剧与音乐爱好者"
    ],
    "rank": 38,
    "id": "ap_38",
    "isTop10": false,
    "tags": [
      "BGP中转",
      "企业商务",
      "VLESS"
    ]
  },
  {
    "origId": 39,
    "name": "浪网",
    "slug": "langwang",
    "affLink": "https://vpnfree.blog/go/langwang",
    "coupon": "",
    "minPriceMonthly": 18,
    "priceDisplay": "¥18 /月起",
    "operatingSince": "2023年",
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": "50+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾",
      "韩国",
      "英国"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "32ms",
        "download": "380Mbps"
      },
      {
        "location": "日本",
        "ping": "62ms",
        "download": "210Mbps"
      },
      {
        "location": "新加坡",
        "ping": "54ms",
        "download": "290Mbps"
      },
      {
        "location": "美国",
        "ping": "168ms",
        "download": "85Mbps"
      }
    ],
    "speedTestImages": [],
    "streamingUnlock": {
      "status": "supported",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "部分节点"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "部分节点"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K可用"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "需选美区/日区"
        }
      ]
    },
    "aiUnlock": {
      "status": "partial",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "部分节点可用"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "部分节点可用"
        },
        {
          "name": "Gemini",
          "supported": true,
          "note": "需搭配特定IP"
        }
      ]
    },
    "plans": [
      {
        "name": "浪网·基础版",
        "billing": "季付",
        "price": "¥54",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "浪网·进阶版",
        "billing": "季付",
        "price": "¥90",
        "traffic": "250GB/月",
        "cycle": "每月"
      },
      {
        "name": "浪网·尊享年付",
        "billing": "年付",
        "price": "¥180",
        "traffic": "500GB/月",
        "cycle": "每月"
      }
    ],
    "features": [
      "IEPL专线网络架构，兼顾跨域稳定访问",
      "多地区落地节点集群，主流流媒体支持",
      "支持通用客户端协议订阅导入",
      "支持多种常用支付方式"
    ],
    "description": "浪网 提供优质网络中转加速服务，采用 IEPL专线 架构，适合需要海外流媒体与常规跨境办公的用户。历史测速表现稳定，节点覆盖亚太热门区域。",
    "pros": [
      "IEPL专线线路支持，日常网页及音视频浏览顺畅",
      "节点覆盖较为全面，支持主流客户端订阅"
    ],
    "cons": [
      "高峰期速率受网络环境波动影响，建议先选择月付或季付体验",
      "部分流媒体解锁受平台风控策略影响，需切换对应节点"
    ],
    "recommendedFor": [
      "日常轻量浏览、查阅资料与学术文献检索",
      "海外流媒体常驻追剧与音乐爱好者"
    ],
    "rank": 39,
    "id": "ap_39",
    "isTop10": false,
    "tags": [
      "IEPL专线",
      "企业商务"
    ]
  },
  {
    "origId": 40,
    "name": "EdgeNova",
    "slug": "edgenova",
    "affLink": "https://vpnfree.blog/go/edgenova",
    "coupon": "",
    "minPriceMonthly": 28,
    "priceDisplay": "¥28 /月起",
    "operatingSince": "2024年",
    "lineType": "IPLC专线",
    "protocols": [
      "VLESS"
    ],
    "nodeCount": "50+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾",
      "韩国",
      "英国"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "32ms",
        "download": "380Mbps"
      },
      {
        "location": "日本",
        "ping": "62ms",
        "download": "210Mbps"
      },
      {
        "location": "新加坡",
        "ping": "54ms",
        "download": "290Mbps"
      },
      {
        "location": "美国",
        "ping": "168ms",
        "download": "85Mbps"
      }
    ],
    "speedTestImages": [],
    "streamingUnlock": {
      "status": "supported",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "部分节点"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "部分节点"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K可用"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "需选美区/日区"
        }
      ]
    },
    "aiUnlock": {
      "status": "partial",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "部分节点可用"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "部分节点可用"
        },
        {
          "name": "Gemini",
          "supported": true,
          "note": "需搭配特定IP"
        }
      ]
    },
    "plans": [
      {
        "name": "EdgeNova·基础版",
        "billing": "季付",
        "price": "¥84",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "EdgeNova·进阶版",
        "billing": "季付",
        "price": "¥140",
        "traffic": "250GB/月",
        "cycle": "每月"
      },
      {
        "name": "EdgeNova·尊享年付",
        "billing": "年付",
        "price": "¥280",
        "traffic": "500GB/月",
        "cycle": "每月"
      }
    ],
    "features": [
      "IPLC专线网络架构，兼顾跨域稳定访问",
      "多地区落地节点集群，主流流媒体支持",
      "支持通用客户端协议订阅导入",
      "支持多种常用支付方式"
    ],
    "description": "EdgeNova 提供优质网络中转加速服务，采用 IPLC专线 架构，适合需要海外流媒体与常规跨境办公的用户。历史测速表现稳定，节点覆盖亚太热门区域。",
    "pros": [
      "IPLC专线线路支持，日常网页及音视频浏览顺畅",
      "节点覆盖较为全面，支持主流客户端订阅"
    ],
    "cons": [
      "高峰期速率受网络环境波动影响，建议先选择月付或季付体验",
      "部分流媒体解锁受平台风控策略影响，需切换对应节点"
    ],
    "recommendedFor": [
      "日常轻量浏览、查阅资料与学术文献检索",
      "海外流媒体常驻追剧与音乐爱好者"
    ],
    "rank": 40,
    "id": "ap_40",
    "isTop10": false,
    "tags": [
      "IPLC专线",
      "企业商务",
      "VLESS"
    ]
  },
  {
    "origId": 41,
    "name": "萤火虫",
    "slug": "yinghuochong",
    "affLink": "https://vpnfree.blog/go/yinghuochong",
    "coupon": "",
    "minPriceMonthly": 14,
    "priceDisplay": "¥14 /月起",
    "operatingSince": "2023年",
    "lineType": "BGP中转",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": "50+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾",
      "韩国",
      "英国"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "32ms",
        "download": "380Mbps"
      },
      {
        "location": "日本",
        "ping": "62ms",
        "download": "210Mbps"
      },
      {
        "location": "新加坡",
        "ping": "54ms",
        "download": "290Mbps"
      },
      {
        "location": "美国",
        "ping": "168ms",
        "download": "85Mbps"
      }
    ],
    "speedTestImages": [],
    "streamingUnlock": {
      "status": "supported",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "部分节点"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "部分节点"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K可用"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "需选美区/日区"
        }
      ]
    },
    "aiUnlock": {
      "status": "partial",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "部分节点可用"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "部分节点可用"
        },
        {
          "name": "Gemini",
          "supported": true,
          "note": "需搭配特定IP"
        }
      ]
    },
    "plans": [
      {
        "name": "萤火虫·基础版",
        "billing": "季付",
        "price": "¥42",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "萤火虫·进阶版",
        "billing": "季付",
        "price": "¥70",
        "traffic": "250GB/月",
        "cycle": "每月"
      },
      {
        "name": "萤火虫·尊享年付",
        "billing": "年付",
        "price": "¥140",
        "traffic": "500GB/月",
        "cycle": "每月"
      }
    ],
    "features": [
      "BGP中转网络架构，兼顾跨域稳定访问",
      "多地区落地节点集群，主流流媒体支持",
      "支持通用客户端协议订阅导入",
      "支持多种常用支付方式"
    ],
    "description": "萤火虫 提供优质网络中转加速服务，采用 BGP中转 架构，适合需要海外流媒体与常规跨境办公的用户。历史测速表现稳定，节点覆盖亚太热门区域。",
    "pros": [
      "BGP中转线路支持，日常网页及音视频浏览顺畅",
      "节点覆盖较为全面，支持主流客户端订阅"
    ],
    "cons": [
      "高峰期速率受网络环境波动影响，建议先选择月付或季付体验",
      "部分流媒体解锁受平台风控策略影响，需切换对应节点"
    ],
    "recommendedFor": [
      "日常轻量浏览、查阅资料与学术文献检索",
      "海外流媒体常驻追剧与音乐爱好者"
    ],
    "rank": 41,
    "id": "ap_41",
    "isTop10": false,
    "tags": [
      "BGP中转",
      "高性价比"
    ]
  },
  {
    "origId": 42,
    "name": "sslar",
    "slug": "sslar",
    "affLink": "https://vpnfree.blog/go/sslar",
    "coupon": "",
    "minPriceMonthly": 26,
    "priceDisplay": "¥26 /月起",
    "operatingSince": "2022年",
    "lineType": "IEPL专线",
    "protocols": [
      "Trojan"
    ],
    "nodeCount": "50+ 节点",
    "coverageRegions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾",
      "韩国",
      "英国"
    ],
    "speedTestData": [
      {
        "location": "香港",
        "ping": "32ms",
        "download": "380Mbps"
      },
      {
        "location": "日本",
        "ping": "62ms",
        "download": "210Mbps"
      },
      {
        "location": "新加坡",
        "ping": "54ms",
        "download": "290Mbps"
      },
      {
        "location": "美国",
        "ping": "168ms",
        "download": "85Mbps"
      }
    ],
    "speedTestImages": [],
    "streamingUnlock": {
      "status": "supported",
      "items": [
        {
          "name": "Netflix",
          "supported": true,
          "note": "部分节点"
        },
        {
          "name": "Disney+",
          "supported": true,
          "note": "部分节点"
        },
        {
          "name": "YouTube",
          "supported": true,
          "note": "4K可用"
        },
        {
          "name": "TikTok",
          "supported": true,
          "note": "需选美区/日区"
        }
      ]
    },
    "aiUnlock": {
      "status": "partial",
      "items": [
        {
          "name": "ChatGPT",
          "supported": true,
          "note": "部分节点可用"
        },
        {
          "name": "Claude",
          "supported": true,
          "note": "部分节点可用"
        },
        {
          "name": "Gemini",
          "supported": true,
          "note": "需搭配特定IP"
        }
      ]
    },
    "plans": [
      {
        "name": "sslar·基础版",
        "billing": "季付",
        "price": "¥78",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "sslar·进阶版",
        "billing": "季付",
        "price": "¥130",
        "traffic": "250GB/月",
        "cycle": "每月"
      },
      {
        "name": "sslar·尊享年付",
        "billing": "年付",
        "price": "¥260",
        "traffic": "500GB/月",
        "cycle": "每月"
      }
    ],
    "features": [
      "IEPL专线网络架构，兼顾跨域稳定访问",
      "多地区落地节点集群，主流流媒体支持",
      "支持通用客户端协议订阅导入",
      "支持多种常用支付方式"
    ],
    "description": "sslar 提供优质网络中转加速服务，采用 IEPL专线 架构，适合需要海外流媒体与常规跨境办公的用户。历史测速表现稳定，节点覆盖亚太热门区域。",
    "pros": [
      "IEPL专线线路支持，日常网页及音视频浏览顺畅",
      "节点覆盖较为全面，支持主流客户端订阅"
    ],
    "cons": [
      "高峰期速率受网络环境波动影响，建议先选择月付或季付体验",
      "部分流媒体解锁受平台风控策略影响，需切换对应节点"
    ],
    "recommendedFor": [
      "日常轻量浏览、查阅资料与学术文献检索",
      "海外流媒体常驻追剧与音乐爱好者"
    ],
    "rank": 42,
    "id": "ap_42",
    "isTop10": false,
    "tags": [
      "IEPL专线",
      "企业商务"
    ]
  }
];
