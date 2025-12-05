// script.js

// 1. DADOS CARREGADOS DA PLANILHA (Mantido Igual)
const PRODUTOS_DATA = [
    {
        'Produto': 'BOLACHA UN',
        'Preco': 12.0,
        'Variedades': [
            {'Sabor': 'MANTEIGA', 'Imagem': 'bolacha.png'},
            {'Sabor': 'FUBA', 'Imagem': 'bolacha.png'},
            {'Sabor': 'POLVILHO', 'Imagem': 'bolacha.png'},
            {'Sabor': 'NATA C/GLACÊ', 'Imagem': 'bolacha.png'},
            {'Sabor': 'COMUM', 'Imagem': 'bolacha.png'},
            {'Sabor': 'COMUM C/GLACE', 'Imagem': 'bolacha.png'},
        ]
    },
    {
        'Produto': 'QUEIJO KG',
        'Preco': 40.0,
        'Variedades': [
            {'Sabor': 'COMUM', 'Imagem': 'queijo.png'},
        ]
    },
    {
        'Produto': 'QUEIJO KG',
        'Preco': 45.0,
        'Variedades': [
            {'Sabor': 'RECHADO', 'Imagem': 'queijo com doce.png'},
        ]
    },
    {
        'Produto': 'PÃO CASEIRO UN',
        'Preco': 12.0,
        'Variedades': [
            {'Sabor': 'Único', 'Imagem': 'pao.png'},
        ]
    },
    {
        'Produto': 'SALGADINHO UN',
        'Preco': 12.0,
        'Variedades': [
            {'Sabor': 'Único', 'Imagem': 'salgadinho.png'},
        ]
    },
    {
        'Produto': 'CUCA S/RECHEIO UN',
        'Preco': 12.0,
        'Variedades': [
            {'Sabor': 'Único', 'Imagem': 'cuca sem recheio.png'},
        ]
    },
    {
        'Produto': 'DOCE DE LEITE UN',
        'Preco': 20.0,
        'Variedades': [
            {'Sabor': 'Único', 'Imagem': 'Doce de leite.png'},
        ]
    }
];

