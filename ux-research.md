# UX Research Document — UB Group

> **Version:** 1.0
> **Date:** 2026-06-04
> **Author:** UX Researcher (AI)
> **Based on:** business-requirements.md v1.0

---

## 1. Research Overview

### 1.1 Objectives
- Define user-centered information architecture for UB Group corporate website
- Create intuitive navigation for multi-sector conglomerate
- Optimize for both Mongolian and English-speaking audiences
- Support investor relations and recruitment goals

### 1.2 Methodology
- Document analysis of existing website and BRD
- Stakeholder requirements extraction
- Competitive analysis of corporate conglomerate websites

### 1.3 Scope
- Full site UX for business corporate template
- Multi-language UX considerations
- Responsive design across mobile, tablet, desktop
- Accessibility compliance

### 1.4 Key Findings Summary
1. **Multi-sector complexity:** Users need clear pathways to specific business sectors without overwhelming navigation
2. **Dual audience:** Investors need credibility signals; job seekers need culture/role information
3. **Bilingual challenges:** Mongolian and English content must be equally accessible

## 2. User Personas

### Persona 1: Investor/Partner "Bayar"

#### Demographics & Context
- **Age Range:** 35-55
- **Location:** Mongolia, international
- **Occupation:** Investment manager, business development
- **Tech Proficiency:** High
- **Primary Device:** Desktop (office), mobile (travel)

#### Behavioral Patterns
- **Usage Frequency:** Monthly — checking new projects, annual reports
- **Task Priorities:** 1) Review project portfolio, 2) Verify company credentials, 3) Contact leadership
- **Decision Factors:** Project scale, sustainability credentials, financial performance
- **Pain Points:** Hard to find detailed project specs, outdated information
- **Motivations:** Finding reliable partners, ROI assessment

#### Goals & Needs
- **Primary Goals:** Evaluate UB Group's capabilities and track record
- **Secondary Goals:** Download reports, view certifications
- **Success Criteria:** Can find project details within 3 clicks

#### Context of Use
- **Environment:** Office desk, conference rooms
- **Time Constraints:** Limited — needs quick access to key data
- **Distractions:** Email, calls, meetings

#### Quote
> "I need to quickly see their major projects and financial stability before I invest my time in a meeting."

### Persona 2: Job Seeker "Sarnai"

#### Demographics & Context
- **Age Range:** 22-35
- **Location:** Ulaanbaatar, Mongolia
- **Occupation:** Recent graduate, mid-level professional
- **Tech Proficiency:** High
- **Primary Device:** Mobile

#### Behavioral Patterns
- **Usage Frequency:** Weekly during job search
- **Task Priorities:** 1) Find open positions, 2) Learn about culture, 3) Apply
- **Decision Factors:** Growth opportunities, company reputation, benefits
- **Pain Points:** Unclear application process, missing job descriptions
- **Motivations:** Career advancement, stable employment

#### Goals & Needs
- **Primary Goals:** Find and apply to suitable positions
- **Secondary Goals:** Understand company culture and values
- **Success Criteria:** Can apply within 5 minutes of landing

#### Context of Use
- **Environment:** Home, commuting, cafes
- **Time Constraints:** Browsing during breaks
- **Distractions:** Notifications, social media

#### Quote
> "I want to see what it's like to work there and find jobs that match my skills without jumping through hoops."

## 3. Customer Journey Mapping

### Journey Overview
**Stages:** Discovery → Consideration → Conversion → Retention

### Stage 1: Discovery
- **Touchpoints:** Search engines, LinkedIn, referrals, news articles
- **User Actions:** Google search, click from social media
- **Emotions:** Curious, skeptical
- **Pain Points:** Unclear search results, outdated website appearance
- **Opportunities:** Strong SEO, modern homepage hero, clear value proposition

### Stage 2: Consideration
- **Touchpoints:** About page, project galleries, team bios
- **User Actions:** Browse projects, read about history, check credentials
- **Emotions:** Evaluating, impressed or concerned
- **Pain Points:** Missing project details, poor image quality
- **Opportunities:** Rich media, downloadable case studies, clear CTAs

### Stage 3: Conversion
- **Touchpoints:** Contact form, phone, email
- **User Actions:** Fill form, make call, download brochure
- **Emotions:** Ready to engage, hopeful
- **Pain Points:** Long forms, no confirmation, slow response
- **Opportunities:** Short forms, auto-confirmation, fast follow-up

### Stage 4: Retention
- **Touchpoints:** News updates, email newsletters
- **User Actions:** Return for updates, share content
- **Emotions:** Loyal, informed
- **Pain Points:** No updates, irrelevant content
- **Opportunities:** Regular news, targeted content

