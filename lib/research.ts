import type { ComponentType } from 'react';
import { AwsLandingZoneDiagram } from '@/components/diagrams/aws-landing-zone';
import { AzureZeroTrustDiagram } from '@/components/diagrams/azure-zero-trust';
import { GcpDataLakeDiagram } from '@/components/diagrams/gcp-data-lake';
import { MulticloudDetectionDiagram } from '@/components/diagrams/multicloud-detection';
import { SupplyChainDiagram } from '@/components/diagrams/supply-chain';
import { Soc2EvidenceDiagram } from '@/components/diagrams/soc2-evidence';

export type Section = { heading: string; paragraphs: string[]; list?: string[] };

export type ResearchPost = {
  slug: string;
  title: string;
  cloud: 'AWS' | 'Azure' | 'GCP' | 'Multi-cloud' | 'CI/CD' | 'GRC';
  useCase: string;
  readTime: string;
  published: string;
  summary: string;
  diagram: ComponentType;
  sections: Section[];
  controls: string[];
  takeaway: string;
};

export const research: ResearchPost[] = [
  {
    slug: 'aws-secure-landing-zone',
    title: 'A secure AWS landing zone you can defend on day one',
    cloud: 'AWS',
    useCase: 'Multi-account foundation',
    readTime: '9 min read',
    published: '2025-02-12',
    summary:
      'A reference landing zone for UK and EU workloads. Account hierarchy, baseline guardrails, identity, logging, and the service control policies that keep teams inside the lines.',
    diagram: AwsLandingZoneDiagram,
    sections: [
      {
        heading: 'The problem',
        paragraphs: [
          'A blank AWS account is dangerous. Region sprawl, root credentials, public S3 buckets, no centralised logging. Most breaches we see in early stage cloud estates trace back to a missing foundation, not an exotic exploit.',
          'The fix is not a tool, it is a structure. A landing zone is the layered set of accounts, controls, and patterns that make every workload you deploy start from a defensible baseline.',
        ],
      },
      {
        heading: 'Reference architecture',
        paragraphs: [
          'We model three organisational units. Core for shared services (audit, log archive, identity). Workloads for production, staging, and development environments. Sandbox for experiments with time bound, budget limited access.',
          'Control Tower orchestrates account vending and applies baseline guardrails. IAM Identity Center is the only path to human access, with SCIM provisioning from your IdP. AWS Config, GuardDuty, and Security Hub are enabled organisation wide on day one.',
        ],
      },
      {
        heading: 'Service control policies that matter',
        paragraphs: [
          'SCPs are the steel rebar of an AWS landing zone. They cannot be overridden by an account administrator. We default to a deny first posture and add back only what is needed.',
        ],
        list: [
          'deny region not in approved set (eu-west-2, eu-west-1)',
          'deny disable of CloudTrail, Config, or GuardDuty',
          'deny creation of IAM users (federate only)',
          'deny public S3 ACLs and blockPublicAccess unset',
          'deny use of root account except via break glass',
        ],
      },
      {
        heading: 'Operating model',
        paragraphs: [
          'Account creation goes through a pipeline. A pull request adds the account to a Terraform manifest, GitHub Actions provisions it through Control Tower, and the new account inherits all guardrails automatically. There is no manual click path.',
          'For audit, the Log Archive account holds CloudTrail and Config history in an S3 bucket with object lock. Nothing else writes to that account. The Audit account is read only.',
        ],
      },
    ],
    controls: [
      'NIST CSF · PR.AC, PR.IP, DE.CM',
      'ISO 27001 · A.5.15, A.5.23, A.8.16',
      'CIS AWS Foundations · 1.x, 2.x, 3.x',
    ],
    takeaway:
      'A landing zone is not a deliverable, it is a platform you keep deploying onto for years. Build it small, build it right, build it as code.',
  },
  {
    slug: 'azure-zero-trust-api',
    title: 'Zero trust API access on Azure, end to end',
    cloud: 'Azure',
    useCase: 'Internal and partner APIs',
    readTime: '11 min read',
    published: '2025-01-28',
    summary:
      'An Azure pattern for exposing APIs to users and partners with no implicit trust. Entra ID for identity, conditional access for posture, APIM for policy, and private endpoints for everything behind the line.',
    diagram: AzureZeroTrustDiagram,
    sections: [
      {
        heading: 'Why zero trust on Azure is different',
        paragraphs: [
          'Azure rewards a clear edge. Front Door for global ingress, API Management as the policy layer, and a strict vnet boundary that everything sensitive lives inside. Public service endpoints are off by default.',
          'The interesting design choice is not the controls, it is the identity model. Entra ID issues tokens for users and workloads alike. Conditional access decides whether a token can be minted in the first place, based on device, location, risk score, and group.',
        ],
      },
      {
        heading: 'Reference pattern',
        paragraphs: [
          'Requests hit Front Door (WAF + DDoS), proxy to APIM in the home region. APIM enforces rate limits, JWT validation against Entra ID, request schema validation, and IP allowlisting for partner traffic.',
          'APIM is integrated to a private vnet, so backends are not exposed. App Service, Functions, SQL, Storage, and Key Vault are all bound to private endpoints. Outbound DNS resolves to private IPs.',
        ],
      },
      {
        heading: 'Identity and access',
        paragraphs: [
          'Users authenticate to Entra ID. Conditional access requires managed device, sign in risk low, and group membership matching the API. For privileged operations we use PIM with just in time elevation and approval.',
        ],
        list: [
          'workload identity federation for github actions (no secrets)',
          'managed identities for app service and functions',
          'customer managed keys in key vault, rotated quarterly',
          'defender for cloud running posture + workload protection',
          'private dns zones linked to vnet for endpoint resolution',
        ],
      },
      {
        heading: 'Telemetry',
        paragraphs: [
          'Every layer ships to Log Analytics. We route a subset to Sentinel for detection and Cost Management for budget alerts. The hot path for detection is sign in logs, APIM gateway logs, and Defender alerts.',
        ],
      },
    ],
    controls: [
      'NIST 800-207 · zero trust architecture',
      'ISO 27001 · A.8.20, A.8.21, A.8.22',
      'OWASP API Top 10 (2023)',
    ],
    takeaway:
      'Zero trust on Azure is not a product, it is the combination of identity, network, and policy moving in step. Get the three to agree and the rest follows.',
  },
  {
    slug: 'gcp-confidential-data-lake',
    title: 'A confidential data lake on GCP, audit ready',
    cloud: 'GCP',
    useCase: 'Analytics on regulated data',
    readTime: '10 min read',
    published: '2025-01-14',
    summary:
      'Build a BigQuery centred data lake that handles regulated data with classification, customer managed keys, VPC Service Controls, and access approval baked in from the start.',
    diagram: GcpDataLakeDiagram,
    sections: [
      {
        heading: 'The starting point',
        paragraphs: [
          'Most data platforms grow before they are governed. The first hard question is usually who can read what, and that question gets harder once a dozen teams have copied tables sideways.',
          'GCP gives you tight primitives to fix this early. Customer managed keys in Cloud KMS, column and row policies in BigQuery, VPC Service Controls around the perimeter, and Workload Identity Federation for non human access.',
        ],
      },
      {
        heading: 'Pipeline',
        paragraphs: [
          'Sources land in Cloud Storage. A DLP scan runs on landing and tags objects with sensitivity. Dataflow normalises and writes into BigQuery raw, then Dataform shapes curated tables. Every step runs inside a VPC Service Controls perimeter.',
          'Encryption uses CMEK at rest in every service. The same key ring rotates quarterly, with HSM backed keys for the highest sensitivity classes.',
        ],
      },
      {
        heading: 'Access model',
        paragraphs: [
          'Access is granted to groups, never individuals. Column policies attach to taxonomy tags, so a single decision (mark column as PII) propagates to every consumer.',
        ],
        list: [
          'workload identity federation for github actions and external services',
          'access approval required for support engineer reads',
          'iam conditions to scope role bindings to projects and time windows',
          'audit logs streamed to bigquery and pinned to scc',
          'break glass procedure logged and reviewed weekly',
        ],
      },
      {
        heading: 'Cost and operations',
        paragraphs: [
          'BigQuery slots are reserved for predictable workloads. Ad hoc and exploratory queries land on the on demand pool with a per user cap. Storage cost is controlled by table partitioning and lifecycle rules on raw zones.',
        ],
      },
    ],
    controls: [
      'NIST CSF · PR.DS, PR.AC, DE.CM',
      'ISO 27701 · privacy controls',
      'UK GDPR · article 32 technical measures',
    ],
    takeaway:
      'Governance is cheap when you set it up before the data lands. It is a programme of work once the data is already everywhere.',
  },
  {
    slug: 'multicloud-detection-as-code',
    title: 'Detection as code across AWS, Azure and GCP',
    cloud: 'Multi-cloud',
    useCase: 'Unified threat detection',
    readTime: '8 min read',
    published: '2024-12-18',
    summary:
      'A pattern for a single detection programme across three clouds. Sigma rules in git, normalised events, replay tests, and a SOAR pipeline that closes the loop without paging a human at 3am.',
    diagram: MulticloudDetectionDiagram,
    sections: [
      {
        heading: 'One pipeline, many clouds',
        paragraphs: [
          'Cloud native detection rules age fast. The provider changes a log field name and your alert silently stops firing. A multi cloud estate compounds the problem by three.',
          'The pattern that works is detection as code. Rules live in git, get reviewed in pull requests, run against replay corpora in CI, and ship to whichever SIEM you operate.',
        ],
      },
      {
        heading: 'Schema',
        paragraphs: [
          'We normalise CloudTrail, Entra ID, GCP audit, Kubernetes audit, and EDR telemetry into the OCSF schema. Rules are written against OCSF fields, so a rule that detects suspicious AssumeRole works the same shape for an Entra ID role activation.',
        ],
      },
      {
        heading: 'Rules and tests',
        paragraphs: [
          'Sigma is the rule language. Every rule has a name, a description, a MITRE ATT&CK mapping, a severity, and a test fixture in the corpora. Pull requests cannot merge without a passing test.',
        ],
        list: [
          'rule library mirrored to sentinel, splunk, and chronicle',
          'unit tests with synthetic and replayed real events',
          'detection coverage tracked against att&ck matrix',
          'severity drives notification channel (slack, pagerduty, jira)',
          'auto enrichment with asset and identity context',
        ],
      },
      {
        heading: 'Response',
        paragraphs: [
          'High severity events trigger SOAR playbooks. Common actions: just in time revoke a role, snapshot a disk for forensics, page the on call. The aim is a mean time to respond under fifteen minutes for the top alert classes, measured weekly.',
        ],
      },
    ],
    controls: [
      'NIST CSF · DE.AE, DE.CM, RS.AN',
      'MITRE ATT&CK · cloud, enterprise',
      'ISO 27001 · A.5.25, A.8.16',
    ],
    takeaway:
      'A detection programme is a software product. Treat it like one. Code review, tests, releases, metrics.',
  },
  {
    slug: 'ci-supply-chain-slsa',
    title: 'Signed supply chain on GitHub Actions, SLSA level 3',
    cloud: 'CI/CD',
    useCase: 'Build, attest, deploy',
    readTime: '7 min read',
    published: '2024-11-22',
    summary:
      'The shortest path to a defensible CI pipeline. Ephemeral runners, signed builds, SBOM and provenance, and an admission controller that refuses to run anything unsigned.',
    diagram: SupplyChainDiagram,
    sections: [
      {
        heading: 'Why bother with SLSA',
        paragraphs: [
          'Most attacks on software supply chains are not exotic. A leaked publish token, a malicious dependency, a backdoored build script. SLSA is the framework that names the controls that close those paths.',
          'Level 3 is the practical target. It requires hosted, ephemeral build runners, signed builds, and verifiable provenance. You can get there in a sprint with the tools below.',
        ],
      },
      {
        heading: 'The pipeline',
        paragraphs: [
          'Pull requests trigger a workflow on GitHub Actions hosted runners. The job authenticates to your cloud through OIDC, with no long lived secrets. Cosign signs container images keylessly against the OIDC identity. Syft generates an SBOM in CycloneDX. in-toto attestations capture the provenance.',
          'Signed images and attestations are pushed to your OCI registry. A Kyverno admission controller in every Kubernetes cluster verifies the signature and provenance before scheduling a pod.',
        ],
      },
      {
        heading: 'Hardening',
        paragraphs: [
          'There are a few small choices that matter.',
        ],
        list: [
          'pin actions by sha, not tag',
          'reusable workflows owned by platform, called by app teams',
          'oidc trust scoped to repo and branch, not org',
          'workflow tokens minimum permission, defaulted to read',
          'sbom diff alerts on new transitive dependencies',
        ],
      },
      {
        heading: 'Result',
        paragraphs: [
          'Production runs only images built by your pipeline, signed by your identity, with a provenance trail back to the commit. If an attacker pushes a tampered image to the registry, the cluster refuses it.',
        ],
      },
    ],
    controls: [
      'SLSA · level 3',
      'NIST SSDF · PO, PS, PW',
      'CIS Software Supply Chain · 1.x to 5.x',
    ],
    takeaway:
      'A signed supply chain is one of the highest leverage investments a platform team can make. Three weeks of work, years of pay off.',
  },
  {
    slug: 'soc2-evidence-pipeline',
    title: 'An evidence pipeline for SOC 2 Type II that runs itself',
    cloud: 'GRC',
    useCase: 'Continuous audit readiness',
    readTime: '9 min read',
    published: '2024-10-30',
    summary:
      'Stop chasing screenshots. A pull based evidence pipeline that maps system state to control requirements, alerts on drift, and gives auditors a read only window into the truth.',
    diagram: Soc2EvidenceDiagram,
    sections: [
      {
        heading: 'The screenshot problem',
        paragraphs: [
          'Most SOC 2 programmes still rely on quarterly screenshot collection. It is fragile, expensive, and tells you nothing about the state of controls in between.',
          'A pull based pipeline turns that around. The audit asks for evidence by reading the system, not by asking a human to gather it.',
        ],
      },
      {
        heading: 'Architecture',
        paragraphs: [
          'Sources of truth (Okta, GitHub, AWS Config, JAMF, Jira) expose APIs. A collector (Drata, Vanta, or a small custom service) pulls state on a schedule and writes it to a structured store.',
          'A control mapping translates between system state and the control library (SOC 2, ISO, CIS). Continuous tests run hourly and raise findings when controls drift. Findings flow into an exceptions register with owners and due dates.',
        ],
      },
      {
        heading: 'For the auditor',
        paragraphs: [
          'The auditor gets a read only portal. Evidence is dated, hashed, and tied to a control. The immutable archive is an S3 bucket with object lock. Nothing in the audit window can be quietly amended.',
        ],
        list: [
          'control owner assigned to every control, named in the system',
          'exception register with executive sign off',
          'quarterly board pack auto generated from the same store',
          'risk register cross linked to controls and exceptions',
          'customer trust portal serves a curated subset',
        ],
      },
      {
        heading: 'What it feels like',
        paragraphs: [
          'Audit season stops being a season. It becomes a Monday morning report. The team focuses on remediating real drift rather than packaging old screenshots.',
        ],
      },
    ],
    controls: [
      'SOC 2 · Type II · trust services criteria',
      'ISO 27001 · A.5, A.6, A.8',
      'NIST CSF · ID.GV, PR.IP, DE.CM',
    ],
    takeaway:
      'If the audit cannot read your controls directly, you are paying twice. Once to run the controls, once to prove they ran.',
  },
];

export function getResearchPost(slug: string): ResearchPost | undefined {
  return research.find((p) => p.slug === slug);
}
