export interface ProjectImage {
  url: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  niche: string;
  impact: string;
  period: string;
  description: string;
  role?: string;
  features_detailed?: { category: string; items: string[] }[];
  security_highlights?: string[];
  features: string[];
  tags: string[];
  links: { live: string; github: string };
  image: string;
  gallery: ProjectImage[];
  videoUrl: string;
  full_stack_details?: string[];
  team_members?: string[];
  publications?: { title: string; venue: string; url: string }[];
}

export const PROJECTS: Project[] = [
  {
    slug: 'sec-admission-portal',
    title: 'SEC Admission Portal',
    niche: 'End-to-End Applicant Management',
    impact: 'Maintained for 2 admission cycles with zero downtime.',
    period: 'Live Production',
    description: 'A production-grade admission platform with student self-service and admin seat planning. It supports the complete workflow: applicant onboarding, OTP verification, document upload, SSLCommerz payments, and an issue ticket system.',
    role: 'Designed full UX in Figma and implemented complete frontend/backend using Next.js. Deployed to VPS server and managed with git-runner CI/CD pipeline. Refactored for security and maintained across multiple cycles.',
    features_detailed: [
      { category: 'Public Interface', items: ['Live Notices & Circulars', 'Real-time Result Checking', 'Dynamic Seat Plan Generation', 'Calculator Accessibility List'] },
      { category: 'Applicant Flow', items: ['Multi-step Smart Form', 'Email/Phone OTP Verification', 'Cloudflare Turnstile Protected', 'SSLCommerz Payment Integration', 'Issue Tracking Ticket System'] },
      { category: 'Admin Panel', items: ['RBAC Access Control', 'Applicant Management', 'PDF/Excel Data Exports', 'Bulk SMS Communication', 'Random Roll Assignment', 'Document Verification'] }
    ],
    security_highlights: [
      'Centralized RBAC Middleware for route protection',
      'Rate limiting & Bot protections via Cloudflare',
      'Mandatory 2FA Email Verification for admin updates',
      'Encrypted SSLCommerz payment webhooks',
      'Suspicious IP tracker & auto-block system'
    ],
    full_stack_details: ['Next.js 14 (App Router)', 'TypeScript & Tailwind CSS', 'MySQL with Prisma ORM', 'SSLCommerz Payment Gateway', 'Cloudflare Turnstile', 'VPS with Docker & CI/CD'],
    features: ['Multi-step App', 'Seat Planning', 'RBAC Middleware', 'Rate Limiting'],
    tags: ['Next.js', 'MySQL', 'Docker', 'SSLCommerz', 'CI/CD Pipeline', 'RBAC', 'Prisma'],
    links: { live: 'https://admission.sec.ac.bd/', github: 'https://github.com/cslomarfaruk/admission.sec.ac.bd' },
    image: '/admission.sec.ac.bd/LandingPage.png',
    gallery: [
      // ADMIN SECTION
      { url: '/admission.sec.ac.bd/admin-stats.png', description: 'Comprehensive admin dashboard with detailed statistical data visualizations, designed for system overview and monitoring.' },
      // { url: '/admission.sec.ac.bd/admin-dashboard.png', description: 'The main administrative hub for managing student applications and monitoring real-time system metrics.' },
      { url: '/admission.sec.ac.bd/admin-profile-rbac.png', description: 'Advanced administrative profile management with Role-Based Access Control (RBAC) supporting semi-admin and super-admin roles, secured with mandatory 2FA email verification.' },
      { url: '/admission.sec.ac.bd/admin-notices.png', description: 'Admin notice management system supporting PDF document uploads and scheduled publishing with automated visibility timers.' },
      { url: '/admission.sec.ac.bd/applicant-list.jpg', description: 'Complete applicant registry with advanced filtering, pagination, and tools for updating student application records.' },
      { url: '/admission.sec.ac.bd/sms-management.png', description: 'SMS management console to send communications to individual numbers or filtered groups of students.' },
      { url: '/admission.sec.ac.bd/interview-sms.png', description: 'Automated interview scheduling tool that notifies selected students via SMS directly to their registered phone numbers.' },
      { url: '/admission.sec.ac.bd/timeline-management.png', description: 'Dynamic date management system to control the timeline for applications, payments, and admit card availability.' },
      { url: '/admission.sec.ac.bd/random-roll-assign-page-for-admin.png', description: 'Automated and randomized roll number assignment interface for ensuring fair exam seat allocation.' },
      { url: '/admission.sec.ac.bd/seat-plan-gen.png', description: 'One-click seat plan and attendance sheet generator with bulk download capability in ZIP format.' },
      { url: '/admission.sec.ac.bd/admin-reports.png', description: 'Detailed reporting interface for admission controllers, showing room-wise student counts and question paper requirements.' },
      { url: '/admission.sec.ac.bd/data-export.png', description: 'Data export utility for generating official records for admission authorities to process test results.' },
      { url: '/admission.sec.ac.bd/student-verification.jpg', description: 'Secure student verification portal for use by invigilators during the admission test to validate identities.' },
      { url: '/admission.sec.ac.bd/issue-resolver-page-for-admin.png', description: 'Centralized administrative interface for managing and resolving student-reported technical or administrative issues.' },
      { url: '/admission.sec.ac.bd/ip-tracker.png', description: 'Security monitoring system tracking IP addresses and detecting bot behavior to protect the platform from malicious requests.' },

      // STUDENT SECTION
      { url: '/admission.sec.ac.bd/student-dashboard-unpaid.jpg', description: 'Student dashboard view for unpaid applicants, providing quick access to payment portals and communication with admin.' },
      { url: '/admission.sec.ac.bd/student-issues.png', description: 'Integrated messaging system for students to track their support tickets and communicate directly with the admin team.' },
      { url: '/admission.sec.ac.bd/applicant-downloads.jpg', description: 'Student download portal for retrieving applicant copies, payment receipts, and admit cards.' },

      // PUBLIC SECTION
      { url: '/admission.sec.ac.bd/LandingPage.png', description: 'The official landing page for the SEC Admission Portal, featuring latest news and application entry points.' },
      { url: '/admission.sec.ac.bd/public-apply-now.png', description: 'Public application gateway offering clear paths for both General and English Medium applicants.' },
      { url: '/admission.sec.ac.bd/apply-options.png', description: 'Comparison view of the application process for different mediums to help students choose the correct path.' },
      { url: '/admission.sec.ac.bd/english-and-general-student-application-next-step.png', description: 'The first phase of the application form collecting initial academic and personal information.' },
      { url: '/admission.sec.ac.bd/otp-verification.png', description: 'Two-factor authentication step for applicants to verify their identity via both email and phone SMS OTP.' },
      { url: '/admission.sec.ac.bd/doc-upload.jpg', description: 'Secure document upload interface for applicants to submit required academic transcripts and photos.' },
      { url: '/admission.sec.ac.bd/payment-page.png', description: 'Unified payment interface integrated with SSLCommerz, supporting all major banking and card networks.' },
      { url: '/admission.sec.ac.bd/login-cloudflare.png', description: 'Secure login portal protected by Cloudflare Turnstile and rate-limiting to prevent unauthorized access.' },
      { url: '/admission.sec.ac.bd/account-recovery.png', description: 'Automated account recovery system for students who have forgotten their User ID or Password.' },
      { url: '/admission.sec.ac.bd/public-important-dates.png', description: 'Public-facing timeline showing all critical dates for the current admission session.' },
      { url: '/admission.sec.ac.bd/public-notices.png', description: 'Official notice board where students can access all public documents and announcements.' },
      { url: '/admission.sec.ac.bd/calculator-list.png', description: 'Informational page showing the list of allowed calculators, demonstrating the platform\'s structured content delivery.' },
      { url: '/admission.sec.ac.bd/public-help.png', description: 'Public help desk and FAQ section for resolving common application issues without logging in.' }
    ],
    videoUrl: ''
  },
  {
    slug: 'hive-social-media',
    title: 'Hive Social Media',
    niche: 'Real-time Social Media Platform',
    impact: 'Architected sub-100ms message latency for high-engagement feeds.',
    period: 'Production-Ready',
    description: 'A massive real-time social ecosystem engineered for scale. Built to demonstrate my capability in handling complex graph relationships, modular feed algorithms, and low-latency global messaging.',
    full_stack_details: ['React.js & Vite', 'Firebase Realtime Database', 'Firebase Authentication', 'Cloud Storage', 'Framer Motion', 'Tailwind CSS'],
    features: ['Real-time Messaging', 'Feed Algorithms', 'Graph Data', 'NoSQL Scale'],
    tags: ['React', 'Firebase', 'Real-time', 'NoSQL', 'Framer Motion'],
    links: { live: 'https://hive.devcsl.tech/', github: 'https://github.com/cslomarfaruk/hive' },
    image: '/hive/homepage-hive-with-all-the-public-post-and-all-menue-just-like-facebook.png',
    gallery: [
      { url: '/hive/hive-signup.png', description: 'Modern onboarding flow supporting traditional email signup and one-click Google authentication.' },
      { url: '/hive/hive-login.png', description: 'Elegant login page featuring a guest profile option for immediate platform exploration without registration.' },
      { url: '/hive/hive-home.png', description: 'The main feed interface featuring real-time post updates, social interactions, and a layout optimized for high engagement.' },
      { url: '/hive/hive-profile.png', description: 'Comprehensive user profiles featuring timeline management, cover photos, bio updates, and social graph integration.' },
      { url: '/hive/hive-friends.png', description: 'A robust friend management system for sending/accepting requests and exploring the social network.' },
      { url: '/hive/hive-chat.png', description: 'Real-time messaging system with support for group chats, individual replies, message editing, and full conversation control.' },
      { url: '/hive/hive-games.png', description: 'Integrated gaming platform allowing users to play live matches with friends, track global rankings, and share victories to their feed.' },
      { url: '/hive/9x9-ttt-game-page.png', description: 'Strategic 9x9 Ultimate Tic-Tac-Toe game integrated directly into the social ecosystem.' },
      { url: '/hive/connect4-game-ss.png', description: 'Real-time Connect 4 multiplayer game with live state synchronization.' },
      { url: '/hive/hive-light-mode.png', description: 'Premium light mode support featuring a clean comment section with nested reply functionality.' },
    ],
    videoUrl: ''
  },
  {
    slug: 'certichain',
    title: 'CertiChain',
    niche: 'Blockchain / Zero-Knowledge Proofs',
    impact: 'Academic thesis accepted at ICCIT 2026 — a blockchain-based certificate verification system with ZK-proofs and face recognition.',
    period: 'Final Year Thesis (2026)',
    description: 'A blockchain-based certificate generation and verification platform built as an academic thesis project. CertiChain uses zero-knowledge proofs (ZK-proofs) to enable privacy-preserving certificate verification, combined with face-recognition integration for identity-aware authentication. The system features role-based access for admins, students, and the public — with separate workflows for certificate issuance, gradesheet management, and tamper-proof verification.',
    role: 'Full-Stack Developer — responsible for frontend/backend architecture, blockchain integration, ZK-proof implementation, face verification module, role-based access control, and deployment to production VPS. Team project with Labib Al Faisal and Jarin Siddiqua.',
    team_members: ['Md. Omar Faruk (Full-Stack Developer)', 'Labib Al Faisal', 'Jarin Siddiqua'],
    publications: [
      {
        title: 'CertiChain: Blockchain-Based Certificate Generation & Verification with ZK-Proofs',
        venue: 'ICCIT 2026 (International Conference on Computer and Information Technology)',
        url: '/certichain/ICCIT_Paper.pdf'
      }
    ],
    features_detailed: [
      {
        category: 'Blockchain & Cryptography',
        items: [
          'On-chain certificate hash storage for tamper-proof verification',
          'Zero-knowledge proof (ZK-proof) based public verification',
          'Cryptographic integrity validation without exposing private data'
        ]
      },
      {
        category: 'Student Portal',
        items: [
          'Student dashboard with profile & academic info',
          'Certificate and gradesheet download with controlled download limits',
          'Profile update requests routed to admin approval',
          'Certificate revocation request workflow'
        ]
      },
      {
        category: 'Public Verification',
        items: [
          'Public certificate verifier page (no login required)',
          'ZK-proof verification for privacy-preserving validation',
          'Face verification for identity-aware certificate authentication',
          'Verified student demo with face match confirmation'
        ]
      }
    ],
    security_highlights: [
      'Blockchain-backed certificate integrity',
      'Zero-knowledge proofs for privacy-preserving verification',
      'Face recognition for identity-aware authentication',
      'Role-based access control (Admin / Student / Public)',
      'Download limits and revocation workflows for certificate governance'
    ],
    full_stack_details: [
      'Next.js (App Router)',
      'TypeScript & Tailwind CSS',
      'Blockchain (Smart Contracts)',
      'ZK-Proof Libraries',
      'Face Recognition API',
      'MySQL with Prisma ORM',
      'Docker & VPS Deployment'
    ],
    features: ['ZK-Proof Verification', 'Face Recognition', 'Blockchain Certificates', 'RBAC'],
    tags: ['Blockchain', 'ZK-Proofs', 'Next.js', 'Face Recognition', 'TypeScript', 'Prisma', 'Docker'],
    links: { live: 'https://c.devcsl.tech', github: '#' },
    image: '/certichain/landing_page.png',
    gallery: [
      { url: '/certichain/landing_page.png', description: 'CertiChain landing page — the public entry point for certificate verification and system overview.' },
      { url: '/certichain/public_verifier_page.png', description: 'Public certificate verifier — anyone can validate a certificate\'s authenticity without needing an account.' },
      { url: '/certichain/zk_proof_verification(public).png', description: 'Zero-knowledge proof verification interface — validates certificate integrity without revealing private student data.' },
      { url: '/certichain/face_verification_for_certificate_verification.png', description: 'Face recognition module for identity-aware certificate verification, ensuring the requester matches the certificate holder.' },
      { url: '/certichain/verified_student_demo_after_face_verification.png', description: 'Verification success screen showing confirmed student identity after face match with blockchain-stored credentials.' },
      { url: '/certichain/stdent_dashboard(after_login).png', description: 'Student dashboard after login — centralized view of certificates, gradesheets, and profile management.' },
      { url: '/certichain/student_certificate_with_download_limit_and_revoke_request.png', description: 'Certificate management panel with download count limits and the ability to submit revocation requests to admin.' },
      { url: '/certichain/student_gradesheet_download_with_downlaod_limit.png', description: 'Gradesheet download interface with enforced download limits for controlled document distribution.' },
      { url: '/certichain/student_profile_with_update_information_request_to_admin.png', description: 'Student profile view with the ability to request information updates, which are routed through admin approval.' }
    ],
    videoUrl: ''
  },
  {
    slug: 'detect-vehicle-ai',
    title: 'Detect Vehicle AI',
    niche: 'AI-Powered Mobility Intelligence',
    impact: 'Engineered an end-to-end AI platform with real-time WebSocket inference and 11+ vehicle class support.',
    period: 'Live Production',
    description: 'A production-ready full-stack computer vision platform that performs AI-powered vehicle detection and classification across live streams, images, and video uploads. Built for traffic analysis and smart monitoring, it features low-latency WebSocket inference, speed estimation, and object tracking.',
    role: 'Architected and built the full-stack system including the FastAPI backend with YOLO/ONNX inference and a real-time Next.js frontend with WebSocket streaming. Implemented secure deployment with Docker, Traefik, and Turnstile CAPTCHA.',
    full_stack_details: ['Next.js 14', 'FastAPI (Python)', 'YOLOv8 ONNX', 'WebSocket (Live Inference)', 'Docker & Traefik', 'Cloudflare Turnstile'],
    features: ['Real-time WebSocket', 'ONNX Optimization', 'Speed Estimation', 'Dockerized'],
    tags: ['Next.js', 'FastAPI', 'YOLO', 'WebSocket', 'Docker', 'OpenCV', 'Python', 'ONNX'],
    links: { live: 'https://vehicle.devcsl.tech', github: 'https://github.com/cslomarfaruk/detect-vehicle-ai' },
    image: '/vehicle/landing-page.png',
    gallery: [
      { url: '/vehicle/landing-page.png', description: 'The platform landing page showcasing the AI capabilities and core entry points for live stream or file analysis.' },
      { url: '/vehicle/vehicle-live.png', description: 'Real-time inference interface supporting live camera access and screen sharing with instant vehicle detection and confidence scoring.' },
      { url: '/vehicle/upload-a-photo-to-detect-vehicle-and-lebel-them.png', description: 'Static image analysis tool allowing users to upload photos for precise vehicle classification and labeling.' },
      { url: '/vehicle/vehicle-video.png', description: 'Advanced video processing pipeline that automatically tags detected vehicles and provides a downloadable processed version.' }
    ],
    videoUrl: ''
  },
  {
    slug: 'managemed-v2',
    title: 'ManageMed V2',
    niche: 'Healthcare Management / SaaS',
    impact: 'Architected a scalable patient-provider ecosystem with 100% type-safety and accessible UI components.',
    period: 'Active Development',
    description: 'A comprehensive medical service platform designed to bridge the gap between patients and healthcare providers. Built with a focus on high-performance rendering and a "mobile-first" medical dashboard experience, featuring secure scheduling and provider discovery.',
    full_stack_details: ['Next.js 14 (App Router)', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Lucide React', 'Framer Motion'],
    features: [
      'Modular Healthcare Dashboard',
      'Type-Safe API Integration',
      'Dynamic Appointment Scheduling',
      'Custom shadcn/ui Component Library',
      'Fluid Micro-interactions with Framer Motion'
    ],
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Framer Motion'],
    links: {
      live: 'https://managemed.vercel.app/',
      github: 'https://github.com/cslomarfaruk/medicare-bd'
    },
    image: '/managemed/managemed-landing-page.png',
    gallery: [
      { url: '/managemed/managemed-landing-page.png', description: 'The main landing page for ManageMed, designed for trust and professional healthcare representation.' },
      { url: '/managemed/one-platform-for-every-workflow.png', description: 'Service overview detailing the integrated workflows for both patients and medical providers.' },
      { url: '/managemed/pricing-section.png', description: 'Transparent pricing and membership modules tailored for clinics and individual practitioners.' },
      { url: '/managemed/Where clinics in Bangladesh.png', description: 'Interactive map and directory for finding clinics and hospitals across Bangladesh.' },
      { url: '/managemed/early-access-form-for-book-a-demo.png', description: 'Lead generation and early access booking system for clinics interested in the platform.' }
    ],
    videoUrl: ''
  },
  {
    slug: 'ultimate-ttt',
    title: 'Ultimate 9x9 Tic-Tac-Toe',
    niche: 'Gaming / Strategic Logic',
    impact: 'Implemented complex nested-grid state management with minimax-inspired AI logic.',
    period: 'Completed Project',
    description: 'An advanced, multi-layered version of the classic Tic-Tac-Toe. Features a 9x9 grid where players must win small boards to conquer the larger arena. Includes a challenging AI opponent and a local multiplayer mode with a focus on seamless state synchronization.',
    full_stack_details: ['Next.js', 'React.js', 'Tailwind CSS', 'Recursive Algorithms', 'Local State Management'],
    features: [
      'Recursive Grid Logic',
      'Intelligent AI Opponent',
      'Dynamic Win-Condition Detection',
      'Modern UI/UX',
      'Real-time Score Tracking'
    ],
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Algorithms', 'Logic'],
    links: {
      live: 'https://advanched-ttt.vercel.app/',
      github: 'https://github.com/cslomarfaruk/advanched-9x9--tic-tak-toe-gameplay-with-ai-or-friends'
    },
    image: '/uttt/tik-tac-toe-game-page.png',
    gallery: [
      { url: '/uttt/tik-tac-toe-game-page.png', description: 'The main gameplay interface featuring the nested 9x9 grid and real-time state highlighting for valid moves.' },
      { url: '/uttt/ttt-game-settings-page.png', description: 'Configuration page for selecting game modes (AI vs Friend) and difficulty levels.' }
    ],
    videoUrl: ''
  },
  {
    slug: 'eggfusionnet',
    title: 'EggFusionNet (DIP Project)',
    niche: 'Deep Learning / Computer Vision',
    impact: 'Co-authored a research-grade CNN architecture for automated eggplant leaf disease classification with 90%+ accuracy',
    period: 'Completed Academic Project',
    description: 'An advanced digital image processing project that utilizes a custom deep learning framework to identify various eggplant leaf diseases. This project involved complex data preprocessing, model training on specialized agricultural datasets, and evaluating performance metrics to ensure reliability in field conditions.',
    features: [
      'Custom CNN Architecture (EggFusionNet)',
      'Automated Disease Detection',
      'Image Preprocessing & Augmentation',
      'Comprehensive Performance Analytics',
      'Scalable Model Training Pipeline'
    ],
    tags: ['Python', 'TensorFlow', 'Keras', 'Computer Vision', 'Deep Learning'],
    links: {
      live: '#',
      github: 'https://github.com/cslomarfaruk/dip_project'
    },
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=800&auto=format&fit=crop',
    gallery: [],
    videoUrl: ''
  },
  {
    slug: 'sec-mobile-commerce',
    title: 'SEC Mobile Commerce',
    niche: 'E-commerce / Fintech',
    impact: 'Developed a full-stack marketplace with secure payment integration and a comprehensive administrative ERP',
    period: 'Completed Project',
    description: 'A robust e-commerce solution tailored for mobile and electronics. Features a high-performance Next.js frontend paired with a Django REST Framework backend, offering seamless product management, secure checkout workflows, and a dual-interface system for customers and administrators.',
    features: [
      'Dynamic Product Cataloging',
      'Secure Payment Gateway Integration',
      'Advanced Admin Dashboard (Product/Order Management)',
      'JWT-based Authentication System',
      'Full-stack API Synchronization'
    ],
    tags: ['Django', 'Next.js', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
    links: {
      live: '#',
      github: 'https://github.com/cslomarfaruk/sec-mobile-commerce'
    },
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800&auto=format&fit=crop',
    gallery: [],
    videoUrl: ''
  },
  {
    slug: 'personal-portfolio-v1',
    title: 'Personal Portfolio v1',
    niche: 'Digital Identity / Web Presence',
    impact: 'First-generation professional showcase establishing a baseline for minimalist dev-branding',
    period: 'Legacy Project (2025)',
    description: 'The initial iteration of my professional identity. Built with a focus on simplicity and clean typography to highlight core engineering skills and early projects during my CSE undergraduate tenure.',
    features: [
      'Minimalist Design Language',
      'Project Showcase Gallery',
      'Integrated Contact System',
      'Responsive Layout Architecture'
    ],
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    links: {
      live: 'https://cslomarfaruk.vercel.app/',
      github: 'https://github.com/cslomarfaruk/portfolio-v1'
    },
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&auto=format&fit=crop',
    gallery: [],
    videoUrl: ''
  },
  {
    slug: 'iupc-registration',
    title: 'IUPC Registration Portal',
    niche: 'Event Management / Automation',
    impact: 'Streamlined multi-team registration and automated participant verification for high-stakes programming contests',
    period: 'Completed Project',
    description: 'A dedicated registration platform engineered to manage the complex intake process of Inter-University Programming Contests. The system handles team credentials, institution verification, and participant data with a focus on data integrity and administrative ease of use.',
    features: [
      'Multi-Step Team Registration Workflow',
      'Institutional Verification Logic',
      'Real-time Registration Status Tracking',
      'Admin Dashboard for Participant Management',
      'Optimized SQL Database for High-Concurrency Intake'
    ],
    tags: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'shadcn/ui', 'Prisma'],
    links: {
      live: '#',
      github: 'https://github.com/cslomarfaruk/cse-iupc-registration'
    },
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
    gallery: [],
    videoUrl: ''
  }
];