## 4. Information Architecture & Sitemap

### 4.1 Content Hierarchy
```text
Home
├── Hero: Company overview + key stats
├── Featured Projects
├── Business Sectors (4 cards)
└── Latest News

About Us
├── Company Overview
├── History Timeline
├── Vision, Mission, Values
└── Management Team

Business
├── Buildings & Real Estate
├── Finance & Investment
├── Lifestyle
└── Transport Logistics

Sustainable Development
├── Orientation Principles
└── Project Showcase

Human Resource
├── Work Environment
└── Career Opportunities

Cooperate
├── Procurement Policies
├── Business Ethics
└── Supplier Registration

News
├── News List
└── Article Detail

Contact
├── Contact Form
├── Office Location
└── Phone/Email
```

### 4.2 Navigation Design
- **Primary Navigation:** About Us | Business | Sustainable Development | Human Resource | Cooperate | News | Contact
- **Secondary Navigation:** Language toggle (MN/EN), search icon
- **Footer Navigation:** Logo, address, phone, social links, quick links
- **Mobile Navigation:** Hamburger menu with accordion sections

### 4.3 Content Organization Principles
- Progressive disclosure: Overview first, details on click
- Sector-based grouping for business areas
- Chronological ordering for history and news
- Visual hierarchy with clear headings

### 4.4 Search & Filter Strategy
- **Search Scope:** Site-wide (pages, news, projects)
- **Filter Categories:** News by date, projects by sector
- **Search Results Display:** Card-based with thumbnails

## 5. Wireframe Guidance

### 5.1 Global Layout Structure
- **Header:** Fixed top bar, logo left, nav center, language right
- **Footer:** Dark background, 3-column layout, social icons
- **Content Width:** Max 1280px, centered
- **Grid System:** 12-column grid, 24px gutter

### 5.2 Section Layouts

#### Homepage
- **Layout Type:** Full-width hero + grid sections
- **Content Priority:** Hero → Stats → Sectors → News → CTA
- **Component Types:** Hero image, stat counters, sector cards, news cards
- **White Space:** Generous padding (80px vertical)
- **Responsive Behavior:** Stack vertically on mobile

#### About Us
- **Layout Type:** Editorial, single column with breakout sections
- **Content Priority:** Hero → Overview → Stats → Timeline → Team
- **Component Types:** Text blocks, image galleries, timeline, team cards
- **White Space:** Medium padding (60px)
- **Responsive Behavior:** Timeline becomes vertical, team grid → 2 cols

#### Business
- **Layout Type:** Tabbed/Category navigation
- **Content Priority:** Sector tabs → Project grid → Detail cards
- **Component Types:** Tab navigation, project cards, image galleries
- **White Space:** Medium padding
- **Responsive Behavior:** Tabs → dropdown, cards stack

#### News
- **Layout Type:** Card grid
- **Content Priority:** Featured article → Recent articles
- **Component Types:** Featured card, article cards, pagination
- **White Space:** Medium padding
- **Responsive Behavior:** 3 cols → 2 cols → 1 col

#### Contact
- **Layout Type:** Two-column (form + info)
- **Content Priority:** Form → Map → Contact details
- **Component Types:** Form inputs, map embed, info cards
- **White Space:** Medium padding
- **Responsive Behavior:** Stack form above info

### 5.3 Content Priority
1. **Homepage:** Hero image, key stats, sector overview, latest news
2. **About:** Company story, credibility signals, leadership
3. **Business:** Sector clarity, project evidence
4. **Contact:** Easy form, clear phone/email

### 5.4 Component Patterns
- **Cards:** Shadow on hover, image top, title + excerpt
- **Lists:** Clean bullet points, icon support
- **Forms:** Inline labels, validation messages, submit confirmation
- **Media:** Full-width images, lazy loading, alt text

## 6. Accessibility Requirements

### 6.1 WCAG 2.1 Level AA Compliance

| Requirement | Implementation | Priority |
|-------------|---------------|----------|
| Keyboard Navigation | All interactive elements accessible via keyboard | High |
| Screen Reader Support | ARIA labels, landmarks, skip links | High |
| Color Contrast | 4.5:1 for normal text, 3:1 for large text | High |
| Focus Indicators | Visible focus states on all interactive elements | High |
| Alt Text | Descriptive alt text for all images | High |
| Form Labels | All form inputs have associated labels | High |
| Text Resizing | Support 200% zoom without loss of function | Medium |
| Motion Sensitivity | Respect `prefers-reduced-motion` | Medium |