const CLIENTES_DATA = [
    {'Nome': 'ADILIO SANTANA', 'Setor': 'MARKETING'},
    {'Nome': 'ADRYAN LUIZ SALDANHA CORDEIRO', 'Setor': 'FINANCEIRO'},
    {'Nome': 'ALAN GUARDIANO DE SOUZA', 'Setor': 'PENSEAPP'},
    {'Nome': 'ALEXANDRE MINGHINI', 'Setor': 'BOARD'},
    {'Nome': 'ALEXANDRO MARCELO SEVIERO', 'Setor': 'BOARD'},
    {'Nome': 'ALEXSANDER DE OLIVEIRA PONTES PIRES', 'Setor': 'PENSEAPP'},
    {'Nome': 'ANA KELI PEREIRA GIRARDI', 'Setor': 'COMERCIAL'},
    {'Nome': 'ANA PAULA RIGOTTE DA COSTA', 'Setor': 'OPERACIONAL'},
    {'Nome': 'ANNA CAROLINA TOMAZ DE OLIVEIRA', 'Setor': 'COMERCIAL'},
    {'Nome': 'ANNA LUIZA ANDRIANI', 'Setor': 'PENSEAPP'},
    {'Nome': 'BEATRIZ PAIXAO SOUZA PERON', 'Setor': 'PENSEAPP'},
    {'Nome': 'BRUNO AZEVEDO', 'Setor': 'PENSEAPP'},
    {'Nome': 'CLEUSSO DE OLIVEIRA ROMA', 'Setor': 'COMERCIAL'},
    {'Nome': 'CRISTIANE DE FREITAS SANCHES', 'Setor': 'FINANCEIRO'},
    {'Nome': 'DANIEL DA SILVA REVOREDO', 'Setor': 'MPP'},
    {'Nome': 'DANIELLE PALHANO', 'Setor': 'GOVERNANÇA'},
    {'Nome': 'DELMAR DALLA PALMA', 'Setor': 'ANGELS'},
    {'Nome': 'EDILAINE MARIA NEIS RICHETTI', 'Setor': 'FINANCEIRO'},
    {'Nome': 'EDUARDO REGINATO COLLA', 'Setor': 'FINANCEIRO'},
    {'Nome': 'ELIANE APARECIDA DA COSTA', 'Setor': 'FINANCEIRO'},
    {'Nome': 'ELOISA FRANCISCO SCHAEFER', 'Setor': 'MARKETING'},
    {'Nome': 'EMERSON DE JESUS SANTOS', 'Setor': 'PENSEAPP'},
    {'Nome': 'EMERSON MACHADO DE MAGALHAES', 'Setor': 'TECNOLOGIA DA INFORMAÇÃO'},
    {'Nome': 'FERNANDA LARISSA SOLIGO', 'Setor': 'FINANCEIRO'},
    {'Nome': 'FRANCIANY APARECIDA DANIEL MICOANSKI', 'Setor': 'SUCESSO'},
    {'Nome': 'GABRIELE PERTILE DE ANDRADE MEDINA', 'Setor': 'FINANCEIRO'},
    {'Nome': 'GABRIELI COGO RODRIGUES', 'Setor': 'FINANCEIRO'},
    {'Nome': 'GILBERTO DOS SANTOS NETO', 'Setor': 'FINANCEIRO'},
    {'Nome': 'GISELLE DA SILVA CORDEIRO', 'Setor': 'PESSOAS'},
    {'Nome': 'GUILHERME NICOLAO DA SILVA', 'Setor': 'FINANCEIRO'},
    {'Nome': 'INAE DE BORBA ROSA', 'Setor': 'PENSEAPP'},
    {'Nome': 'IRENE RIBEIRO DA ROCHA OLIVEIRA', 'Setor': 'FINANCEIRO'},
    {'Nome': 'ISABELLI DE LIMAS PADILHA', 'Setor': 'SUCESSO'},
    {'Nome': 'JANAENA FAEZA PEREIRA', 'Setor': 'OPERACIONAL'},
    {'Nome': 'JANAINA MICHELI SILVESTRE MONTANGER', 'Setor': 'FINANCEIRO'},
    {'Nome': 'JESSICA GONCALVES DE MORAIS', 'Setor': 'FINANCEIRO'},
    {'Nome': 'JOYCE KAROLINE SILVERIO DOS SANTOS', 'Setor': 'FINANCEIRO'},
    {'Nome': 'JULYAN ROSDREY ROSS', 'Setor': 'PENSEAPP'},
    {'Nome': 'KALL ANY GOUVEA CORTEZE', 'Setor': 'BOARD'},
    {'Nome': 'KARINE MOREIRA COMARELLA', 'Setor': 'SUCESSO'},
    {'Nome': 'KATIA REGINA EUFRASIO', 'Setor': 'MPP'},
    {'Nome': 'LENISE APARECIDA STOCCO DAMIRCO', 'Setor': 'COMERCIAL'},
    {'Nome': 'LIZANDRA PEREIRA ZANATTA', 'Setor': 'BOARD'},
    {'Nome': 'LUAN DA SILVA SANTANA', 'Setor': 'PENSEAPP'},
    {'Nome': 'LUANA DE BATZ SILVEIRA', 'Setor': 'FINANCEIRO'},
    {'Nome': 'MARCELA BARBOSA SILVA', 'Setor': 'CONTABILIDADE'},
    {'Nome': 'MARESSA ROBERTA MARSON', 'Setor': 'CONTABILIDADE'},
    {'Nome': 'MARIA EDUARDA PACENTCHUK RODRIGUES', 'Setor': 'SUCESSO'},
    {'Nome': 'MARIANA CAMPAGNOLI BARBOSA', 'Setor': 'PENSEAPP'},
    {'Nome': 'MARIO MARCELINO FILHO', 'Setor': 'BOARD'},
    {'Nome': 'MATHEUS FELIPE VIEIRA SANTIAGO', 'Setor': 'PENSEAPP'},
    {'Nome': 'MATHEUS VIEIRA ROCHA', 'Setor': 'MARKETING'},
    {'Nome': 'NYCKOLAS PARRO SEIXAS', 'Setor': 'PENSEAPP'},
    {'Nome': 'PATRICK JUSCELINO MONTEIRO TIEMECHI', 'Setor': 'TECNOLOGIA DA INFORMAÇÃO'},
    {'Nome': 'RAFAELA DE OLIVEIRA JESUS', 'Setor': 'OPERACIONAL'},
    {'Nome': 'RAFAELLA WANDSCHEER RAIMUNDO', 'Setor': 'GOVERNANÇA'},
    {'Nome': 'RICARDO GAMBINI GREGO', 'Setor': 'BOARD'},
    {'Nome': 'RODOLFO ABDALA', 'Setor': 'MANAUS'},
    {'Nome': 'RUI ROSSI DOS SANTOS', 'Setor': 'BOARD'},
    {'Nome': 'SERGIO ZANOLLO FIORDELIS', 'Setor': 'OPERACIONAL'},
    {'Nome': 'TANIA GRANDO BORTOLON', 'Setor': 'COMERCIAL'},
    {'Nome': 'TATIANE DA SILVA', 'Setor': 'FINANCEIRO'},
    {'Nome': 'TATIANE DE OLIVEIRA TRESPACH', 'Setor': 'MARKETING'},
    {'Nome': 'THAIS FERNANDA MACIEL BONINI', 'Setor': 'GOVERNANÇA'},
    {'Nome': 'THAMARA TIERLING ESCHER', 'Setor': 'MPP'},
    {'Nome': 'THOMAZ DE OLIVEIRA NEVES', 'Setor': 'MARKETING'},
    {'Nome': 'VITOR HARTMANN SILVA', 'Setor': 'OPERACIONAL'},
    {'Nome': 'WELISON COSTA DA SILVA', 'Setor': 'OPERACIONAL'},
    {'Nome': 'WILLIAM HENRIQUE DOS REIS', 'Setor': 'FINANCEIRO'}
];

