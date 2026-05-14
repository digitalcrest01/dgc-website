import { DiagramShell, Defs, Node, Cluster, Arrow, Pill } from './primitives';

export function MulticloudDetectionDiagram() {
  return (
    <DiagramShell title="multi-cloud · detection as code" viewBox="0 0 880 460">
      <Defs />

      <Pill x={20} y={20} label="aws · azure · gcp" />

      <Cluster x={20} y={60} w={220} h={360} label="Signals" />
      <Node x={40} y={90} w={180} label="AWS CloudTrail" sub="api activity" />
      <Node x={40} y={160} w={180} label="Entra ID logs" sub="sign in + audit" />
      <Node x={40} y={230} w={180} label="GCP SCC" sub="findings" />
      <Node x={40} y={300} w={180} label="Kubernetes audit" sub="k8s api" />
      <Node x={40} y={370} w={180} h={36} label="EDR telemetry" />

      <Cluster x={280} y={60} w={280} h={360} label="Pipeline · git" dashed />
      <Node x={300} y={90} w={240} label="Normaliser" sub="ocsf schema" />
      <Node x={300} y={160} w={240} label="Sigma rules · repo" sub="reviewed in pull request" accent />
      <Node x={300} y={230} w={240} label="CI · test fixtures" sub="replay corpora" />
      <Node x={300} y={300} w={240} h={120} label="SIEM" sub="sentinel · splunk · chronicle" filled />

      <Cluster x={600} y={60} w={260} h={360} label="Response" />
      <Node x={620} y={90} w={220} label="SOAR · Tines" sub="playbooks" accent />
      <Node x={620} y={160} w={220} label="Slack notify" sub="oncall channel" />
      <Node x={620} y={230} w={220} label="Jit revoke" sub="identity provider" />
      <Node x={620} y={300} w={220} label="Forensic snapshot" sub="ebs · disk" />
      <Node x={620} y={370} w={220} h={36} label="Ticket · jira + audit" />

      <Arrow from={[220, 110]} to={[300, 110]} />
      <Arrow from={[220, 180]} to={[300, 180]} />
      <Arrow from={[220, 250]} to={[300, 250]} />
      <Arrow from={[220, 320]} to={[300, 320]} />
      <Arrow from={[540, 360]} to={[620, 110]} curve={-160} />
      <Arrow from={[540, 360]} to={[620, 180]} curve={-80} />
      <Arrow from={[540, 360]} to={[620, 250]} />
      <Arrow from={[540, 360]} to={[620, 320]} curve={40} />
      <Arrow from={[540, 360]} to={[620, 388]} curve={80} />

      <Pill x={690} y={20} label="mttr · target sub 15 min" />
    </DiagramShell>
  );
}
