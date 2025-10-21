export type Link = {
  label: string;
  href: string;
};

export type TeamMember = {
  name: string;
  role: string;
  focus: string;
  image?: string;
  technologies: string[];
  links: Link[];
};

export type ProjectModule = {
  name: string;
  description: string;
};

export type PreviousWork = {
  title: string;
  summary: string;
  href?: string;
};

export type Language = "ko" | "en";

export type HeroContent = {
  badge: string;
  subtitle: string;
  description: string;
  ctas: Link[];
  highlightLabel: string;
  highlightTitle: string;
  highlightItems: string[];
  highlightMetaPrimary: string;
  highlightMetaSecondary: string;
};

export const heroContent: Record<Language, HeroContent> = {
  ko: {
    badge: "Project Palette",
    subtitle: "캘린더 기반 자동화 & 블록 데이터 OS를 만드는 빌더팀",
    description:
      "1분 안에 계획하고, 말 한마디로 기록하며, 자동화로 삶을 정리하는 경험을 설계합니다. 운영진과 투자자, 멘토가 팀의 역량을 한눈에 이해하도록 구성했습니다.",
    ctas: [
      { label: "지원서 보기", href: "https://bit.ly/project-palette-apply" },
      { label: "포트폴리오 보기", href: "https://palette.notion.site" }
    ],
    highlightLabel: "Calendar-first",
    highlightTitle: "빌더를 위한 자동화",
    highlightItems: [
      "Zero-input 기록",
      "Flow 자동화",
      "Block 데이터 OS"
    ],
    highlightMetaPrimary: "AI 빌더톤 준비 완료",
    highlightMetaSecondary: "반응형 · 다국어 지원 · 자동화 네이티브"
  },
  en: {
    badge: "Project Palette",
    subtitle: "Builder team crafting a calendar-based automation & block data OS",
    description:
      "We design experiences that plan in under a minute, capture with a single voice command, and organize life through automation so evaluators can grasp our capabilities instantly.",
    ctas: [
      { label: "View Application", href: "https://bit.ly/project-palette-apply" },
      { label: "View Portfolio", href: "https://palette.notion.site" }
    ],
    highlightLabel: "Calendar-first",
    highlightTitle: "Automation for Builders",
    highlightItems: [
      "Zero-input logging",
      "Flow automation",
      "Block data OS"
    ],
    highlightMetaPrimary: "AI Builderthon Ready",
    highlightMetaSecondary: "Responsive · Multi-language Ready · Automation Native"
  }
};

export type MissionContent = {
  eyebrow: string;
  headline: string;
  description: string;
  statements: string[];
};

export const missionContent: Record<Language, MissionContent> = {
  ko: {
    eyebrow: "팀 미션",
    headline: "Calendar-first, Zero-input, Automation",
    description: "우리가 풀고자 하는 문제와 설계 철학을 세 가지 키워드로 요약합니다.",
    statements: [
      "캘린더를 중심으로 사람과 시스템을 연결하는 운영 자동화를 구현합니다.",
      "입력 부담을 줄이는 Zero-Input 경험 설계로 높은 사용자 잔존을 유도합니다.",
      "데이터 블록 OS를 구축해 팀과 개인의 워크플로를 일관된 구조로 정리합니다."
    ]
  },
  en: {
    eyebrow: "Our Mission",
    headline: "Calendar-first, Zero-input, Automation",
    description: "We summarize the problem space and design philosophy in three statements.",
    statements: [
      "We connect people with systems around the calendar to deliver operational automation.",
      "Zero-input experience design removes friction and sustains user retention.",
      "A block-based data OS keeps team and personal workflows aligned in a consistent structure."
    ]
  }
};

export type SectionCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

export const teamSectionCopy: Record<Language, SectionCopy> = {
  ko: {
    eyebrow: "팀 소개",
    title: "실력 있는 빌더들이 캘린더 자동화를 현실로 만듭니다",
    description:
      "제품 설계, UX 엔지니어링, 자동화 아키텍처까지. 서로 다른 역량이 하나의 빌더톤 팀으로 모였습니다."
  },
  en: {
    eyebrow: "Meet the Team",
    title: "Experienced builders bring calendar automation to life",
    description:
      "From product architecture to UX engineering and automation, complementary skills form one builderthon team."
  }
};

