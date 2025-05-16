const contentData = {
  index: {
    zh: {
      title: "网络防炸知识大全",
      nav: {
        home: "首页",
        attacks: "攻击类型",
        defense: "防护措施",
        tools: "工具推荐",
        bestPractices: "最佳实践"
      },
      sections: {
        intro: "欢迎来到网络防炸知识大全网站，这里为您介绍网络安全的基础知识和实用技巧。",
      },
      footer: "© 2025 网络防炸知识大全"
    },
    en: {
      title: "Network Defense Knowledge",
      nav: {
        home: "Home",
        attacks: "Attack Types",
        defense: "Defense Measures",
        tools: "Tools",
        bestPractices: "Best Practices"
      },
      sections: {
        intro: "Welcome to the Network Defense Knowledge website, where we introduce basic network security knowledge and practical tips.",
      },
      footer: "© 2025 Network Defense Knowledge"
    }
  },
  attacks: {
    zh: {
      title: "常见网络攻击类型",
      nav: null, // 用 index 的nav
      attacks: [
        "DDoS攻击：通过大量请求淹没目标服务器，导致服务瘫痪。",
        "SQL注入：利用漏洞向数据库注入恶意代码，窃取或破坏数据。",
        "跨站脚本攻击（XSS）：在网页中注入恶意脚本，窃取用户信息或劫持会话。",
        "钓鱼攻击：伪装成可信网站骗取用户敏感信息。"
      ],
      footer: "© 2025 网络防炸知识大全"
    },
    en: {
      title: "Common Network Attack Types",
      nav: null,
      attacks: [
        "DDoS attacks: Overwhelm target servers with massive requests, causing service outages.",
        "SQL Injection: Exploiting vulnerabilities to inject malicious code into databases, stealing or damaging data.",
        "Cross-Site Scripting (XSS): Injecting malicious scripts into web pages to steal user info or hijack sessions.",
        "Phishing: Pretending to be trusted sites to steal sensitive user information."
      ],
      footer: "© 2025 Network Defense Knowledge"
    }
  },
  defense: {
    zh: {
      title: "网络防炸常见措施",
      nav: null,
      defenses: [
        "防火墙：过滤恶意流量，阻止未授权访问。",
        "流量监控：实时监控网络流量，及时发现异常。",
        "访问控制：限制用户权限，防止非法操作。",
        "DDoS防护服务：使用云端或硬件设备缓解攻击。",
        "内容分发网络（CDN）：分散流量压力，提高抗攻击能力。"
      ],
      footer: "© 2025 网络防炸知识大全"
    },
    en: {
      title: "Common Network Defense Measures",
      nav: null,
      defenses: [
        "Firewall: Filters malicious traffic and blocks unauthorized access.",
        "Traffic Monitoring: Real-time monitoring of network traffic to detect anomalies promptly.",
        "Access Control: Restricts user permissions to prevent unauthorized actions.",
        "DDoS Protection Services: Uses cloud or hardware solutions to mitigate attacks.",
        "Content Delivery Network (CDN): Distributes traffic load to improve resistance to attacks."
      ],
      footer: "© 2025 Network Defense Knowledge"
    }
  },
  tools: {
    zh: {
      title: "实用工具推荐",
      nav: null,
      tools: [
        {
          name: "Cloudflare",
          intro: "Cloudflare 是一个提供网站安全和加速服务的平台，能有效防止DDoS攻击。",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Cloudflare_logo.svg/2560px-Cloudflare_logo.svg.png",
          steps: [
            "访问 https://www.cloudflare.com/ 并注册一个账号。",
            "添加你的网站域名到 Cloudflare。",
            "按照提示修改域名的 DNS 服务器指向 Cloudflare。",
            "启用 DDoS 防护和防火墙规则。"
          ],
          tip: "确保你有权限修改域名的 DNS 设置。",
          video: {
            text: "Cloudflare 新手教程（中文）",
            url: "https://www.youtube.com/watch?v=Q6v6v6Xq6xA"
          }
        },
        {
          name: "Wireshark",
          intro: "Wireshark 是一款网络协议分析工具，可以帮助你查看网络数据包，发现异常流量。",
          img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Wireshark_Logo.png",
          steps: [
            "访问 https://www.wireshark.org/ 下载并安装软件。",
            "打开 Wireshark，选择你正在使用的网络接口开始抓包。",
            "观察捕获的数据包，查找异常或大量重复请求。",
            "结合教程学习如何分析数据包。"
          ],
          tip: "抓包时请确保你有权限监控该网络，避免侵犯隐私。",
          video: {
            text: "Wireshark 入门教程（英文）",
            url: "https://www.youtube.com/watch?v=TkCSr30UojM"
          }
        },
        {
          name: "Snort",
          intro: "Snort 是开源的入侵检测系统，可以实时监控网络流量并报警。",
          img: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Snort_logo.png",
          steps: [
            "访问 https://www.snort.org/ 下载适合你系统的版本。",
            "按照官方文档安装并配置 Snort。",
            "设置规则检测常见攻击行为。",
            "运行 Snort，查看报警日志。"
          ],
          tip: "配置规则时建议参考官方和社区提供的模板。",
          video: {
            text: "Snort 安装与配置教程（英文）",
            url: "https://www.youtube.com/watch?v=5v6v6v6v6v6"
          }
        }
      ],
      footer: "© 2025 网络防炸知识大全"
    },
    en: {
      title: "Recommended Tools",
      nav: null,
      tools: [
        {
          name: "Cloudflare",
          intro: "Cloudflare is a platform that provides website security and acceleration services, effectively preventing DDoS attacks.",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Cloudflare_logo.svg/2560px-Cloudflare_logo.svg.png",
          steps: [
            "Visit https://www.cloudflare.com/ and sign up for an account.",
            "Add your website domain to Cloudflare.",
            "Follow the instructions to change your domain's DNS servers to point to Cloudflare.",
            "Enable DDoS protection and firewall rules."
          ],
          tip: "Make sure you have permission to change your domain's DNS settings.",
          video: {
            text: "Cloudflare Beginner Tutorial (English)",
            url: "https://www.youtube.com/watch?v=Q6v6v6Xq6xA"
          }
        },
        {
          name: "Wireshark",
          intro: "Wireshark is a network protocol analyzer that helps you view network packets and detect abnormal traffic.",
          img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Wireshark_Logo.png",
          steps: [
            "Visit https://www.wireshark.org/ to download and install the software.",
            "Open Wireshark and select your active network interface to start capturing packets.",
            "Observe captured packets and look for anomalies or repeated requests.",
            "Learn how to analyze packets with tutorials."
          ],
          tip: "Ensure you have permission to monitor the network to avoid privacy violations.",
          video: {
            text: "Wireshark Beginner Tutorial (English)",
            url: "https://www.youtube.com/watch?v=TkCSr30UojM"
          }
        },
        {
          name: "Snort",
          intro: "Snort is an open-source intrusion detection system that monitors network traffic and alerts in real-time.",
          img: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Snort_logo.png",
          steps: [
            "Visit https://www.snort.org/ to download the version suitable for your system.",
            "Install and configure Snort according to the official documentation.",
            "Set up rules to detect common attack behaviors.",
            "Run Snort and check alert logs."
          ],
          tip: "Refer to official and community templates when configuring rules.",
          video: {
            text: "Snort Installation and Configuration Tutorial (English)",
            url: "https://www.youtube.com/watch?v=5v6v6v6v6v6"
          }
        }
      ],
      footer: "© 2025 Network Defense Knowledge"
    }
  }
};

