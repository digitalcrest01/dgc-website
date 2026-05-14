import { ShieldCheck, ClipboardCheck, Wrench, Cloud, type LucideIcon } from 'lucide-react';

export type ServiceCapability = {
  title: string;
  detail: string;
};

export type Service = {
  slug: string;
  index: string;
  name: string;
  shortName: string;
  tagline: string;
  icon: LucideIcon;
  intro: string;
  outcomes: string[];
  capabilities: ServiceCapability[];
  stack: string[];
  artifact: {
    label: string;
    lines: { tag?: string; text: string }[];
  };
};

export const services: Service[] = [
  {
    slug: 'application-security',
    index: '01',
    name: 'Application Security',
    shortName: 'Application Security',
    tagline: 'Threat modelling, secure SDLC, code and pipeline review.',
    icon: ShieldCheck,
    intro:
      'We work inside engineering teams to find vulnerabilities early, shift assurance left, and give product owners a clear, measurable view of risk across the software you build and buy.',
    outcomes: [
      'Reduced critical findings in production by design',
      'Threat models that engineers actually use',
      'Faster releases with security gates that fit your pipeline',
      'Evidence ready for SOC 2, ISO 27001 and customer reviews',
    ],
    capabilities: [
      {
        title: 'Threat modelling at sprint pace',
        detail:
          'STRIDE and attack tree workshops aligned to your design reviews, with living diagrams stored next to the code.',
      },
      {
        title: 'Secure code and architecture review',
        detail:
          'Manual review of high risk components, paired with SAST tuning so the noise goes down and the signal goes up.',
      },
      {
        title: 'API and web application testing',
        detail:
          'Authenticated grey box testing of REST, GraphQL and mobile backends, mapped to OWASP ASVS and your business logic.',
      },
      {
        title: 'Pipeline and supply chain hardening',
        detail:
          'SBOMs, signed builds, secret scanning, and policy as code so the path to production is the secure path.',
      },
      {
        title: 'Developer enablement',
        detail:
          'Targeted training and office hours so the team owns its security posture between engagements.',
      },
    ],
    stack: [
      'OWASP ASVS',
      'NIST SSDF',
      'Semgrep',
      'CodeQL',
      'Burp Suite',
      'Snyk',
      'Trivy',
      'GitHub Advanced Security',
      'SLSA',
      'Sigstore',
    ],
    artifact: {
      label: 'threat-model.md',
      lines: [
        { tag: 'asset', text: 'customer-pii-store' },
        { tag: 'trust', text: 'web → api → kms → rds' },
        { tag: 'stride', text: 'S.T.R.I.D.E. mapped per flow' },
        { tag: 'mit', text: '14 controls, 4 accepted, 10 tracked' },
        { tag: 'owner', text: 'platform.security@' },
      ],
    },
  },
  {
    slug: 'grc-and-audit',
    index: '02',
    name: 'GRC and Audit',
    shortName: 'GRC and Audit',
    tagline: 'Frameworks, controls and audit readiness without the theatre.',
    icon: ClipboardCheck,
    intro:
      'We build governance programmes that pass audit and survive a real incident. Pragmatic control design, evidence that writes itself, and a board narrative that holds up to scrutiny.',
    outcomes: [
      'Certification ready in months, not quarters',
      'Control libraries mapped to multiple frameworks at once',
      'Continuous evidence collection wired into your stack',
      'Risk register the executive team can actually use',
    ],
    capabilities: [
      {
        title: 'ISO 27001 and SOC 2 readiness',
        detail:
          'Gap analysis, scoping, ISMS build out, statement of applicability and audit liaison through certification.',
      },
      {
        title: 'NIST CSF and CIS Controls',
        detail:
          'Maturity assessments with a costed roadmap, prioritised by risk reduction per pound spent.',
      },
      {
        title: 'Third party and supplier risk',
        detail:
          'Risk tiering, due diligence questionnaires, contract clauses and continuous monitoring of critical suppliers.',
      },
      {
        title: 'DORA, NIS2 and UK regulatory alignment',
        detail:
          'Operational resilience mapping, incident reporting playbooks and ICT risk register for regulated entities.',
      },
      {
        title: 'Virtual CISO',
        detail:
          'Fractional security leadership for scaleups: board reporting, programme delivery, and audit defence.',
      },
    ],
    stack: [
      'ISO 27001',
      'SOC 2',
      'NIST CSF',
      'CIS v8',
      'DORA',
      'NIS2',
      'PCI DSS',
      'Drata',
      'Vanta',
      'Eramba',
    ],
    artifact: {
      label: 'control-mapping.yaml',
      lines: [
        { tag: 'control', text: 'AC-2 account management' },
        { tag: 'iso', text: 'A.5.16 identity management' },
        { tag: 'soc2', text: 'CC6.1 logical access' },
        { tag: 'evidence', text: 'okta → drata → s3 (immutable)' },
        { tag: 'owner', text: 'people.ops + platform' },
      ],
    },
  },
  {
    slug: 'security-engineering',
    index: '03',
    name: 'Security Engineering',
    shortName: 'Security Engineering',
    tagline: 'Detection, identity and platform controls built to run.',
    icon: Wrench,
    intro:
      'We design and build the controls your security team operates every day. Identity, detection and response, secrets and key management, and the automation that keeps them honest.',
    outcomes: [
      'Identity that scales to thousands of users and services',
      'Detections tuned to your threat model, not a vendor demo',
      'Mean time to respond measured in minutes',
      'Toil reduced through automation, not extra headcount',
    ],
    capabilities: [
      {
        title: 'Identity and access engineering',
        detail:
          'SSO, MFA, SCIM, just in time access, privileged access workflows and workload identity for services.',
      },
      {
        title: 'Detection and response build outs',
        detail:
          'SIEM and XDR design, detection as code, playbooks, purple team exercises and runbook automation.',
      },
      {
        title: 'Secrets and key management',
        detail:
          'Vault, KMS and HSM patterns, secret rotation, envelope encryption and certificate lifecycle automation.',
      },
      {
        title: 'Endpoint and workload protection',
        detail:
          'EDR rollout, baseline hardening, container runtime security and policy enforcement at the kernel.',
      },
      {
        title: 'Incident response readiness',
        detail:
          'Tabletop exercises, comms plans, forensic readiness and 24x7 retainer options through partners.',
      },
    ],
    stack: [
      'Okta',
      'Entra ID',
      'HashiCorp Vault',
      'AWS KMS',
      'CrowdStrike',
      'SentinelOne',
      'Splunk',
      'Sentinel',
      'Sigma',
      'Tines',
    ],
    artifact: {
      label: 'detection.sigma',
      lines: [
        { tag: 'title', text: 'aws iam role assumed from new geo' },
        { tag: 'level', text: 'high' },
        { tag: 'logsource', text: 'cloudtrail' },
        { tag: 'detection', text: 'AssumeRole + geo ≠ baseline' },
        { tag: 'response', text: 'tines → slack + jit revoke' },
      ],
    },
  },
  {
    slug: 'cloud-architecture',
    index: '04',
    name: 'Cloud Architecture',
    shortName: 'Cloud Architecture',
    tagline: 'Secure, resilient, cost aware platforms on AWS, Azure and GCP.',
    icon: Cloud,
    intro:
      'We design cloud platforms that are secure by default and economical to run. Landing zones, network and data architecture, and the guardrails that keep teams moving fast without breaking the model.',
    outcomes: [
      'Multi account landing zones up in weeks',
      'Workload patterns that pass review on day one',
      'Cloud spend that tracks business value',
      'A platform that scales from first product to enterprise',
    ],
    capabilities: [
      {
        title: 'Landing zone and platform design',
        detail:
          'Account, subscription and project hierarchies, baseline guardrails, networking and shared services.',
      },
      {
        title: 'Zero trust networking',
        detail:
          'Segmentation, private endpoints, service mesh and east west controls for modern workloads.',
      },
      {
        title: 'Data architecture and protection',
        detail:
          'Classification, encryption strategy, tokenisation, data residency and analytics platform security.',
      },
      {
        title: 'Resilience and continuity',
        detail:
          'Multi region patterns, recovery objectives, chaos drills and DR runbooks that actually get tested.',
      },
      {
        title: 'FinOps and policy as code',
        detail:
          'Cost guardrails, OPA, Sentinel and SCPs, drift detection and infrastructure review automation.',
      },
    ],
    stack: [
      'AWS',
      'Azure',
      'GCP',
      'Terraform',
      'Pulumi',
      'Kubernetes',
      'Istio',
      'OPA',
      'CloudFormation',
      'Backstage',
    ],
    artifact: {
      label: 'landing-zone.tf',
      lines: [
        { tag: 'org', text: 'aws_organizations_organization' },
        { tag: 'ous', text: 'core / workloads / sandbox' },
        { tag: 'scp', text: 'deny region != eu-west-2' },
        { tag: 'baseline', text: 'guardduty + config + securityhub' },
        { tag: 'logging', text: 'central log archive (immutable)' },
      ],
    },
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
