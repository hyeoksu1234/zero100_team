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

export const heroContent = {
  title: "Project Palette",
  subtitle: "캘린더 기반 자동화 & 블록 데이터 OS를 만드는 빌더팀",
  description:
    "1분 안에 계획하고, 말 한마디로 기록하며, 자동화로 삶을 정리하는 경험을 설계합니다. 운영진과 투자자, 멘토가 팀의 역량을 한눈에 이해하도록 구성했습니다.",
  ctas: [
    { label: "지원서 보기", href: "https://bit.ly/project-palette-apply" },
    { label: "포트폴리오 보기", href: "https://palette.notion.site" }
  ]
};

export const missionContent = {
  headline: "Calendar-first, Zero-input, Automation",
  statements: [
    "캘린더를 중심으로 사람과 시스템을 연결하는 운영 자동화를 구현합니다.",
    "입력 부담을 줄이는 Zero-Input 경험 설계로 높은 사용자 잔존을 유도합니다.",
    "데이터 블록 OS를 구축해 팀과 개인의 워크플로를 일관된 구조로 정리합니다."
  ]
};

export const teamMembers: TeamMember[] = [
  {
    name: "Hyeok Su Lee",
    role: "Product Architect",
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
    role: "UX Engineer",
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
    role: "Automation Engineer",
    focus:
      "캘린더 시그널을 기반으로 음성 입력과 블록 데이터 엔진을 연결하고 자동화를 배포합니다.",
    technologies: ["Python", "Supabase", "Temporal", "LLM Agents"],
    links: [
      { label: "GitHub", href: "https://github.com/danielchoi" },
      { label: "LinkedIn", href: "https://linkedin.com/in/danielchoi" }
    ]
  }
];

export const projectOverview = {
  name: "Project Palette",
  summary:
    "캘린더 이벤트, 음성 입력, 자동화 레시피를 하나의 블록 데이터 OS로 통합해 업무 운영을 자동화하는 엔진입니다.",
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
};

export const previousWorks: PreviousWork[] = [
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
];

export const footerLinks: Link[] = [
  { label: "Email", href: "mailto:hello@projectpalette.team" },
  { label: "GitHub", href: "https://github.com/project-palette" },
  { label: "Notion", href: "https://palette.notion.site" },
  { label: "LinkedIn", href: "https://linkedin.com/company/projectpalette" }
];

