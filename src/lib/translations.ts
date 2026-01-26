export type Language = 'zh' | 'en';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    products: string;
    about: string;
    blog: string;
    contact: string;
    getStarted: string;
  };

  // Home Page
  home: {
    badge: string;
    badgeSubtitle: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: {
      conversion: string;
      conversionLabel: string;
      cycle: string;
      cycleLabel: string;
      savings: string;
      savingsLabel: string;
      languages: string;
      languagesLabel: string;
    };
    services: {
      title: string;
      subtitle: string;
      marketInsight: {
        title: string;
        subtitle: string;
        description: string;
        badge: string;
        link: string;
      };
      smartOutreach: {
        title: string;
        subtitle: string;
        description: string;
        badge: string;
        link: string;
      };
      dataSync: {
        title: string;
        subtitle: string;
        description: string;
        badge: string;
        link: string;
      };
      industry: {
        title: string;
        subtitle: string;
        description: string;
        badge: string;
        link: string;
      };
    };
    advantages: {
      title: string;
      ai: {
        title: string;
        description: string;
      };
      global: {
        title: string;
        description: string;
      };
      efficient: {
        title: string;
        description: string;
      };
      data: {
        title: string;
        description: string;
      };
    };
    about: {
      badge: string;
      title: string;
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
      learnMore: string;
      stats: {
        conversion: string;
        conversionLabel: string;
        cycle: string;
        cycleLabel: string;
        savings: string;
        savingsLabel: string;
        languages: string;
        languagesLabel: string;
      };
    };
    cta: {
      title: string;
      subtitle: string;
      description: string;
      industries: string;
      features: string;
      primary: string;
      secondary: string;
      location: string;
      tagline: string;
    };
  };

  // Footer
  footer: {
    product: string;
    company: string;
    resources: string;
    legal: string;
    links: {
      product: {
        services: string;
        marketInsight: string;
        smartOutreach: string;
        dataSync: string;
      };
      company: {
        about: string;
        blog: string;
        careers: string;
        contact: string;
      };
      resources: {
        industry: string;
        solutions: string;
        support: string;
        cases: string;
      };
      legal: {
        privacy: string;
        terms: string;
        cookies: string;
      };
    };
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  zh: {
    nav: {
      home: '首页',
      products: '解决方案',
      about: '关于我们',
      blog: '博客',
      contact: '联系我们',
      getStarted: '了解解决方案',
    },
    home: {
      badge: '新加坡 · AI智能体出海',
      badgeSubtitle: 'AI Agents for Global Expansion',
      title: '魔力奇 · AI智能体',
      titleHighlight: '× 全球出海',
      subtitle: '基于AI智能体，助力企业高效出海。依托大模型与智能体技术，提供市场洞察、智能拓客、多语种沟通、合规风控与运营协同一站式解决方案',
      ctaPrimary: '了解解决方案',
      ctaSecondary: '联系我们',
      stats: {
        conversion: '2.1x',
        conversionLabel: '线索转化效率提升',
        cycle: '4-8周',
        cycleLabel: '典型方案落地周期',
        savings: '30-40%',
        savingsLabel: '节省一线人力成本',
        languages: '100+',
        languagesLabel: '支持多语种沟通',
      },
      services: {
        title: '一站式出海服务',
        subtitle: '从市场洞察到运营协同，用一套智能体系统跑通出海全流程',
        marketInsight: {
          title: '市场洞察',
          subtitle: '品牌与市场',
          description: '基于公开数据、社交声量与行业报告，快速建立目标区域的机会图谱和品牌定位建议',
          badge: '市场洞察',
          link: '了解详情',
        },
        smartOutreach: {
          title: '智能拓客',
          subtitle: '获客与沟通',
          description: '多语种外联、站内外客服与社媒私信统一由智能体协同处理，保证语气统一、合规可控',
          badge: '智能拓客',
          link: '了解详情',
        },
        dataSync: {
          title: '数据协同',
          subtitle: '实时看板',
          description: '一眼看到每个市场的线索、转化与风险提示，24/7智能体在线',
          badge: '数据协同',
          link: '了解详情',
        },
        industry: {
          title: '行业应用',
          subtitle: '适用场景',
          description: '适用于 B2B SaaS、跨境电商与高客单制造企业的全球化拓展',
          badge: '行业应用',
          link: '了解详情',
        },
      },
      advantages: {
        title: '我们关注每一次出海尝试的实际结果，用数据说话',
        ai: {
          title: 'AI智能体技术',
          description: '基于大模型与智能体编排',
        },
        global: {
          title: '全球市场覆盖',
          description: '支持100+多语种沟通',
        },
        efficient: {
          title: '高效低成本',
          description: '节省30-40%一线人力成本',
        },
        data: {
          title: '数据驱动决策',
          description: '线索转化效率提升2.1x',
        },
      },
      about: {
        badge: '关于魔力奇',
        title: '数据驱动决策，全球化视野',
        paragraph1: '魔力奇是一家基于人工智能的智能体项目，专注帮助企业高效出海。我们相信，像农夫山泉强调"水源地"，魔力奇强调的是"数据与智能体"。',
        paragraph2: '数据驱动决策：我们以真实数据驱动决策，用可解释的智能体编排替代零散工具，帮助团队看清每一次投放、每一封邮件、每一通外呼背后的效果。',
        paragraph3: '全球化视野：依托大模型与智能体技术，为企业提供市场洞察、智能拓客、多语种沟通、合规风控与运营协同，助力企业低成本进入全球市场，提升获客效率与转化效果。',
        learnMore: '了解更多',
        stats: {
          conversion: '2.1x',
          conversionLabel: '转化效率提升',
          cycle: '4-8周',
          cycleLabel: '方案落地周期',
          savings: '30-40%',
          savingsLabel: '节省人力成本',
          languages: '100+',
          languagesLabel: '多语种支持',
        },
      },
      cta: {
        title: '开启全球化之旅',
        subtitle: '让我们一起探讨如何通过AI智能体助力您的企业高效出海',
        description: '',
        industries: '适用于 B2B SaaS、跨境电商与高客单制造企业',
        features: '市场洞察 · 智能拓客 · 多语种沟通 · 实时看板监控',
        primary: '查看典型出海方案',
        secondary: '了解更多',
        location: '新加坡 · AI智能体出海解决方案',
        tagline: '24/7 智能体在线 · 实时看板监控',
      },
    },
    footer: {
      product: '产品服务',
      company: '公司',
      resources: '资源',
      legal: '法律',
      links: {
        product: {
          services: '核心服务',
          marketInsight: '市场洞察',
          smartOutreach: '智能拓客',
          dataSync: '数据协同',
        },
        company: {
          about: '关于魔力奇',
          blog: '博客',
          careers: '加入我们',
          contact: '联系我们',
        },
        resources: {
          industry: '行业应用',
          solutions: '典型方案',
          support: '技术支持',
          cases: '案例研究',
        },
        legal: {
          privacy: '隐私政策',
          terms: '服务条款',
          cookies: 'Cookie政策',
        },
      },
      copyright: '魔力奇 Molycure',
    },
  },
  en: {
    nav: {
      home: 'Home',
      products: 'Solutions',
      about: 'About',
      blog: 'Blog',
      contact: 'Contact',
      getStarted: 'Get Started',
    },
    home: {
      badge: 'Singapore · AI Agents for Global Expansion',
      badgeSubtitle: 'AI智能体全球出海',
      title: 'Molycure · AI Agents',
      titleHighlight: '× Global Expansion',
      subtitle: 'Empower enterprises to expand globally with AI agents. Leveraging large language models and agent orchestration, we provide one-stop solutions including market insights, intelligent outreach, multilingual communication, compliance risk control, and operational collaboration.',
      ctaPrimary: 'Explore Solutions',
      ctaSecondary: 'Contact Us',
      stats: {
        conversion: '2.1x',
        conversionLabel: 'Lead Conversion Efficiency',
        cycle: '4-8 Weeks',
        cycleLabel: 'Typical Implementation Cycle',
        savings: '30-40%',
        savingsLabel: 'Labor Cost Savings',
        languages: '100+',
        languagesLabel: 'Multilingual Support',
      },
      services: {
        title: 'One-Stop Global Expansion Services',
        subtitle: 'From market insights to operational collaboration, run the entire global expansion process with one intelligent agent system',
        marketInsight: {
          title: 'Market Insights',
          subtitle: 'Brand & Market',
          description: 'Quickly establish opportunity maps and brand positioning recommendations for target regions based on public data, social sentiment, and industry reports',
          badge: 'Insights',
          link: 'Learn More',
        },
        smartOutreach: {
          title: 'Smart Outreach',
          subtitle: 'Acquisition & Communication',
          description: 'Multilingual outreach, on-site and off-site customer service, and social media messaging are unified and handled by intelligent agents, ensuring consistent tone and compliant control',
          badge: 'Outreach',
          link: 'Learn More',
        },
        dataSync: {
          title: 'Data Collaboration',
          subtitle: 'Real-time Dashboard',
          description: 'See leads, conversions, and risk alerts for each market at a glance, with 24/7 intelligent agent online',
          badge: 'Dashboard',
          link: 'Learn More',
        },
        industry: {
          title: 'Industry Applications',
          subtitle: 'Use Cases',
          description: 'Suitable for B2B SaaS, cross-border e-commerce, and high-value manufacturing enterprises for global expansion',
          badge: 'Industries',
          link: 'Learn More',
        },
      },
      advantages: {
        title: 'We focus on the actual results of every global expansion attempt, backed by data',
        ai: {
          title: 'AI Agent Technology',
          description: 'Based on large models and agent orchestration',
        },
        global: {
          title: 'Global Market Coverage',
          description: 'Support for 100+ languages',
        },
        efficient: {
          title: 'High Efficiency, Low Cost',
          description: 'Save 30-40% of frontline labor costs',
        },
        data: {
          title: 'Data-Driven Decisions',
          description: '2.1x improvement in lead conversion efficiency',
        },
      },
      about: {
        badge: 'About Molycure',
        title: 'Data-Driven Decisions, Global Vision',
        paragraph1: 'Molycure is an AI agent project focused on helping enterprises expand globally efficiently. We believe that just as Nongfu Spring emphasizes "water source," Molycure emphasizes "data and intelligent agents."',
        paragraph2: 'Data-Driven Decisions: We drive decisions with real data, replacing fragmented tools with explainable agent orchestration, helping teams see the effects behind every campaign, every email, and every outbound call.',
        paragraph3: 'Global Vision: Leveraging large language models and agent technology, we provide market insights, intelligent outreach, multilingual communication, compliance risk control, and operational collaboration to help enterprises enter global markets at low cost and improve customer acquisition efficiency and conversion rates.',
        learnMore: 'Learn More',
        stats: {
          conversion: '2.1x',
          conversionLabel: 'Conversion Efficiency',
          cycle: '4-8 Weeks',
          cycleLabel: 'Implementation Cycle',
          savings: '30-40%',
          savingsLabel: 'Cost Savings',
          languages: '100+',
          languagesLabel: 'Languages',
        },
      },
      cta: {
        title: 'Start Your Global Journey',
        subtitle: 'Let\'s explore how AI agents can help your enterprise expand globally efficiently',
        description: '',
        industries: 'Suitable for B2B SaaS, cross-border e-commerce, and high-value manufacturing enterprises',
        features: 'Market Insights · Smart Outreach · Multilingual Communication · Real-time Dashboard',
        primary: 'View Typical Solutions',
        secondary: 'Learn More',
        location: 'Singapore · AI Agent Global Expansion Solutions',
        tagline: '24/7 Agent Online · Real-time Dashboard Monitoring',
      },
    },
    footer: {
      product: 'Products',
      company: 'Company',
      resources: 'Resources',
      legal: 'Legal',
      links: {
        product: {
          services: 'Core Services',
          marketInsight: 'Market Insights',
          smartOutreach: 'Smart Outreach',
          dataSync: 'Data Collaboration',
        },
        company: {
          about: 'About Molycure',
          blog: 'Blog',
          careers: 'Careers',
          contact: 'Contact',
        },
        resources: {
          industry: 'Industries',
          solutions: 'Solutions',
          support: 'Support',
          cases: 'Case Studies',
        },
        legal: {
          privacy: 'Privacy Policy',
          terms: 'Terms of Service',
          cookies: 'Cookie Policy',
        },
      },
      copyright: 'Molycure',
    },
  },
};
