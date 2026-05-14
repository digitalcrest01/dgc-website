import { DiagramShell, Defs, Node, Cluster, Arrow, Pill } from './primitives';

export function AwsLandingZoneDiagram() {
  return (
    <DiagramShell title="aws · secure landing zone" viewBox="0 0 880 460">
      <Defs />

      <Pill x={20} y={20} label="aws organisations · eu-west-2" />

      <Node x={360} y={60} w={170} h={50} label="Org root" sub="control tower" filled />

      <Cluster x={20} y={140} w={260} h={280} label="OU · core" />
      <Node x={40} y={170} label="Audit account" sub="centralised logs" />
      <Node x={40} y={240} label="Log archive" sub="s3 object lock" />
      <Node x={40} y={310} label="Identity account" sub="iam identity center" />
      <Node x={40} y={370} w={220} h={36} label="GuardDuty · Config · SecurityHub" />

      <Cluster x={310} y={140} w={260} h={280} label="OU · workloads" />
      <Node x={330} y={170} label="Production" sub="multi-az · private vpc" accent />
      <Node x={330} y={240} label="Staging" sub="pre prod" />
      <Node x={330} y={310} label="Development" sub="ephemeral" />
      <Node x={330} y={370} w={220} h={36} label="Service control policies · scp" />

      <Cluster x={600} y={140} w={260} h={280} label="OU · sandbox" />
      <Node x={620} y={170} label="Innovation" sub="time bound" />
      <Node x={620} y={240} label="Break glass" sub="emergency access" />
      <Node x={620} y={310} label="Test" sub="auto teardown" />
      <Node x={620} y={370} w={220} h={36} label="Spend budget guardrails" />

      <Arrow from={[445, 110]} to={[150, 140]} curve={-30} />
      <Arrow from={[445, 110]} to={[440, 140]} />
      <Arrow from={[445, 110]} to={[730, 140]} curve={-30} />

      <Pill x={680} y={20} label="scp · deny region != eu-west-2" />
    </DiagramShell>
  );
}
