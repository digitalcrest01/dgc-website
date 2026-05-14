import { DiagramShell, Defs, Node, Cluster, Arrow, Pill } from './primitives';

export function AzureZeroTrustDiagram() {
  return (
    <DiagramShell title="azure · zero trust api access" viewBox="0 0 880 480">
      <Defs />

      <Pill x={20} y={20} label="azure · uk south" />

      <Node x={20} y={70} w={170} label="User device" sub="managed endpoint" />
      <Node x={220} y={70} w={170} label="Entra ID" sub="mfa · conditional access" accent />

      <Cluster x={420} y={50} w={440} h={120} label="Edge · public" />
      <Node x={440} y={80} w={180} label="Front Door" sub="waf + ddos" />
      <Node x={660} y={80} w={180} label="API Management" sub="rate limit · jwt" accent />

      <Cluster x={20} y={210} w={840} h={240} label="Private · vnet" />

      <Node x={40} y={240} w={170} label="Private Endpoint" sub="apim → vnet" />
      <Node x={240} y={240} w={170} label="App Service" sub="vnet integrated" />
      <Node x={440} y={240} w={170} label="Functions" sub="business logic" />
      <Node x={640} y={240} w={200} label="Service Bus" sub="async events" />

      <Node x={40} y={330} w={170} label="Key Vault" sub="cmk · hsm" accent />
      <Node x={240} y={330} w={170} label="SQL Database" sub="private endpoint" />
      <Node x={440} y={330} w={170} label="Storage" sub="private + cmk" />
      <Node x={640} y={330} w={200} label="Defender for Cloud" sub="posture + workload" />

      <Arrow from={[190, 95]} to={[220, 95]} />
      <Arrow from={[390, 95]} to={[440, 95]} label="oidc" />
      <Arrow from={[620, 105]} to={[660, 105]} />
      <Arrow from={[750, 130]} to={[125, 240]} curve={60} />
      <Arrow from={[125, 270]} to={[325, 270]} />
      <Arrow from={[325, 270]} to={[525, 270]} />
      <Arrow from={[525, 270]} to={[740, 270]} />
      <Arrow from={[325, 295]} to={[325, 330]} />
      <Arrow from={[525, 295]} to={[525, 330]} />
      <Arrow from={[125, 295]} to={[125, 330]} />

      <Pill x={700} y={20} label="policy · jit + pim" />
    </DiagramShell>
  );
}
