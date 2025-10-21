# Project Palette 팀 랜딩 페이지 PRD (v1.0)

## 1. 개요
- **프로젝트명**: Project Palette - 팀 지원/프로필 랜딩 페이지
- **목적**: AI Builderthon 및 유사 프로그램에 제출할 팀의 전문성과 프로젝트 역량을 소개하는 반응형 웹 프로필 구축
- **대상 사용자**: 프로그램 운영진, 투자자, 멘토
- **출시 형태**: 단일 페이지 기반의 반응형 웹사이트 (모바일 최적화)

## 2. 핵심 메시지
- “캘린더 기반 자동화 & 블록 데이터 OS를 만드는 빌더팀”
- “1분 안에 계획하고, 말 한마디로 기록하며, 자동화로 삶을 정리하는 경험”

## 3. 정보 구조(IA) 및 주요 요구사항
1. **Hero**
   - 팀명, 슬로건, 주요 CTA(지원서 보기 / 포트폴리오 보기)
   - 팀 이미지를 활용한 비주얼 또는 애니메이션
2. **Our Mission**
   - 해결하려는 문제와 방향성
   - 핵심 철학: Calendar-first / Zero-Input / Automation
3. **Meet the Team**
   - 구성원 카드: 사진, 이름, 역할, 기술 스택, 외부 링크(Notion, GitHub, LinkedIn 등)
   - 최소 3명 이상 소개 및 역할 명확화
4. **Project Overview**
   - 대표 프로젝트(Project Palette) 소개
   - 주요 기능: 1MP, ZIC, Flow, Block-DB
   - 차별점 강조: 자체 엔진/자동화 중심
5. **Previous Work** (선택)
   - 졸업전시, 브랜드 리디자인, 프랜차이즈 시스템 등 사례
   - 링크 또는 이미지 썸네일 제공
6. **Footer**
   - 이메일, 소셜 링크, 저작권 정보

## 4. 핵심 가치 제안
- **Hero**: 해결하려는 문제와 팀의 관점을 즉시 전달
- **Mission**: 문제 해결 의지와 방향성을 명확히 설명
- **Team**: 멤버 역량과 기술 스택을 설득력 있게 표현
- **Project**: UI 도구가 아닌 자동화 기반 기술 프로젝트라는 점 강조

## 5. 디자인 톤 & 무드
- 다크 모드 기반 색상(블랙/화이트/퍼플 포인트)
- Pretendard 또는 Inter 등 개발자 친화적 폰트
- 미니멀하면서 Framer Motion 등으로 인터랙티브한 느낌
- 팀워크, 빌더십, UX 감성을 강조하는 이미지 활용

## 6. 기술 스택
| 목적 | 기술 |
| --- | --- |
| 프론트엔드 | Next.js 14 (App Router), Tailwind CSS, Framer Motion |
| 배포 | Vercel |
| SEO/공유 | OG 태그, 메타 태그 설정 |
| 외부 링크 | Notion, GitHub, Figma, LinkedIn 등 |

## 7. 일정 계획
| 날짜 | 작업 내용 |
| --- | --- |
| D-4 | 구조 기획 및 와이어프레임 설계 |
| D-3 | 디자인 시안(Figma) 확정 |
| D-2 | 개발 시작 (Hero / Mission / Team 섹션 우선) |
| D-1 | 최종 QA 및 Vercel 배포 |

## 8. 제출 요건 체크리스트
- 모바일 및 데스크탑 대응
- 팀 소개, 지원 목적, 프로젝트 설명 포함
- 외부 링크 유효성 확보
- 심사자 관점에서 빠른 스크롤 탐색 가능
- 최소 3명 구성원 및 역할 명시

## 9. 후속 확장 옵션 (선택)
- 프로젝트 상세 페이지(`/project`)
- 팀 멤버별 개별 페이지(`/team/{name}`)
- 주간 업데이트 블로그 섹션
- 지원서 PDF 뷰어 또는 직접 입력 기능

## 10. 참고 사항
- 벤치마킹: linear.app, vercel.com/about, notion.so/team, heykakao.page
- 폰트 라이선스 검토 필요

---

# Project Palette Team Landing Page PRD (v1.0)

## 1. Overview
- **Project**: Project Palette - Team application/profile landing page
- **Goal**: Build a responsive web profile that showcases team expertise for the AI Builderthon and similar programs
- **Target Audience**: Program organizers, investors, mentors
- **Launch Format**: Single-page responsive website optimized for mobile

## 2. Key Messages
- “A builder team crafting a calendar-based automation & block data OS”
- “Plan in under a minute, log with a single voice command, and organize life through automation”

## 3. Information Architecture & Requirements
1. **Hero**
   - Display team name, slogan, and primary CTAs (View Application / View Portfolio)
   - Hero visual or animation featuring the team
2. **Our Mission**
   - Articulate the problem space and direction
   - Core philosophy: Calendar-first / Zero-Input / Automation
3. **Meet the Team**
   - Member cards with photo, name, role, tech stack, and external links (Notion, GitHub, LinkedIn, etc.)
   - Highlight at least three members with clearly defined responsibilities
4. **Project Overview**
   - Introduce Project Palette as the flagship product
   - Spotlight key modules: 1MP, ZIC, Flow, Block-DB
   - Emphasize differentiation via proprietary automation engine
5. **Previous Work** (Optional)
   - Feature prior work such as graduation showcases, brand redesigns, franchise systems
   - Provide supporting links or thumbnail visuals
6. **Footer**
   - Include email contact, social links, and copyright

## 4. Core Value Proposition
- **Hero**: Convey the problem and team perspective within seconds
- **Mission**: Explain the motivation and strategic direction
- **Team**: Demonstrate member caliber and complementary skill sets
- **Project**: Highlight that this is a technology-forward automation platform, not merely UI tooling

## 5. Design Tone & Mood
- Dark mode palette featuring black, white, and purple accents
- Developer-friendly typography (Pretendard, Inter, etc.)
- Minimal, polished layout with interactive touches (e.g., Framer Motion)
- Imagery that evokes teamwork, builder mindset, and UX sensibilities

## 6. Technology Stack
| Purpose | Technology |
| --- | --- |
| Frontend | Next.js 14 (App Router), Tailwind CSS, Framer Motion |
| Deployment | Vercel |
| SEO/Sharing | OG tags, meta tags |
| External Links | Notion, GitHub, Figma, LinkedIn, etc. |

## 7. Timeline
| Day | Task |
| --- | --- |
| D-4 | Plan IA and create wireframes |
| D-3 | Finalize design mockups in Figma |
| D-2 | Kick off development focusing on Hero, Mission, Team |
| D-1 | Run final QA and deploy to Vercel |

## 8. Submission Checklist
- Responsive across mobile and desktop
- Includes team intro, application intent, and project summary
- All external links are functional
- Supports quick scan for evaluators
- Presents at least three members with defined roles

## 9. Future Extensions (Optional)
- Dedicated project detail page (`/project`)
- Individual team member pages (`/team/{name}`)
- Weekly update blog section
- Embedded application PDF viewer or inline submission flow

## 10. Additional Notes
- Benchmark references: linear.app, vercel.com/about, notion.so/team, heykakao.page
- Verify font licensing

