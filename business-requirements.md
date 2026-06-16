# Business Requirements Document — UB Group

> **Version:** 1.0
> **Date:** 2026-06-04
> **Author:** Business Analyst (AI)
> **Status:** Draft

---

## 1. Executive Summary

UB Group ("Ulaanbaatar Group" LLC) is a diversified Mongolian conglomerate operating across multiple sectors including construction, transportation, finance & investment, and lifestyle. Founded in 2006 as "Dorniin Ikh Gegee" LLC, the company has grown from 20 employees to approximately 500 professionals nationwide.

The company specializes in sustainable, eco-friendly construction and aims to drive Mongolia's economic advancement through innovative solutions and global benchmarks. This website redesign project aims to modernize their digital presence while maintaining their corporate identity and improving user experience.

## 2. Business Objectives & Success Metrics

| # | Objective | Success Metric | Target |
|---|---|---|---|
| 1 | Showcase company portfolio and projects | Page views on project pages | +50% increase |
| 2 | Attract potential investors and partners | Contact form submissions | +30% increase |
| 3 | Improve corporate brand image | Time on site | >3 minutes avg |
| 4 | Support recruitment efforts | Career page visits | Track monthly |

## 3. Stakeholder Analysis

| Role | Name/Department | Responsibility |
|------|----------------|---------------|
| Board Chairman | Batbaatar.Ts | Strategic oversight |
| CEO | Tuvshinbat.D | Executive decision making |
| Marketing Director | Solongo.B | Brand and digital strategy |
| Finance Manager | Bayarjargalan.G | Budget approval |
| IT/Technical | External agency | Website development |

## 4. Scope

### 4.1 In-scope
- Homepage with hero section and company overview
- About Us page with history, vision, mission, values
- Business/Services page showcasing 4 sectors
- Sustainable Development page
- Human Resources/Careers page
- Cooperate/Partners page with procurement info
- News/Blog section
- Contact page with form and company info
- Multi-language support (Mongolian + English)
- Responsive design for mobile and desktop
- SEO optimization

### 4.2 Out-of-scope
- E-commerce functionality
- User login/registration system
- Real-time chat support
- Custom web applications
- Integration with internal ERP systems

## 5. Target Audience & User Personas

### Primary Persona — Investors & Partners
- **Demographics:** Business professionals, ages 35-55, Mongolia and international
- **Goals:** Evaluate company credibility, review project portfolio, explore partnership opportunities
- **Pain Points:** Difficulty finding detailed project information, outdated website design
- **Tech Proficiency:** Moderate to high

### Secondary Persona — Job Seekers
- **Demographics:** Young professionals, ages 22-35, Mongolia
- **Goals:** Find career opportunities, learn about company culture
- **Pain Points:** Limited job posting information, unclear application process
- **Tech Proficiency:** High

### Tertiary Persona — General Public
- **Demographics:** Mixed ages, Mongolian residents
- **Goals:** Learn about company activities, find contact information
- **Pain Points:** Language barriers, navigation complexity
- **Tech Proficiency:** Mixed

## 6. Site Information Architecture & Sitemap

### 6.1 Page Hierarchy
```text
Home
├── About Us
│   ├── Company Overview
│   ├── History/Timeline
│   ├── Vision & Mission
│   ├── Values
│   └── Management Team
├── Business
│   ├── Buildings & Real Estate
│   ├── Finance & Investment
│   ├── Lifestyle
│   └── Transport Logistics
├── Sustainable Development
│   ├── Orientation Principles
│   └── Projects
├── Human Resource
│   ├── Work Environment
│   └── Career Opportunities
├── Cooperate
│   ├── Procurement Policies
│   └── Supplier Registration
├── News
│   ├── Company News
│   └── Announcements
└── Contact
    ├── Location
    └── Contact Form
```

### 6.2 Navigation Structure
- **Header:** About Us, Business, Sustainable Development, Human Resource, Cooperate, News, Language Toggle (MN/EN)
- **Footer:** Logo, Location, Contact Phone, Social Media Links, Copyright
- **Mobile:** Hamburger menu with all primary nav items

## 7. Functional Requirements

### 7.1 Section-specific Requirements

#### Homepage
- **Purpose:** First impression, showcase company identity
- **Content:** Hero image with company buildings, key statistics (5+ sectors, 10+ projects, 100+ investors), feature cards
- **CTA:** Learn more about company, view projects
- **Interactions:** Smooth scrolling, image carousels

#### About Us
- **Purpose:** Company credibility and background
- **Content:** Company description, history timeline (2006-2025), vision/mission/values, management team photos and bios
- **CTA:** Contact us, view projects
- **Interactions:** Expandable timeline, team member cards

#### Business/Services
- **Purpose:** Showcase business sectors and projects
- **Content:** 4 sector categories with icons, project listings, project details
- **CTA:** View project details, contact for partnership
- **Interactions:** Tabbed navigation between sectors, project galleries

#### Sustainable Development
- **Purpose:** Demonstrate commitment to UN SDGs
- **Content:** Orientation principles, UN goal targets, project showcase
- **CTA:** Learn more about specific projects
- **Interactions:** Project carousel, goal target details

