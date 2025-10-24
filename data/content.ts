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
    badge: "Project Flow",
    subtitle: "AI가 대화·문서·파일을 스스로 정리하는 업무 Copilot OS",
    description:
      "모든 대화·문서·파일이 한 곳에 모이고, AI가 이를 자동 정리·분류·요약해 스타트업이 즉시 활용할 수 있는 AI 기반 업무 OS입니다.",
    ctas: [
      { label: "문의하기", href: "mailto:product@flow.ai" },
      { label: "프로덕트 개요 보기", href: "#project" }
    ],
    highlightLabel: "AI Copilot",
    highlightTitle: "Zero-overhead Work OS",
    highlightItems: [
      "모든 채널 데이터 자동 수집",
      "AI 정리·분류·요약",
      "실행 가능한 To-Do와 리포트"
    ],
    highlightMetaPrimary: "10인 이하 스타트업 팀을 위한 자율형 업무 보조",
    highlightMetaSecondary: "한·영 지원 · Slack·Notion 연동 준비"
  },
  en: {
    badge: "Project Flow",
    subtitle: "AI workplace copilot that keeps conversations, docs, and files organized.",
    description:
      "An AI-native work OS where every conversation, document, and file lands in one place, is auto-organized, summarized, and ready for startup teams to act on instantly.",
    ctas: [
      { label: "Contact Us", href: "mailto:product@flow.ai" },
      { label: "Explore Product Overview", href: "#project" }
    ],
    highlightLabel: "AI Copilot",
    highlightTitle: "Zero-overhead Work OS",
    highlightItems: [
      "Unified data intake",
      "Automated organization & summarization",
      "Actionable To-Do and reporting"
    ],
    highlightMetaPrimary: "Designed for sub-10 member startup teams",
    highlightMetaSecondary: "Bilingual experience · Slack & Notion ready"
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
    headline: "AI가 알아서 정리하고 연결하는 업무 환경",
    description:
      "Project Flow가 해결하려는 핵심 문제와 설계 철학을 세 가지 진술로 정리했습니다.",
    statements: [
      "Slack, Notion, Drive, 카톡, 이메일에 흩어진 정보를 하나의 컨텍스트 그래프로 통합합니다.",
      "AI가 문서와 대화를 자동으로 정리·요약해 팀이 겪는 정리 부담을 제거합니다.",
      "업무 맥락을 이해한 Copilot이 실행 가능한 인사이트와 로드맵을 지속적으로 제안합니다."
    ]
  },
  en: {
    eyebrow: "Mission",
    headline: "An AI workspace that organizes and connects itself",
    description:
      "We express the problems we tackle and our product philosophy in three statements.",
    statements: [
      "Unify fragmented Slack, Notion, Drive, chat, and email data into a single context graph.",
      "Remove the burden of organizing by letting AI structure and summarize documents and conversations automatically.",
      "Deliver continuous, actionable insights and roadmaps through a context-aware copilot."
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
    title: "AI 업무 Copilot을 현실로 만드는 빌더팀",
    description:
      "데이터 아키텍처, LLM 오케스트레이션, 감성 UX를 결합해 자율형 업무 OS를 설계합니다."
  },
  en: {
    eyebrow: "Team",
    title: "Builders shipping the AI workplace copilot",
    description:
      "We combine data architecture, LLM orchestration, and empathetic UX to craft a self-organizing work OS."
  }
};

