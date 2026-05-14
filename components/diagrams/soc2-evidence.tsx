import { DiagramShell, Defs, Node, Cluster, Arrow, Pill } from './primitives';

export function Soc2EvidenceDiagram() {
  return (
    <DiagramShell title="grc · soc 2 evidence pipeline" viewBox="0 0 880 440">
      <Defs />

      <Pill x={20} y={20} label="continuous · pull based" />

      <Cluster x={20} y={60} w={240} h={340} label="Sources of truth" />
      <Node x={40} y={90} w={200} label="Okta" sub="users · groups · mfa" />
      <Node x={40} y={160} w={200} label="GitHub" sub="branch · review controls" />
      <Node x={40} y={230} w={200} label="AWS Config" sub="resource state" />
      <Node x={40} y={300} w={200} label="JAMF · Intune" sub="endpoint posture" />
      <Node x={40} y={370} w={200} h={20} label="Jira · change tickets" />

      <Cluster x={300} y={60} w={280} h={340} label="Pipeline" dashed />
      <Node x={320} y={90} w={240} label="Evidence collector" sub="drata · vanta · custom" accent />
      <Node x={320} y={160} w={240} label="Control mapping" sub="iso · soc2 · cis" />
      <Node x={320} y={230} w={240} label="Exceptions register" sub="approved · time bound" />
      <Node x={320} y={300} w={240} h={90} label="Continuous tests" sub="run hourly · alert on drift" filled />

      <Cluster x={620} y={60} w={240} h={340} label="Audit outputs" />
      <Node x={640} y={90} w={200} label="Auditor portal" sub="read only access" accent />
      <Node x={640} y={160} w={200} label="Immutable archive" sub="s3 object lock" />
      <Node x={640} y={230} w={200} label="Board pack" sub="quarterly metrics" />
      <Node x={640} y={300} w={200} label="Risk register" sub="executive view" />
      <Node x={640} y={370} w={200} h={20} label="Customer trust portal" />

      <Arrow from={[240, 110]} to={[320, 110]} />
      <Arrow from={[240, 180]} to={[320, 175]} />
      <Arrow from={[240, 250]} to={[320, 240]} />
      <Arrow from={[240, 320]} to={[320, 310]} />
      <Arrow from={[560, 345]} to={[640, 110]} curve={-150} />
      <Arrow from={[560, 345]} to={[640, 180]} curve={-70} />
      <Arrow from={[560, 345]} to={[640, 250]} />
      <Arrow from={[560, 345]} to={[640, 320]} curve={30} />

      <Pill x={700} y={20} label="soc 2 · type ii" />
    </DiagramShell>
  );
}