// Mapeamento de Clientes (Mantido Igual)
const CLIENTES_MAP = CLIENTES_DATA.reduce((map, cliente) => {
    map[cliente.Nome] = cliente.Setor;
    return map;
}, {});

// Variáveis de Controle
let cart = {}; // OBJETO DO CARRINHO AGORA COMEÇA VAZIO E USA CHAVE PRODUTO_SABOR
const productsList = document.getElementById('products-list');
const summaryItems = document.getElementById('summary-items');
const totalPriceElement = document.getElementById('total-price');
const clientNameSelect = document.getElementById('client-name-select');
const clientSectorSpan = document.getElementById('client-sector');
const confirmOrderButton = document.getElementById('confirm-order');

// 2. FUNÇÕES AUXILIARES
const formatPrice = (price) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

function loadClients() {
    CLIENTES_DATA.forEach(cliente => {
        const option = document.createElement('option');
        option.value = cliente.Nome;
        option.textContent = cliente.Nome;
        clientNameSelect.appendChild(option);
    });

    clientNameSelect.addEventListener('change', (e) => {
        const selectedName = e.target.value;
        const selectedSector = CLIENTES_MAP[selectedName] || 'N/A';
        clientSectorSpan.textContent = selectedSector;
        checkValidationAndEnableButton();
    });
}

function getSelectedFlavor(productId) {
    const selector = document.querySelector(`input[name="${productId}_sabor"]:checked`);
    if (!selector) {
        const index = parseInt(productId.split('_')[1]);
        return PRODUTOS_DATA[index].Variedades[0].Sabor;
    }
    return selector.value;
}

