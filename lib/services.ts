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
      'We find vulnerabilities early and give product owners a clear view of risk across the software you build and buy.',
    outcomes: [
      'Fewer critical findings in production',
      'Threat models engineers actually use',
      'Security gates that fit your pipeline',
      'Evidence ready for SOC 2 and ISO 27001',
    ],
    capabilities: [
      {
        title: 'Threat modelling at sprint pace',
        detail: 'STRIDE workshops tied to design reviews. Living diagrams stored with the code.',
      },
      {
        title: 'Secure code and architecture review',
        detail: 'Manual review of high risk components, paired with SAST tuned for signal over noise.',
      },
      {
        title: 'API and web application testing',
        detail: 'Authenticated grey box testing against OWASP ASVS and your business logic.',
      },
      {
        title: 'Pipeline and supply chain hardening',
        detail: 'SBOMs, signed builds, secret scanning, policy as code.',
      },
      {
        title: 'Developer enablement',
        detail: 'Targeted training and office hours so the team owns its posture between engagements.',
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
        { tag: 'stride', text: 'mapped per flow' },
        { tag: 'mit', text: '14 controls · 10 tracked' },
        { tag: 'owner', text: 'platform.security@' },
      ],
    },
  },
  {
    slug: 'grc-and-audit',
    index: '02',
    name: 'GRC and Audit',
    shortName: 'GRC and Audit',
    tagline: 'Frameworks, controls, and audit readiness without the theatre.',
    icon: ClipboardCheck,
    intro:
      'Governance programmes that pass audit and survive a real incident. Pragmatic control design and evidence that writes itself.',
    outcomes: [
      'Certification ready in months',
      'Controls mapped to multiple frameworks at once',
      'Continuous evidence wired into your stack',
      'A risk register the board can use',
    ],
    capabilities: [
      {
        title: 'ISO 27001 and SOC 2 readiness',
        detail: 'Gap analysis, scoping, ISMS build, statement of applicability, audit liaison.',
      },
      {
        title: 'NIST CSF and CIS Controls',
        detail: 'Maturity assessment with a costed roadmap, prioritised by risk reduction.',
      },
      {
        title: 'Third party and supplier risk',
        detail: 'Risk tiering, due diligence, contract clauses, continuous monitoring.',
      },
      {
        title: 'DORA, NIS2 and UK regulation',
        detail: 'Operational resilience mapping, incident reporting, ICT risk register.',
      },
      {
        title: 'Virtual CISO',
        detail: 'Fractional security leadership: board reporting, programme delivery, audit defence.',
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
        { tag: 'iso', text: 'A.5.16 identity' },
        { tag: 'soc2', text: 'CC6.1 logical access' },
        { tag: 'evidence', text: 'okta → drata → s3' },
        { tag: 'owner', text: 'people.ops + platform' },
      ],
    },
  },
  {
    slug: 'security-engineering',
    index: '03',
    name: 'Security Engineering',
    shortName: 'Security Engineering',
    tagline: 'Detection, identity, and platform controls built to run.',
    icon: Wrench,
    intro:
      'We design and build the controls your security team operates every day. Identity, detection, response, secrets, and the automation that keeps them honest.',
    outcomes: [
      'Identity that scales to thousands of users and services',
      'Detections tuned to your threat model',
      'Mean time to respond measured in minutes',
      'Toil cut through automation, not headcount',
    ],
    capabilities: [
      {
        title: 'Identity and access engineering',
        detail: 'SSO, MFA, SCIM, just in time access, workload identity.',
      },
      {
        title: 'Detection and response',
        detail: 'SIEM and XDR design, detection as code, playbooks, purple teaming.',
      },
      {
        title: 'Secrets and key management',
        detail: 'Vault, KMS and HSM patterns, secret rotation, certificate lifecycle.',
      },
      {
        title: 'Endpoint and workload protection',
        detail: 'EDR rollout, baseline hardening, container runtime security.',
      },
      {
        title: 'Incident response readiness',
        detail: 'Tabletops, comms plans, forensic readiness, 24x7 retainer options.',
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
        { tag: 'title', text: 'aws role assumed from new geo' },
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
    tagline: 'Secure, resilient, cost aware platforms on AWS, Azure, and GCP.',
    icon: Cloud,
    intro:
      'Cloud platforms that are secure by default and economical to run. Landing zones, network and data architecture, and the guardrails that keep teams fast.',
    outcomes: [
      'Multi account landing zones in weeks',
      'Workload patterns that pass review on day one',
      'Cloud spend that tracks business value',
      'A platform that scales from first product to enterprise',
    ],
    capabilities: [
      {
        title: 'Landing zone and platform design',
        detail: 'Account hierarchies, baseline guardrails, networking, shared services.',
      },
      {
        title: 'Zero trust networking',
        detail: 'Segmentation, private endpoints, service mesh, east west controls.',
      },
      {
        title: 'Data architecture and protection',
        detail: 'Classification, encryption, tokenisation, residency, analytics platform security.',
      },
      {
        title: 'Resilience and continuity',
        detail: 'Multi region patterns, recovery objectives, chaos drills, DR runbooks.',
      },
      {
        title: 'FinOps and policy as code',
        detail: 'Cost guardrails, OPA, Sentinel, SCPs, drift detection.',
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
        { tag: 'baseline', text: 'guardduty + securityhub' },
        { tag: 'logging', text: 'central archive (immutable)' },
      ],
    },
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