export const teamMembers: Record<Language, TeamMember[]> = {
  ko: [
    {
      name: "Hyeok Su Lee",
      role: "프로덕트 오너 & AI 전략",
      focus:
        "프로젝트 비전, 데이터 모델, AI 오케스트레이션 아키텍처를 설계하며 핵심 로드맵을 이끕니다.",
      technologies: ["Next.js", "Supabase", "OpenAI API", "pgvector"],
      links: [
        { label: "LinkedIn", href: "https://linkedin.com/in/hyeoksu" },
        { label: "GitHub", href: "https://github.com/hyeoksu" },
        { label: "Notion", href: "https://hyeoksu.notion.site" }
      ]
    },
    {
      name: "Minji Park",
      role: "UX 리드",
      focus:
        "복잡한 데이터를 감정형 인터페이스와 워크플로 중심 UX로 번역합니다.",
      technologies: ["Figma", "Tailwind CSS", "Framer Motion", "LLM UX"],
      links: [
        { label: "Behance", href: "https://behance.net/minjipark" },
        { label: "GitHub", href: "https://github.com/minji" },
        { label: "Figma", href: "https://www.figma.com/@minji" }
      ]
    },
    {
      name: "Daniel Choi",
      role: "데이터 & 자동화 엔지니어",
      focus:
        "Ingest 파이프라인, 벡터 검색, BullMQ 기반 오토메이션 레이어를 구현합니다.",
      technologies: ["Python", "Whisper", "BullMQ", "Qdrant"],
      links: [
        { label: "GitHub", href: "https://github.com/danielchoi" },
        { label: "LinkedIn", href: "https://linkedin.com/in/danielchoi" }
      ]
    }
  ],
  en: [
    {
      name: "Hyeok Su Lee",
      role: "Product Owner & AI Strategist",
      focus:
        "Designs the product vision, data models, and AI orchestration architecture while steering the roadmap.",
      technologies: ["Next.js", "Supabase", "OpenAI API", "pgvector"],
      links: [
        { label: "LinkedIn", href: "https://linkedin.com/in/hyeoksu" },
        { label: "GitHub", href: "https://github.com/hyeoksu" },
        { label: "Notion", href: "https://hyeoksu.notion.site" }
      ]
    },
    {
      name: "Minji Park",
      role: "UX Lead",
      focus:
        "Transforms complex data into workflow-first, sentiment-friendly interfaces.",
      technologies: ["Figma", "Tailwind CSS", "Framer Motion", "LLM UX"],
      links: [
        { label: "Behance", href: "https://behance.net/minjipark" },
        { label: "GitHub", href: "https://github.com/minji" },
        { label: "Figma", href: "https://www.figma.com/@minji" }
      ]
    },
    {
      name: "Daniel Choi",
      role: "Data & Automation Engineer",
      focus:
        "Builds the ingest pipeline, vector retrieval, and BullMQ-powered automation layer.",
      technologies: ["Python", "Whisper", "BullMQ", "Qdrant"],
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
    eyebrow: "제품 개요",
    name: "Project Flow",
    summary:
      "대화·문서·파일을 자동 수집하고 AI가 정리·분류·요약해 팀이 즉시 실행할 수 있는 업무 OS입니다.",
    differentiatorHeading: "Project Flow가 제공하는 차별점",
    differentiator:
      "지속적으로 학습하는 컨텍스트 그래프와 AI 자동화 엔진을 결합해 정리 부담 없이 실행 가능한 인사이트를 제공합니다.",
    modules: [
      {
        name: "데이터 허브 & 자동 정리",
        description:
          "Slack, Notion, Drive, 이메일을 수집하고 SHA-256과 SimHash로 중복을 관리하며 AI가 태깅과 구조화를 수행합니다."
      },
      {
        name: "하이브리드 AI 검색",
        description:
          "BM25와 의미 검색을 결합해 키워드·질문형 쿼리에 최적화된 결과를 제공하고 접근 권한을 반영합니다."
      },
      {
        name: "AI 요약 & 업무 생성",
        description:
          "회의록과 채팅을 요약하고 정확도 70% 이상을 목표로 실행 가능한 To-Do와 로드맵을 자동 도출합니다."
      },
      {
        name: "프로젝트 그래프 & 리포트",
        description:
          "문서·사람·업무 관계를 시각화하고 리더를 위한 감정 피드백과 리스크 리포트를 제공합니다."
      }
    ]
  },
  en: {
    eyebrow: "Product Overview",
    name: "Project Flow",
    summary:
      "A work OS that ingests conversations, documents, and files, then lets AI organize, classify, and summarize them for instant execution.",
    differentiatorHeading: "What makes Project Flow different",
    differentiator:
      "A continually learning context graph paired with an AI automation engine removes manual sorting and delivers actionable insight out of the box.",
    modules: [
      {
        name: "Data Hub & Auto Organization",
        description:
          "Ingests Slack, Notion, Drive, and email data, deduplicates with SHA-256 and SimHash, and enriches everything with AI tagging."
      },
      {
        name: "Hybrid AI Retrieval",
        description:
          "Combines BM25 with semantic search to handle keyword and natural language queries while respecting access control."
      },
      {
        name: "AI Summaries & Work Creation",
        description:
          "Summarizes meetings and chats to surface To-Do items and roadmaps with a >=70% accuracy target."
      },
      {
        name: "Project Graph & Reporting",
        description:
          "Visualizes relationships across documents, people, and tasks while delivering leader-ready sentiment and risk reports."
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
    title: "Phase별 마일스톤 & 목표",
    description:
      "M0부터 M4까지 16주 로드맵으로 MVP, 권한 관리, 감정형 UX, 리포트 자동화를 단계적으로 달성합니다.",
    ctaLabel: "세부 계획 보기 →",
    projects: [
      {
        title: "M0 · MVP 프로토타입 (2주)",
        summary:
          "파일 업로드, 자동 파싱, 요약, 초기 검색 경험 구축으로 핵심 가치를 검증합니다."
      },
      {
        title: "M1 · 의미 검색 & 그래프 (6주)",
        summary:
          "RAG 파이프라인, 태깅 엔진, 프로젝트 그래프 시각화로 컨텍스트 이해도를 높입니다."
      },
      {
        title: "M2 · 권한 & 외부 이관 (10주)",
        summary:
          "조직 권한, Slack/Notion Import, RLS 연동으로 보안과 확장성을 강화합니다."
      },
      {
        title: "M3-M4 · 감정 UX & 리포트 자동화 (12~16주)",
        summary:
          "감성 피드백, 리더 보고서, 비즈니스 로드맵 자동화로 Copilot 경험을 완성합니다."
      }
    ]
  },
  en: {
    eyebrow: "Roadmap",
    title: "Milestones & Focus by Phase",
    description:
      "A 16-week path from M0 to M4 covering MVP validation, permissions, empathetic UX, and automated reporting.",
    ctaLabel: "View detailed plan →",
    projects: [
      {
        title: "M0 · MVP Prototype (2 weeks)",
        summary:
          "Validate core value with file ingest, auto parsing, summaries, and an initial search experience."
      },
      {
        title: "M1 · Semantic Search & Graph (6 weeks)",
        summary:
          "Strengthen context understanding with RAG pipelines, tagging engine, and project graph visualization."
      },
      {
        title: "M2 · Permissions & Imports (10 weeks)",
        summary:
          "Add org-level controls, Slack/Notion import, and RLS integration to secure and scale usage."
      },
      {
        title: "M3-M4 · Empathetic UX & Reporting (12-16 weeks)",
        summary:
          "Deliver sentiment-aware feedback, leadership reports, and automated business roadmaps to complete the copilot experience."
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
    tagline: "AI가 정리하는 업무 Copilot OS · Project Flow",
    links: [
      { label: "이메일", href: "mailto:product@flow.ai" },
      { label: "GitHub", href: "https://github.com/project-flow" },
      { label: "Notion", href: "https://flow.notion.site" },
      { label: "LinkedIn", href: "https://linkedin.com/company/projectflow" }
    ]
  },
  en: {
    tagline: "AI-organized workplace copilot · Project Flow",
    links: [
      { label: "Email", href: "mailto:product@flow.ai" },
      { label: "GitHub", href: "https://github.com/project-flow" },
      { label: "Notion", href: "https://flow.notion.site" },
      { label: "LinkedIn", href: "https://linkedin.com/company/projectflow" }
    ]
  }
};
