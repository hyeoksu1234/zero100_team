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
  title: string;
  subtitle: string;
  description: string[];
  ctas: Link[];
  highlightLabel: string;
  highlightTitle: string;
  highlightItems: string[];
  highlightMetaPrimary: string;
  highlightMetaSecondary: string;
};

export const heroContent: Record<Language, HeroContent> = {
  ko: {
    badge: "Project Flow",
    title: "정리하지 않아도 정리되는 하루,",
    subtitle:
      "AI 노트 & 업무 코파일럿",
    description: [
      "파일·링크·음성·스크린샷을 AI가 자동으로 정리·요약·추천해",
      "개인의 흐름을 지키고 팀 협업까지 확장합니다."
    ],
    ctas: [
      { label: "문의하기", href: "mailto:product@flow.ai" },
      { label: "PRD 살펴보기", href: "#project" }
    ],
    highlightLabel: "핵심 가치",
    highlightTitle: "Personal-First Work OS",
    highlightItems: [
      "Zero-Input Capture",
      "PARA & Personal Kanban 자동화",
      "Actionable Insight"
    ],
    highlightMetaPrimary: "기록 피로 없이 하루를 자동으로 정리",
    highlightMetaSecondary: "로컬 우선 · E2E 암호화"
  },
  en: {
    badge: "Project Flow",
    title: "A day that organizes itself,",
    subtitle: "AI note & work copilot",
    description: [
      "AI automatically organizes, summarizes, and recommends files, links, audio, and screenshots",
      "so your flow scales from personal work to team collaboration."
    ],
    ctas: [
      { label: "Contact Us", href: "mailto:product@flow.ai" },
      { label: "Review the PRD", href: "#project" }
    ],
    highlightLabel: "Core Value",
    highlightTitle: "Personal-First Work OS",
    highlightItems: [
      "Zero-input capture",
      "PARA & personal kanban automation",
      "Actionable insight"
    ],
    highlightMetaPrimary: "Automates your day without capture fatigue",
    highlightMetaSecondary: "Local-first · E2E encryption"
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
    eyebrow: "프로젝트 미션",
    headline: "흩어진 하루를 자동으로 정리하는 Personal-First AI OS",
    description:
      "Project Flow PRD가 집중하는 핵심 목표와 설계 원칙입니다.",
    statements: [
      "Zero-Overhead Input으로 파일·링크·음성·스크린샷 등을 수집하고 정리된 상태로 저장합니다.",
      "PARA와 Personal Kanban을 결합해 개인의 사고 흐름과 패턴을 시각화합니다.",
      "개인 경험을 팀 Workspace로 확장해 Daily Brief와 Next Action을 자동으로 제안합니다."
    ]
  },
  en: {
    eyebrow: "Mission",
    headline: "A personal-first AI OS that organizes every fragmented day",
    description:
      "This PRD focuses our goals into three design principles.",
    statements: [
      "Collect files, links, audio, and screenshots with zero-overhead input and keep them organized from the start.",
      "Combine PARA with personal kanban to visualize thinking patterns and daily rhythms.",
      "Grow the personal workspace into team collaboration with automated daily briefs and next actions."
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
    title: "AI Work OS를 현실로 만드는 팀",
    description:
      "입력 자동화, 감정 인사이트, AI 오케스트레이션을 결합해 개인에서 팀으로 확장되는 경험을 설계합니다."
  },
  en: {
    eyebrow: "Team",
    title: "The team bringing the AI Work OS to life",
    description:
      "We combine capture automation, emotional insight, and AI orchestration to craft experiences that scale from individuals to teams."
  }
};

export const teamMembers: Record<Language, TeamMember[]> = {
  ko: [
    {
      name: "Hyeoksu Lee",
      role: "프로덕트 오너 & AI 전략",
      image: "/images/team/hyeoksu.png",
      focus:
        "감성과 기술이 공존하는 AI 퍼스널 OS·브랜드 경험을 디자인합니다. 일상 속 데이터 흐름을 자동화하고, AI가 사고하고 연결하는 시스템을 구축합니다.",
      technologies: [
        "AI & Automation",
        "Backend / Frontend",
        // "Frontend / Interaction",
        "Design & System Thinking",
        // "BullMQ"
      ],
      links: [
        { label: "Portfolio", href: "https://hyeoksu1234.github.io/portfolio_website/projects.html" },
        { label: "CV/Resume", href: "https://www.notion.so/Hyeoksu-LEE-Brand-Interaction-Designer-ac9f3cc11b324e288fbdc8eedeb92139?source=copy_link" }
      ]
    },
    {
      name: "Yoonsu Lee",
      role: "AI·UX 기반 감각 경험 디자이너",
      image: "/images/team/yoonsu.png",
      focus:
        "Emotion-driven UX를 기반으로, 기술이 인간에게 닿는 방식을 감각적으로 설계합니다. 효율의 구조 속에서도 사람의 온도가 느껴지는 경험을 만듭니다.",
      technologies: [
        "AI Sensitivity Design",
        "Emotion-driven UX",
        "Emotion Rhythm Research",
        "Brand Interaction"
      ],
      links: [
        { label: "Portfolio", href: "https://www.behance.net/gallery/237239849/_" },
        { label: "CV/Resume", href: "https://www.notion.so/Yoonsu-Lee-Omnivorous-Designer-295f30904ec5808893a0ff2be0731417?source=copy_link" }
      ]
    },
    {
      name: "Gayoung Joung",
      role: "AI 네이티브 PM & 마케팅 빌더",
      image: "/images/team/gayoung.png",
      focus:
        "코호트 실험과 데이터 기반 마케팅으로 베타 고객 여정을 설계하고 커뮤니케이션을 정렬합니다.",
      technologies: [
        "Prompt Engineering",
        "UI/UX",
        "Data-driven Marketing",
        "Lifecycle Analytics"
      ],
      links: [
        { label: "Portfolio", href: "https://extreme-athlete-4ad.notion.site/MVP-293311331e44805bbbc8efff82ffab15?source=copy_link" },
        { label: "CV/Resume", href: "https://extreme-athlete-4ad.notion.site/MVP-293311331e44805bbbc8efff82ffab15?source=copy_link" }

      ]
    }
  ],
  en: [
    {
      name: "Hyeok Su Lee",
      role: "Product Owner & AI Strategist",
      image: "/images/team/hyeoksu.png",
      focus:
        "Designs an AI personal OS and brand experience where emotion and technology coexist, automating everyday data flows and building systems that let AI think and connect.",
      technologies: [
        "AI & Automation",
        "Backend / Frontend",
        "Design & System Thinking"
      ],
      links: [
        {
          label: "Portfolio",
          href: "https://hyeoksu1234.github.io/portfolio_website/projects.html"
        },
        {
          label: "CV/Resume",
          href: "https://www.notion.so/Hyeoksu-LEE-Brand-Interaction-Designer-ac9f3cc11b324e288fbdc8eedeb92139?source=copy_link"
        }
      ]
    },
    {
      name: "Yoonsu Lee",
      role: "AI Sensitivity UX Designer",
      image: "/images/team/yoonsu.png",
      focus:
        "Designs emotion-rhythm interfaces and onboarding experiences grounded in emotion-driven UX and human-centered AI research.",
      technologies: [
        "AI Sensitivity Design",
        "Emotion-driven UX",
        "Emotion Rhythm Research",
        "Brand Interaction"
      ],
      links: [
        {
          label: "Portfolio",
          href: "https://www.behance.net/gallery/237239849/_"
        },
        {
          label: "CV/Resume",
          href: "https://www.notion.so/Yoonsu-Lee-Omnivorous-Designer-295f30904ec5808893a0ff2be0731417?source=copy_link"
        }
      ]
    },
    {
      name: "Gayoung Joung",
      role: "AI-native PM & Marketing Builder",
      image: "/images/team/gayoung.png",
      focus:
        "Designs beta customer journeys with cohort experiments and data-driven marketing to align product and communication.",
      technologies: [
        "Prompt Engineering",
        "UI/UX",
        "Data-driven Marketing",
        "Lifecycle Analytics"
      ],
      links: [
        {
          label: "Portfolio",
          href: "https://extreme-athlete-4ad.notion.site/MVP-293311331e44805bbbc8efff82ffab15?source=copy_link"
        },
        {
          label: "CV/Resume",
          href: "https://extreme-athlete-4ad.notion.site/MVP-293311331e44805bbbc8efff82ffab15?source=copy_link"
        }
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
    eyebrow: "제품 개요",
    name: "Project Flow",
    summary:
      "생각·링크·음성·스크린샷을 자동 수집하고 PARA + Personal Kanban 기반으로 정리해 실행 가능한 인사이트를 제공하는 Personal-First AI 노트 & Copilot OS입니다.",
    differentiatorHeading: "핵심 제공 가치",
    differentiator:
      "Zero-Input Capture, Contextual Memory, Emotion Rhythm 분석을 결합해 개인의 흐름을 방해하지 않고 행동으로 연결합니다.",
    modules: [
      {
        name: "Universal Inbox & Capture",
        description:
          "macOS/Windows 캡처 앱, iOS 공유 시트, Chrome 확장을 통해 모든 입력을 로컬 우선으로 수집하고 암호화합니다."
      },
      {
        name: "Auto Organization Engine",
        description:
          "Whisper, DocTR, llama-parse, GPT-4o-mini를 활용해 요약·태깅·PARA 분류를 자동화하고 중복을 제거합니다."
      },
      {
        name: "Contextual Memory & Emotion",
        description:
          "개인 메타데이터와 감정 신뢰도 스코어를 학습해 Daily Brief, Recap Report, 감정 리듬 지표를 생성합니다."
      },
      {
        name: "Next Action & Focus Loop",
        description:
          "추천 할 일, 리마인더, Focus Mode를 통해 기록을 행동으로 전환하고 팀 협업으로 확장합니다."
      }
    ]
  },
  en: {
    eyebrow: "Product Overview",
    name: "Project Flow",
    summary:
      "A personal-first AI note and copilot OS that captures thoughts, links, audio, and screenshots, then organizes them with PARA + personal kanban for actionable insight.",
    differentiatorHeading: "Core Product Value",
    differentiator:
      "Zero-input capture, contextual memory, and emotion rhythm analysis connect flows to action without disrupting people.",
    modules: [
      {
        name: "Universal Inbox & Capture",
        description:
          "Mac/Windows capture apps, iOS share sheet, and Chrome extension collect every input locally first with encryption."
      },
      {
        name: "Auto Organization Engine",
        description:
          "Whisper, DocTR, llama-parse, and GPT-4o-mini automate summarization, tagging, PARA classification, and deduplication."
      },
      {
        name: "Contextual Memory & Emotion",
        description:
          "Learns personal metadata and emotion confidence to power daily briefs, recap reports, and rhythm insights."
      },
      {
        name: "Next Action & Focus Loop",
        description:
          "Transforms notes into suggested tasks, reminders, and focus sessions that scale into team collaboration."
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
    eyebrow: "로드맵",
    title: "단계별 베타 목표",
    description:
      "P0부터 T1까지 16주 로드맵으로 캡처 자동화에서 협업 OS까지 확장합니다.",
    ctaLabel: "로드맵 상세 보기 →",
    projects: [
      {
        title: "P0 · MVP 프로토타입 (2주)",
        summary:
          "macOS/Windows 캡처, iOS 공유 시트, Chrome 확장으로 Zero-Input Capture 경험을 검증합니다."
      },
      {
        title: "P1 · 개인 생산성 강화 (+4주)",
        summary:
          "Daily Brief, Next Action Lite, Focus Mode로 개인 생산성과 감정 루틴을 강화합니다."
      },
      {
        title: "P2 · 감정 리포트 & Graph (+4주)",
        summary:
          "감정 신뢰도 대시보드와 Graph Lite로 Contextual Memory와 감정 리듬을 시각화합니다."
      },
      {
        title: "T0-T1 · 팀 협업 모드 (+12주)",
        summary:
          "공유 Workspace, 권한, 감사 로그, SSO로 팀 협업과 보안을 확장합니다."
      }
    ]
  },
  en: {
    eyebrow: "Roadmap",
    title: "Beta milestones by phase",
    description:
      "A 16-week plan from P0 to T1 scaling from capture automation to a collaboration OS.",
    ctaLabel: "View roadmap details →",
    projects: [
      {
        title: "P0 · MVP Prototype (2 weeks)",
        summary:
          "Validate zero-input capture with desktop inbox, iOS share sheet, and Chrome extension."
      },
      {
        title: "P1 · Personal productivity (+4 weeks)",
        summary:
          "Ship daily brief, next action lite, and focus mode to deepen personal productivity and emotion routines."
      },
      {
        title: "P2 · Emotion reports & graph (+4 weeks)",
        summary:
          "Launch emotion confidence dashboards and graph lite to visualize contextual memory and rhythms."
      },
      {
        title: "T0-T1 · Team collaboration (+12 weeks)",
        summary:
          "Upgrade shared workspaces, permissions, audit logs, and SSO for secure team expansion."
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
    tagline: "Personal-First AI Note & Copilot OS · Project Flow",
    links: [
      { label: "이메일", href: "mailto:product@flow.ai" },
      { label: "GitHub", href: "https://github.com/project-flow" },
      { label: "Notion", href: "https://flow.notion.site" },
      { label: "LinkedIn", href: "https://linkedin.com/company/projectflow" }
    ]
  },
  en: {
    tagline: "Personal-first AI note & copilot OS · Project Flow",
    links: [
      { label: "Email", href: "mailto:product@flow.ai" },
      { label: "GitHub", href: "https://github.com/project-flow" },
      { label: "Notion", href: "https://flow.notion.site" },
      { label: "LinkedIn", href: "https://linkedin.com/company/projectflow" }
    ]
  }
};
