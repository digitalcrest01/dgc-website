import { DiagramShell, Defs, Node, Cluster, Arrow, Pill } from './primitives';

export function GcpDataLakeDiagram() {
  return (
    <DiagramShell title="gcp · confidential data lake" viewBox="0 0 880 480">
      <Defs />

      <Pill x={20} y={20} label="gcp · europe-west2" />

      <Cluster x={20} y={60} w={240} h={380} label="Sources" />
      <Node x={40} y={90} w={200} label="Application events" sub="pubsub · cloud run" />
      <Node x={40} y={160} w={200} label="Database CDC" sub="datastream" />
      <Node x={40} y={230} w={200} label="SaaS exports" sub="storage transfer" />
      <Node x={40} y={300} w={200} label="Files · objects" sub="cloud storage" />
      <Node x={40} y={370} w={200} h={50} label="DLP scanner" sub="inspect on landing" accent />

      <Cluster x={300} y={60} w={280} h={380} label="Pipeline · vpc-sc perimeter" dashed />
      <Node x={320} y={100} w={240} label="Dataflow" sub="stream + batch" />
      <Node x={320} y={170} w={240} label="Workflows" sub="orchestration" />
      <Node x={320} y={240} w={240} label="Dataform" sub="sql transformations" />
      <Node x={320} y={320} w={240} h={100} label="BigQuery" sub="cmek · column policy" accent filled />

      <Cluster x={620} y={60} w={240} h={380} label="Governance" />
      <Node x={640} y={90} w={200} label="Cloud KMS" sub="cmek · hsm" accent />
      <Node x={640} y={160} w={200} label="Data Catalog" sub="taxonomy + tags" />
      <Node x={640} y={230} w={200} label="Access Approval" sub="break glass" />
      <Node x={640} y={300} w={200} label="Audit Logs" sub="exported to bigquery" />
      <Node x={640} y={370} w={200} h={50} label="Security Command Centre" sub="findings + scc" />

      <Arrow from={[240, 115]} to={[320, 125]} />
      <Arrow from={[240, 185]} to={[320, 185]} />
      <Arrow from={[240, 255]} to={[320, 260]} />
      <Arrow from={[240, 325]} to={[320, 330]} />
      <Arrow from={[440, 290]} to={[440, 320]} />
      <Arrow from={[560, 370]} to={[640, 370]} />
      <Arrow from={[640, 115]} to={[560, 370]} curve={120} dashed />

      <Pill x={690} y={20} label="iam · workload identity" />
    </DiagramShell>
  );
}
