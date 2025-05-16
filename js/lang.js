// 语言内容示例，按页面不同可扩展
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
  // 其他页面内容结构类似，示例见后续页面示范
};

// 获取语言，优先从 localStorage 读取，默认根据浏览器语言
function getLang() {
  const saved = localStorage.getItem('lang');
  if (saved) return saved;
  const navLang = navigator.language || navigator.userLanguage;
  return navLang.startsWith('en') ? 'en' : 'zh';
}

// 设置语言，保存到 localStorage
function setLang(lang) {
  localStorage.setItem('lang', lang);
  location.reload();
}

// 渲染导航栏
function renderNav(content) {
  const nav = document.getElementById('nav');
  nav.innerHTML = `
    <a href="index.html">${content.nav.home}</a>
    <a href="attacks.html">${content.nav.attacks}</a>
    <a href="defense.html">${content.nav.defense}</a>
    <a href="tools.html">${content.nav.tools}</a>
    <a href="best-practices.html">${content.nav.bestPractices}</a>
    <span class="lang-switch" onclick="setLang('${content.lang === 'zh' ? 'en' : 'zh'}')">
      ${content.lang === 'zh' ? 'English' : '中文'}
    </span>
  `;
}

// 页面初始化函数，传入页面标识
function initPage(pageId) {
  const lang = getLang();
  const pageContent = contentData[pageId][lang];
  pageContent.lang = lang;

  document.title = pageContent.title;
  renderNav(pageContent);

  // 页面内容填充由各页面自行实现
  return pageContent;
}
