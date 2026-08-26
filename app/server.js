const express = require('express');
const os = require('os');
const app = express();
const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <title>node.js1_harness</title>
  <style>
    body{font-family:'Segoe UI',sans-serif;background:#0f1117;color:#e2e8f0;display:flex;justify-content:center;align-items:center;min-height:100vh;margin:0}
    .card{background:#1a1f2e;border:1px solid #2d3748;border-radius:12px;padding:40px 50px;max-width:640px;width:100%;text-align:center}
    h1{font-size:1.8rem;color:#48bb78;margin-bottom:8px}
    .badge{display:inline-block;background:#1c3a2f;color:#38a169;border:1px solid #38a169;border-radius:20px;padding:4px 14px;font-size:.82rem;margin:16px 0 28px}
    table{width:100%;border-collapse:collapse;text-align:left}
    th,td{padding:10px 14px;font-size:.9rem}
    th{color:#718096}td{color:#e2e8f0}
    tr:not(:last-child) td{border-bottom:1px solid #2d3748}
    .footer{margin-top:24px;color:#4a5568;font-size:.8rem}
  </style>
</head>
<body>
  <div class="card">
    <h1>node.js1_harness + Azure AKS</h1>
    <div class="badge">&#10003; DEPLOYMENT SUCCESSFUL</div>
    <table>
      <tr><th>Project</th><td>node.js1_harness</td></tr>
      <tr><th>Hostname</th><td>${os.hostname()}</td></tr>
      <tr><th>Node Version</th><td>${process.version}</td></tr>
      <tr><th>Uptime</th><td>${Math.floor(process.uptime())}s</td></tr>
      <tr><th>Timestamp</th><td>${new Date().toISOString()}</td></tr>
    </table>
    <p class="footer">Harness K8sRollingDeploy | Cluster: nodejs1-aks | Namespace: nodejs1-app</p>
  </div>
</body>
</html>`;
  res.status(200).send(html);
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    project: 'node.js1_harness',
    hostname: os.hostname(),
    uptime: `${Math.floor(process.uptime())}s`,
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`[server] node.js1_harness running on port ${PORT}`);
});