// 获取语言，优先 localStorage，默认浏览器语言
function getLang() {
  const saved = localStorage.getItem('lang');
  if (saved) return saved;
  const navLang = navigator.language || navigator.userLanguage;
  return navLang.startsWith('en') ? 'en' : 'zh';
}

// 设置语言，保存并刷新
function setLang(lang) {
  localStorage.setItem('lang', lang);
  location.reload();
}

// 渲染导航栏
function renderNav(content) {
  const nav = document.getElementById('nav');
  const navData = content.nav || contentData.index[getLang()].nav;
  const lang = getLang();
  nav.innerHTML = `
    <a href="index.html">${navData.home}</a>
    <a href="attacks.html">${navData.attacks}</a>
    <a href="defense.html">${navData.defense}</a>
    <a href="tools.html">${navData.tools}</a>
    <a href="best-practices.html">${navData.bestPractices}</a>
    <span class="lang-switch" onclick="setLang('${lang === 'zh' ? 'en' : 'zh'}')">
      ${lang === 'zh' ? 'English' : '中文'}
    </span>
  `;
}

// 初始化页面，传入页面标识
function initPage(pageId) {
  const lang = getLang();
  const pageContent = contentData[pageId][lang];
  pageContent.lang = lang;
  document.title = pageContent.title;
  renderNav(pageContent);
  return pageContent;
}