// 3. FUNÇÃO PRINCIPAL: Renderiza os produtos na tela
function renderProducts() {
    productsList.innerHTML = '<h2>Selecione Seus Produtos</h2>';
    
    PRODUTOS_DATA.forEach((item, index) => {
        const id = `prod_${index}`;
        const precoFormatado = formatPrice(item.Preco);
        const variedades = item.Variedades;
        
        const defaultImage = variedades[0].Imagem;
        const defaultSabor = variedades[0].Sabor;

        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-header-content">
                <img src="${defaultImage}" alt="${item.Produto}" class="product-image" id="${id}_image">
                <div class="product-info-text">
                    <h3>${item.Produto}</h3>
                    <span class="product-price">${precoFormatado}</span>
                </div>
            </div>
            
            ${variedades.length > 1 && defaultSabor !== 'Único' ? `
                <h4>Escolha a Variedade (Sabor):</h4>
                <div class="flavor-selector" id="flavor_select_${id}">
                    ${variedades.map((v, vIndex) => `
                        <input type="radio" id="${id}_sabor_${vIndex}" name="${id}_sabor" value="${v.Sabor.trim()}" data-id="${id}" data-image="${v.Imagem}" ${vIndex === 0 ? 'checked' : ''}>
                        <label for="${id}_sabor_${vIndex}">${v.Sabor.trim()}</label>
                    `).join('')}
                </div>
            ` : `<p>Variedade: <strong>${defaultSabor}</strong></p>`}

            <div class="quantity-control">
                <span>Quantidade:</span>
                <button type="button" data-action="decrease" data-id="${id}">-</button>
                <input type="number" id="${id}_qty" value="0" min="0" data-id="${id}" readonly>
                <button type="button" data-action="increase" data-id="${id}">+</button>
            </div>
        `;
        productsList.appendChild(productCard);
    });

    addEventListeners();
}

// 4. FUNÇÃO: Adiciona a lógica de interação
function addEventListeners() {
    document.querySelectorAll('.quantity-control button').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = e.target.dataset.id;
            const action = e.target.dataset.action;
            const qtyInput = document.getElementById(`${productId}_qty`);
            const sabor = getSelectedFlavor(productId);
            const index = parseInt(productId.split('_')[1]);
            const produtoNome = PRODUTOS_DATA[index].Produto;
            const preco = PRODUTOS_DATA[index].Preco;
            
            const cartKey = `${productId}_${sabor}`;
            
            let currentQty = parseInt(qtyInput.value);

            if (action === 'increase') {
                currentQty++;
                cart[cartKey] = {
                    produto: produtoNome,
                    sabor: sabor, 
                    preco: preco,
                    quantidade: currentQty
                };
            } else if (action === 'decrease' && currentQty > 0) {
                currentQty--;
                if (cart[cartKey]) {
                    cart[cartKey].quantidade = currentQty;
                    if (currentQty === 0) {
                        delete cart[cartKey];
                    }
                }
            }

            // Atualiza a quantidade visual para o sabor selecionado
            const totalQtyForFlavor = cart[cartKey] ? cart[cartKey].quantidade : 0;
            qtyInput.value = totalQtyForFlavor;
            
            updateCartAndSummary();
        });
    });

    document.querySelectorAll('.flavor-selector input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            const productId = e.target.dataset.id;
            const newSabor = e.target.value;
            const newImage = e.target.dataset.image;
            const qtyInput = document.getElementById(`${productId}_qty`);
            
            const cartKey = `${productId}_${newSabor}`;
            
            const currentQty = cart[cartKey] ? cart[cartKey].quantidade : 0;
            
            // 2. Atualiza o input de quantidade no card para refletir a quantidade do sabor selecionado
            qtyInput.value = currentQty;
            
            // 3. Atualiza a imagem no card
            const productImageElement = document.getElementById(`${productId}_image`);
            if (productImageElement) {
                productImageElement.src = newImage;
            }
        });
    });
    
    updateCartAndSummary(); 
}


// 5. FUNÇÕES DE RESUMO, VALIDAÇÃO E PEDIDO (REVISADAS)
function updateCartAndSummary() {
    let total = 0;
    summaryItems.innerHTML = '';
    let itemsInCart = 0;

    for (const cartKey in cart) {
        const item = cart[cartKey];
        if (item.quantidade > 0) {
            itemsInCart++;
            const subtotal = item.preco * item.quantidade;
            total += subtotal;
            const subtotalFormatado = formatPrice(subtotal);

            const summaryItem = document.createElement('div');
            summaryItem.className = 'summary-item';
            summaryItem.innerHTML = `${item.quantidade}x - ${item.produto} (${item.sabor}) <strong style="float: right;">${subtotalFormatado}</strong>`;
            summaryItems.appendChild(summaryItem);
        }
    }
    if (itemsInCart === 0) {
        summaryItems.innerHTML = 'Nenhum item selecionado.';
    }
    totalPriceElement.textContent = formatPrice(total);
    checkValidationAndEnableButton();
}

function checkValidationAndEnableButton() {
    let total = 0;
    for (const cartKey in cart) {
        total += cart[cartKey].preco * cart[cartKey].quantidade;
    }
    const hasItems = total > 0;
    const hasNameSelected = clientNameSelect.value !== ""; 
    confirmOrderButton.disabled = !(hasItems && hasNameSelected);
}

// NOVO LISTENER: Adiciona a confirmação e SALVA no LocalStorage, REMOVENDO O WHATSAPP
confirmOrderButton.addEventListener('click', () => {
    const clientName = clientNameSelect.value;
    const clientSector = clientSectorSpan.textContent;
    
    if (!clientName || confirmOrderButton.disabled) {
        alert('Por favor, selecione seu nome e adicione pelo menos um produto ao carrinho.');
        return;
    }

    // EXIBE A CAIXA DE CONFIRMAÇÃO
    const isConfirmed = confirm('Você tem certeza que deseja finalizar este pedido?');

    if (isConfirmed) {
        
        let total = 0;
        const orderItems = [];

        // Coleta os itens e calcula o total
        for (const cartKey in cart) {
            const item = cart[cartKey];
            if (item.quantidade > 0) {
                const subtotal = item.preco * item.quantidade;
                total += subtotal;
                
                // Armazena os itens para salvar no LocalStorage
                orderItems.push({
                    produto: item.produto,
                    sabor: item.sabor,
                    quantidade: item.quantidade,
                    preco: item.preco
                });
            }
        }

        // Cria o objeto de pedido
        const newOrder = {
            id: Date.now(), // ID único
            cliente: clientName,
            setor: clientSector,
            data: new Date().toLocaleString('pt-BR'),
            total: total,
            itens: orderItems,
            statusPagamento: 'PENDENTE'
        };

        // SALVA NO LOCALSTORAGE (Simulação de Banco de Dados)
        try {
            const existingOrders = JSON.parse(localStorage.getItem('pedidos_dona_rose')) || [];
            existingOrders.push(newOrder);
            localStorage.setItem('pedidos_dona_rose', JSON.stringify(existingOrders));
            
            // SUCESSO!
            alert('Pedido registrado com sucesso! Sua solicitação será processada.');
            
            // Limpar o carrinho e a interface
            cart = {};
            updateCartAndSummary();
            clientNameSelect.value = "";
            clientSectorSpan.textContent = "N/A";
            
        } catch (error) {
            console.error("Erro ao salvar pedido no LocalStorage:", error);
            alert("Erro ao registrar o pedido. Por favor, tente novamente.");
        }

    } else {
        // Se o usuário clicar em "Não"
        // alert('Pedido cancelado. Continue editando seu carrinho.'); // Mensagem removida para manter o fluxo
    }
});


// 6. INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
    loadClients(); 
    renderProducts();
});