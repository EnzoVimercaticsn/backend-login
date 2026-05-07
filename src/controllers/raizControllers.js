module.exports = {
    async raiz(req, res) {
        const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Servidor Backend - Ecofy</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background-color: #f4f9f4;
                    color: #333;
                    margin: 0;
                    padding: 0;
                }
                header {
                    background-color: #28a745;
                    color: white;
                    padding: 20px;
                    text-align: center;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                }
                main {
                    padding: 30px;
                    max-width: 800px;
                    margin: auto;
                }
                h2 {
                    color: #28a745;
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                }
                li {
                    background-color: #e6f4ea;
                    margin: 10px 0;
                    padding: 15px;
                    border-left: 5px solid #28a745;
                    border-radius: 5px;
                    transition: transform 0.2s;
                }
                li:hover {
                    transform: translateX(5px);
                    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                }
                code {
                    background-color: #d4edda;
                    padding: 2px 6px;
                    border-radius: 4px;
                    font-family: monospace;
                }
            </style>
        </head>
        <body>
            <header>
                <h1>Servidor Backend - Ecofy</h1>
            </header>
            <main>
                <h2>Rotas disponíveis:</h2>
                <ul>
                    <!-- Rotas Produto -->
                    <li><code>GET /produtoid</code> - Consulta todos os produtos por ID</li>
                    <li><code>GET /produtonome</code> - Consulta todos os produtos por nome</li>
                    <li><code>GET /produto/:nome</code> - Busca produto pelo nome</li>
                    <li><code>POST /produto</code> - Cria um novo produto</li>
                    <li><code>PUT /produto/:id</code> - Atualiza um produto existente</li>
                    <!-- Rotas Cadastro -->
                    <li><code>GET /cadastroid</code> - Consulta todos os cadastros por ID</li>
                    <li><code>GET /cadastronome</code> - Consulta todos os cadastros por nome</li>
                    <li><code>GET /cadastro/:nome</code> - Busca cadastro pelo nome</li>
                    <li><code>GET /cadastroemail/:nome</code> - Busca cadastro pelo email</li>
                    <li><code>POST /cadastro</code> - Cria um novo cadastro</li>
                    <li><code>PUT /cadastro/:id</code> - Atualiza um cadastro existente</li>
                    
                </ul>
            </main>
        </body>
        </html>
        `;
        return res.send(html);
    }
}