#### Human Resource
- **Purpose:** Recruitment and employer branding
- **Purpose:** Attract talent and showcase work environment
- **Content:** Company culture, benefits, job listings, application process
- **CTA:** Apply for positions, contact HR
- **Interactions:** Job filtering, application forms

#### Cooperate
- **Purpose:** Procurement and partnership information
- **Content:** Procurement policies, business ethics, open tender announcements, supplier registration form
- **CTA:** Register as supplier, download policies
- **Interactions:** Form submission, document downloads

#### News
- **Purpose:** Company updates and announcements
- **Content:** News articles, press releases, company achievements
- **CTA:** Read more, share articles
- **Interactions:** Article filtering, pagination, social sharing

#### Contact
- **Purpose:** Enable communication with company
- **Content:** Address, phone, email, contact form, map
- **CTA:** Submit inquiry, call phone number
- **Interactions:** Form validation, map integration

### 7.2 E-commerce Requirements
Not applicable — this is a corporate information website without product sales.

### 7.3 Content Management Requirements
- CMS integration via erxes for all content
- Ability to add/edit news articles
- Update management team information
- Modify project listings
- Update contact information

### 7.4 Multi-language Requirements
- Primary language: Mongolian (MN)
- Secondary language: English (EN)
- Full content translation for all pages
- Language switcher in header
- URL structure: /mn/ or /en/ prefixes

### 7.5 User Account & Authentication
Not required for this corporate website.

### 7.6 Search & Filtering
- Optional: Site-wide search functionality
- News article filtering by date/category

## 8. Non-functional Requirements

### 8.1 Performance
- Page load time: < 3 seconds
- Time to First Byte (TTFB): < 200ms
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1

### 8.2 SEO
- Meta tags for all pages
- Structured data for organization
- XML sitemap generation
- Robots.txt configuration
- OG tags for social sharing

### 8.3 Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Alt text for images
- Sufficient color contrast

### 8.4 Security
- HTTPS enforcement
- Form spam protection
- Regular security updates

### 8.5 Browser & Device Support
- Chrome, Firefox, Safari, Edge (latest 2 versions)
- Responsive design: Mobile (320px+), Tablet (768px+), Desktop (1024px+)

## 9. Design Direction

### 9.1 Visual Style
- Professional, corporate, modern
- Clean layouts with ample whitespace
- Trust-building through transparency
- Sophisticated but approachable

### 9.2 Color Palette
- **Primary:** Deep blue (#1e3a5f or similar corporate blue)
- **Secondary:** White/Light gray backgrounds
- **Accent:** Gold or warm accent for highlights
- **Neutral:** Dark text on light backgrounds

*Note: Exact colors to be extracted from existing brand guidelines or current website*

### 9.3 Typography
- Professional sans-serif fonts
- Clear hierarchy: H1, H2, H3, body, captions
- Mongolian and English font support

### 9.4 Imagery & Photography
- High-quality building and project photos
- Professional team photos
- Corporate event photography
- Icons for business sectors

## 10. CTA Strategy & Conversion Goals

| Location | CTA Text | Destination | Goal |
|----------|----------|------------|------|
| Hero | "Learn More" or "Explore Our Projects" | About/Business page | Engagement |
| About | "Contact Us" | Contact page | Lead generation |
| Business | "View Project Details" | Individual project | Engagement |
| Cooperate | "Register as Supplier" | Supplier form | Partnership |
| Human Resource | "View Open Positions" | Careers section | Recruitment |
| News | "Read Full Article" | Article page | Engagement |
| Contact | "Send Message" | Form submission | Lead generation |

## 11. Success Metrics & Acceptance Criteria

### 11.1 Quantitative Metrics
- Page load speed: < 3 seconds
- Mobile responsiveness score: > 90
- SEO score: > 85
- Accessibility score: > 90

### 11.2 Qualitative Criteria
- Professional appearance matching corporate brand
- Intuitive navigation structure
- Clear content hierarchy
- Smooth user experience across devices

## 12. Assumptions & Constraints

### Assumptions
- Existing brand assets (logo, colors) will be provided or extracted
- Content for all pages is available or can be migrated
- erxes CMS is properly configured and accessible
- Hosting and deployment infrastructure is ready

### Constraints
- Must maintain existing URL structure where possible
- Must support both Mongolian and English
- Budget and timeline to be determined
- Must comply with Mongolian data regulations

## 13. References & Appendices

### 13.1 Reference Documents
- Current website: https://www.ubgroup.mn/
- English version: https://www.ubgroup.mn/en
- erxes CMS configuration: site.config.json

### 13.2 Competitor Analysis
To be conducted during UX research phase.

### 13.3 Glossary

| Term | Definition |
|------|-----------|
| UB Group | Ulaanbaatar Group LLC — parent company |
| LLC | Limited Liability Company |
| NBFI | Non-Banking Financial Institution |
| SDG | Sustainable Development Goals (UN) |
| CMS | Content Management System |
| BRD | Business Requirements Document |
