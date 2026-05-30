export const SITE = {
  title: 'cyberplain',
  description: 'Cybersecurity explained clearly. No hype, no jargon overload, no dumbing down.',
};

export const TOPICS = [
  {
    slug: 'basics',
    title: 'The Basics',
    description: 'Start here. The foundational concepts.',
    emoji: '🧱',
    articles: [
      'what-is-cybersecurity',
      'threats-vulnerabilities-risks',
      'cia-triad',
      'what-is-encryption',
    ],
  },
  {
    slug: 'attacks',
    title: 'How Attacks Work',
    description: 'Understanding the offense.',
    emoji: '⚔️',
    articles: [
      'what-is-phishing',
      'what-is-malware',
      'what-is-ransomware',
      'what-is-ddos',
      'what-is-social-engineering',
      'what-is-a-zero-day',
    ],
  },
  {
    slug: 'defense',
    title: 'How Defense Works',
    description: 'The tools and practices that protect you.',
    emoji: '🛡️',
    articles: [
      'what-is-a-firewall',
      'what-is-antivirus',
      'what-is-mfa',
      'what-is-a-vpn',
      'what-is-zero-trust',
      'what-is-endpoint-detection',
    ],
  },
  {
    slug: 'identity',
    title: 'Identity & Access',
    description: 'Who are you, and how does the system know?',
    emoji: '🔑',
    articles: ['what-is-authentication', 'what-are-credentials', 'what-is-identity-theft', 'what-is-privilege-escalation'],
  },
  {
    slug: 'data',
    title: 'Data & Privacy',
    description: 'What happens to your information.',
    emoji: '🔒',
    articles: ['what-is-a-data-breach', 'what-is-the-dark-web', 'what-is-gdpr', 'what-is-data-encryption-at-rest'],
  },
  {
    slug: 'organizations',
    title: 'For Organizations',
    description: 'How businesses handle security.',
    emoji: '🏢',
    articles: ['what-is-incident-response', 'what-is-a-security-audit', 'what-is-penetration-testing', 'what-is-compliance'],
  },
  {
    slug: 'advanced',
    title: 'Advanced Concepts',
    description: 'Deeper territory.',
    emoji: '🧠',
    articles: ['what-are-supply-chain-attacks', 'what-is-cyber-warfare', 'what-is-offensive-security', 'what-is-threat-intelligence'],
  },
];