export const teamMembers: Record<Language, TeamMember[]> = {
  ko: [
    {
      name: "Hyeok Su Lee",
      role: "프로덕트 아키텍트",
      focus:
        "생산성 자동화와 데이터 모델링을 설계하며, 전반적인 제품 방향성을 이끕니다.",
      technologies: ["Next.js", "TypeScript", "Prisma", "Notion API"],
      links: [
        { label: "LinkedIn", href: "https://linkedin.com/in/hyeoksu" },
        { label: "GitHub", href: "https://github.com/hyeoksu" },
        { label: "Notion", href: "https://hyeoksu.notion.site" }
      ]
    },
    {
      name: "Minji Park",
      role: "UX 엔지니어",
      focus: "복잡한 워크플로를 직관적인 인터랙션과 감각적인 UI 모션으로 번역합니다.",
      technologies: ["Framer Motion", "Figma", "Tailwind CSS", "Storybook"],
      links: [
        { label: "Behance", href: "https://behance.net/minjipark" },
        { label: "GitHub", href: "https://github.com/minji" },
        { label: "Figma", href: "https://www.figma.com/@minji" }
      ]
    },
    {
      name: "Daniel Choi",
      role: "자동화 엔지니어",
      focus:
        "캘린더 시그널을 기반으로 음성 입력과 블록 데이터 엔진을 연결하고 자동화를 배포합니다.",
      technologies: ["Python", "Supabase", "Temporal", "LLM Agents"],
      links: [
        { label: "GitHub", href: "https://github.com/danielchoi" },
        { label: "LinkedIn", href: "https://linkedin.com/in/danielchoi" }
      ]
    }
  ],
  en: [
    {
      name: "Hyeok Su Lee",
      role: "Product Architect",
      focus:
        "Designs productivity automation and data models while steering the overall product direction.",
      technologies: ["Next.js", "TypeScript", "Prisma", "Notion API"],
      links: [
        { label: "LinkedIn", href: "https://linkedin.com/in/hyeoksu" },
        { label: "GitHub", href: "https://github.com/hyeoksu" },
        { label: "Notion", href: "https://hyeoksu.notion.site" }
      ]
    },
    {
      name: "Minji Park",
      role: "UX Engineer",
      focus:
        "Translates complex workflows into intuitive interactions and expressive UI motion.",
      technologies: ["Framer Motion", "Figma", "Tailwind CSS", "Storybook"],
      links: [
        { label: "Behance", href: "https://behance.net/minjipark" },
        { label: "GitHub", href: "https://github.com/minji" },
        { label: "Figma", href: "https://www.figma.com/@minji" }
      ]
    },
    {
      name: "Daniel Choi",
      role: "Automation Engineer",
      focus:
        "Connects voice input and the block data engine with calendar signals to ship automation.",
      technologies: ["Python", "Supabase", "Temporal", "LLM Agents"],
      links: [
        { label: "GitHub", href: "https://github.com/danielchoi" },
        { label: "LinkedIn", href: "https://linkedin.com/in/danielchoi" }
      ]
    }
  ]
};

export type ProjectOverviewContent = {
  eyebrow: string;
  name: string;
  summary: string;
  differentiatorHeading: string;
  differentiator: string;
  modules: ProjectModule[];
};

