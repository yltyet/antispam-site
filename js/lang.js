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
  }
  // 其他页面内容在各自页面脚本中定义
};

function getLang() {
  const saved = localStorage.getItem('lang');
  if (saved) return saved;
  const navLang = navigator.language || navigator.userLanguage;
  return navLang.startsWith('en') ? 'en' : 'zh';
}

function setLang(lang) {
  localStorage.setItem('lang', lang);
  location.reload();
}

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

function initPage(pageId) {
  const lang = getLang();
  const pageContent = contentData[pageId] ? contentData[pageId][lang] : null;
  if (!pageContent) {
    // 页面内容在页面脚本中定义，先渲染导航
    renderNav({ nav: null, lang });
    return { lang };
  }
  pageContent.lang = lang;
  document.title = pageContent.title;
  renderNav(pageContent);
  return pageContent;
}
