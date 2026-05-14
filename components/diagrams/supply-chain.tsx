import { DiagramShell, Defs, Node, Cluster, Arrow, Pill } from './primitives';

export function SupplyChainDiagram() {
  return (
    <DiagramShell title="ci/cd · signed supply chain (slsa)" viewBox="0 0 880 440">
      <Defs />

      <Pill x={20} y={20} label="github · cloud agnostic" />

      <Node x={20} y={70} w={180} label="Developer · pull request" sub="signed commit" />
      <Node x={20} y={150} w={180} label="GitHub Actions" sub="oidc → cloud" accent />

      <Cluster x={240} y={50} w={400} h={350} label="Build · ephemeral runners" dashed />
      <Node x={260} y={90} w={170} label="SAST · CodeQL" />
      <Node x={450} y={90} w={170} label="Secrets · TruffleHog" />
      <Node x={260} y={160} w={170} label="SBOM · Syft" sub="cyclonedx" accent />
      <Node x={450} y={160} w={170} label="Sign · Cosign" sub="keyless · oidc" accent />
      <Node x={260} y={230} w={170} label="Provenance · in-toto" sub="slsa level 3" />
      <Node x={450} y={230} w={170} label="Vuln · Grype + Trivy" />
      <Node x={260} y={320} w={360} h={60} label="OCI Registry" sub="signed image + attestation" filled />

      <Cluster x={670} y={50} w={190} h={350} label="Deploy" />
      <Node x={685} y={90} w={160} label="Admission · Kyverno" sub="verify signature" accent />
      <Node x={685} y={170} w={160} label="Cluster · EKS / AKS / GKE" />
      <Node x={685} y={250} w={160} label="Runtime · Falco" sub="behavioural alerts" />
      <Node x={685} y={330} w={160} h={50} label="SBOM diff alerts" />

      <Arrow from={[200, 95]} to={[260, 100]} />
      <Arrow from={[200, 175]} to={[260, 175]} />
      <Arrow from={[440, 350]} to={[670, 110]} curve={-120} />
      <Arrow from={[440, 350]} to={[670, 180]} curve={-40} />

      <Pill x={730} y={20} label="slsa · level 3" />
    </DiagramShell>
  );
}