### 6.2 Multi-language Accessibility
- Mongolian text expansion allowance (+30%)
- English fallback fonts
- Clear language indicator in URL and UI

### 6.3 Mobile Accessibility
- Touch targets at least 44x44px
- Swipe gestures for carousels
- Allow zoom

## 7. Responsive Design Strategy

### 7.1 Breakpoints

| Breakpoint | Width | Target Devices | Layout Changes |
|-----------|-------|---------------|----------------|
| Mobile | 375px | Smartphones | Single column, stacked, hamburger menu |
| Tablet | 768px | Tablets | Two columns, adjusted spacing |
| Desktop | 1280px | Laptops, desktops | Full multi-column, expanded nav |

### 7.2 Mobile-first Approach
Design for mobile first, then enhance for larger screens.

### 7.3 Content Adaptation
- Reduce image sizes on mobile
- Simplify navigation on mobile
- Prioritize key CTAs above fold

### 7.4 Performance Budget
- Mobile: < 1MB initial load, < 3s load time
- Desktop: < 2MB initial load, < 2s load time

## 8. Interaction & Motion Design

### 8.1 Animation Principles
- Subtle, purposeful animations
- No distracting effects
- Support `prefers-reduced-motion`

### 8.2 Micro-interactions

| Element | Trigger | Animation | Duration |
|---------|---------|-----------|----------|
| Buttons | Hover | Scale 1.02, shadow increase | 200ms |
| Cards | Hover | Lift, shadow | 250ms |
| Links | Hover | Color transition, underline | 150ms |
| Form Inputs | Focus | Border color, shadow | 200ms |
| Loading | Active | Spinner or skeleton | Continuous |

### 8.3 Page Transitions
- Fade transitions between pages
- Smooth scroll to sections

### 8.4 Scroll Behaviors
- Sticky header after scroll
- Parallax subtle on hero images
- Back-to-top button after 500px scroll

## 9. Content Strategy & UX Writing

### 9.1 Tone of Voice
- Professional, confident, approachable
- Formal but not stiff
- Mongolian: respectful, honorific forms
- English: clear, international business standard

### 9.2 Terminology

| Term | Usage | Avoid |
|------|-------|-------|
| UB Group | Primary brand name | Ulaanbaatar Group (except formal contexts) |
| Sector | Business division | Department |
| Sustainable Development | Official program name | Sustainability (alone) |

### 9.3 CTA Copy Guidelines
- Action-oriented: "View Projects", "Contact Us", "Apply Now"
- Consistent across languages
- Clear destination indication

### 9.4 Multi-language UX Writing
- Keep CTAs short for both languages
- Allow 30% text expansion for Mongolian
- Maintain consistent terminology

### 9.5 Error Messages
- Clear, helpful, no blame
- Example: "Please enter a valid email address"

## 10. Usability Testing Plan

### 10.1 Test Scenarios
1. Find information about Vision Business Tower project
2. Apply for a job in the HR section
3. Switch language from Mongolian to English
4. Contact the company via form
5. Find sustainable development goals

### 10.2 Testing Methods
- Task-based testing with 5 users
- Think-aloud protocol
- Mobile and desktop testing

### 10.3 Success Metrics
- Task completion rate: > 80%
- Time on task: < 2 minutes
- Error rate: < 20%
- SUS score: > 70

## 11. Competitive UX Analysis

| Competitor | Strengths | Weaknesses | Opportunities |
|-----------|-----------|------------|---------------|
| Current ubgroup.mn | Comprehensive content | Outdated design, slow load | Modern redesign, better UX |
| MCS Group | Clean layout | Limited project detail | Richer project showcases |
| Tavan Bogd Group | Strong visuals | Complex navigation | Simpler IA |

## 12. Success Metrics & KPIs

### 12.1 UX Metrics
- Task success rate
- Time on task
- Error rate
- NPS score

### 12.2 Business Metrics
- Contact form submissions
- Page views per session
- Bounce rate
- Return visitor rate

### 12.3 Technical Metrics
- Page load time
- Core Web Vitals
- Mobile responsiveness

## 13. Design Agent Collaboration

Specialized design assistance recommended for:
- Custom iconography for 4 business sectors
- Professional photography direction
- Mongolian typography optimization

## 14. Assumptions & Constraints

### Assumptions
- High-quality images available
- Content translations provided
- erxes CMS supports all required content types

### Constraints
- Must maintain existing URL structure where possible
- Must support IE11 (if required by corporate policy)
- Limited budget for custom photography

## 15. Next Steps

1. Review and approve UX research
2. Proceed to wireframing in Pencil
3. Create high-fidelity designs
4. User testing on prototypes
5. Handoff to development
