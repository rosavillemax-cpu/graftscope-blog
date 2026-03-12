interface ArticleFrontmatter {
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  readTime: number;
  markets?: string[];
}

interface Article {
  slug: string;
  frontmatter: ArticleFrontmatter;
  content: string;
}

const SITE_URL = "https://www.graftscope.com/blog";
const LOGO_URL = "https://www.graftscope.com/blog/graftscope-logo.png";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GraftScope",
    "url": SITE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": LOGO_URL,
      "width": 512,
      "height": 512
    },
    "description": "Hair transplant clinic management software - CRM, AI analysis, appointment system and enterprise dashboard",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": `${SITE_URL}/demo`
    },
    "sameAs": [
      "https://www.linkedin.com/company/graftscope",
      "https://twitter.com/graftscope"
    ],
    "foundingDate": "2024",
    "areaServed": [
      "TR",
      "DE",
      "GB",
      "US"
    ]
  };
}

export function generateWebsiteSchema(language: string = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "GraftScope",
    "url": SITE_URL,
    "description": language === "tr" 
      ? "Saç ekimi klinikleri için yönetim yazılımı"
      : language === "de"
      ? "Haartransplantationsklinik Management Software"
      : "Hair transplant clinic management software",
    "inLanguage": language,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE_URL}/${language === 'tr' ? '' : language + '/'}?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GraftScope",
      "url": SITE_URL
    }
  };
}

export function generateArticleSchema(
  article: Article, 
  language: string = "en",
  categoryPath?: string
) {
  const { frontmatter, slug } = article;
  const articleUrl = language === "tr" 
    ? `${SITE_URL}/articles/${slug}`
    : `${SITE_URL}/${language}/articles/${slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": frontmatter.title,
    "description": frontmatter.excerpt,
    "author": {
      "@type": "Person",
      "name": frontmatter.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "GraftScope",
      "logo": {
        "@type": "ImageObject",
        "url": LOGO_URL
      }
    },
    "datePublished": new Date(frontmatter.date).toISOString(),
    "dateModified": new Date(frontmatter.date).toISOString(),
    "url": articleUrl,
    "identifier": articleUrl,
    "inLanguage": language,
    "isPartOf": {
      "@type": "WebSite",
      "name": "GraftScope",
      "url": SITE_URL
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    },
    "articleSection": frontmatter.category,
    "wordCount": Math.floor(article.content.split(/\s+/).length),
    "timeRequired": `PT${frontmatter.readTime}M`
  };
}

export function generateBreadcrumbSchema(
  breadcrumbs: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateArticleBreadcrumbs(
  article: Article,
  language: string = "en"
) {
  const { frontmatter, slug } = article;
  
  const baseUrl = language === "tr" ? SITE_URL : `${SITE_URL}/${language}`;
  const categorySlug = frontmatter.category
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ş/g, 's')
    .replace(/ü/g, 'u');

  const homeName = language === "tr" ? "Ana Sayfa" : 
                   language === "de" ? "Startseite" : "Home";
  const categoryName = frontmatter.category;

  return generateBreadcrumbSchema([
    { name: homeName, url: baseUrl },
    { name: categoryName, url: `${baseUrl}/category/${categorySlug}` },
    { name: frontmatter.title, url: `${baseUrl}/articles/${slug}` }
  ]);
}

export function generateCategoryBreadcrumbs(
  category: string,
  language: string = "en"
) {
  const baseUrl = language === "tr" ? SITE_URL : `${SITE_URL}/${language}`;
  const categorySlug = category
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ş/g, 's')
    .replace(/ü/g, 'u');

  const homeName = language === "tr" ? "Ana Sayfa" : 
                   language === "de" ? "Startseite" : "Home";

  return generateBreadcrumbSchema([
    { name: homeName, url: baseUrl },
    { name: category, url: `${baseUrl}/category/${categorySlug}` }
  ]);
}