export const projectOverview: Record<Language, ProjectOverviewContent> = {
  ko: {
    eyebrow: "프로젝트",
    name: "Project Palette",
    summary:
      "캘린더 이벤트, 음성 입력, 자동화 레시피를 하나의 블록 데이터 OS로 통합해 업무 운영을 자동화하는 엔진입니다.",
    differentiatorHeading: "왜 차별적인가?",
    differentiator:
      "단순 UI 도구가 아닌, 시간 컨텍스트와 자동화를 기본으로 설계된 엔진으로 고도화한 반복 업무를 지원합니다.",
    modules: [
      {
        name: "1MP (One-Minute Planner)",
        description:
          "음성 명령과 텍스트 입력을 결합해 1분 안에 계획을 자동 구성하고 캘린더에 배치합니다."
      },
      {
        name: "ZIC (Zero-Input Capture)",
        description:
          "대화형 인터페이스를 통해 후속 정리가 필요 없는 캡처 경험을 제공합니다."
      },
      {
        name: "Flow Engine",
        description:
          "캘린더 이벤트를 트리거로 삼아 자동화를 확장하고 팀 내 공유 템플릿을 제공합니다."
      },
      {
        name: "Block-DB",
        description:
          "연결된 데이터 블록으로 프로젝트, 태스크, 리소스를 유연하게 매핑합니다."
      }
    ]
  },
  en: {
    eyebrow: "Project",
    name: "Project Palette",
    summary:
      "An engine that unifies calendar events, voice input, and automation recipes into a block data OS to automate operations.",
    differentiatorHeading: "Why it stands out",
    differentiator:
      "Rather than a UI tool, it is engineered with time context and automation at the core to support advanced repeatable work.",
    modules: [
      {
        name: "1MP (One-Minute Planner)",
        description:
          "Combines voice commands and text input to assemble plans in under a minute and schedule them automatically."
      },
      {
        name: "ZIC (Zero-Input Capture)",
        description:
          "Delivers a conversational capture experience that needs no clean-up afterward."
      },
      {
        name: "Flow Engine",
        description:
          "Expands automation with calendar events as triggers and provides shared templates across the team."
      },
      {
        name: "Block-DB",
        description:
          "Maps projects, tasks, and resources through connected data blocks for flexible orchestration."
      }
    ]
  }
};

export type PreviousWorkContent = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  projects: PreviousWork[];
};

export const previousWorkContent: Record<Language, PreviousWorkContent> = {
  ko: {
    eyebrow: "이전 작업",
    title: "실행력으로 증명한 운영 자동화 사례",
    description:
      "졸업 전시 운영부터 브랜드 리디자인까지, 복잡한 캘린더 기반 워크플로를 자동화한 경험을 공유합니다.",
    ctaLabel: "자세히 보기 →",
    projects: [
      {
        title: "2023 Graduation Expo Automation",
        summary:
          "행사 준비를 위해 일정, 자원, 커뮤니케이션을 연결한 운영 자동화 시스템 구축.",
        href: "https://expo-automation.notion.site"
      },
      {
        title: "Brand System Redesign",
        summary:
          "리테일 프랜차이즈의 브랜드 자산과 트레이닝 모듈을 통합 블록 구조로 재편.",
        href: "https://brand-ops.notion.site"
      },
      {
        title: "Franchise Operations Console",
        summary:
          "캘린더 기반 현장 방문 스케줄링과 자동화 보고 워크플로를 엔지니어링."
      }
    ]
  },
  en: {
    eyebrow: "Previous Work",
    title: "Operational automation proven by execution",
    description:
      "From graduation expos to brand redesign, we automate complex calendar-based workflows and share the outcomes.",
    ctaLabel: "View details →",
    projects: [
      {
        title: "2023 Graduation Expo Automation",
        summary:
          "Built an operating automation system that connects schedules, resources, and communications for event prep.",
        href: "https://expo-automation.notion.site"
      },
      {
        title: "Brand System Redesign",
        summary:
          "Reorganized brand assets and training modules for a retail franchise into an integrated block structure.",
        href: "https://brand-ops.notion.site"
      },
      {
        title: "Franchise Operations Console",
        summary:
          "Engineered calendar-driven field scheduling and automated reporting workflows."
      }
    ]
  }
};

export type FooterContent = {
  tagline: string;
  links: Link[];
};

export const footerContent: Record<Language, FooterContent> = {
  ko: {
    tagline: "캘린더 퍼스트 · 제로 입력 · 자동화 빌더팀",
    links: [
      { label: "이메일", href: "mailto:hello@projectpalette.team" },
      { label: "GitHub", href: "https://github.com/project-palette" },
      { label: "Notion", href: "https://palette.notion.site" },
      { label: "LinkedIn", href: "https://linkedin.com/company/projectpalette" }
    ]
  },
  en: {
    tagline: "Calendar-first · Zero-input · Automation Builder Team",
    links: [
      { label: "Email", href: "mailto:hello@projectpalette.team" },
      { label: "GitHub", href: "https://github.com/project-palette" },
      { label: "Notion", href: "https://palette.notion.site" },
      { label: "LinkedIn", href: "https://linkedin.com/company/projectpalette" }
    ]
  }
};
