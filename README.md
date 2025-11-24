# Bomibra - Site Empresarial

Site institucional moderno e profissional desenvolvido para a empresa Bomibra.

## 🚀 Características

### Design Profissional
- Layout moderno e clean inspirado em empresas líderes do mercado
- Paleta de cores corporativa (azul #1863DC como cor principal)
- Tipografia profissional utilizando a fonte Inter
- Interface responsiva para todos os dispositivos

### Seções Implementadas

1. **Hero Section**
   - Título impactante com destaque visual
   - CTAs (Call-to-Actions) estratégicos
   - Estatísticas animadas (anos de experiência, projetos, satisfação)
   - Indicador de scroll animado

2. **Sobre Nós**
   - Imagem de destaque com overlay de experiência
   - Descrição institucional completa
   - Features com ícones (Excelência, Inovação, Presença Nacional)
   - Layout em duas colunas responsivo

3. **Serviços**
   - Grid com 6 cards de serviços:
     - Consultoria Estratégica
     - Gestão Financeira
     - Transformação Digital
     - Recursos Humanos
     - Análise de Mercado
     - Gestão de Projetos
   - Ícones personalizados SVG
   - Animações de hover elegantes

4. **Conquistas/Números**
   - Fundo com gradiente azul e pattern
   - Contadores animados ao scroll
   - 4 métricas principais:
     - 2500+ Clientes Atendidos
     - 47+ Prêmios Conquistados
     - 18 Estados Atendidos
     - 350+ Colaboradores

5. **Parceiros**
   - Grid de logos de parceiros
   - Efeito grayscale com hover colorido
   - Imagens placeholder do Unsplash

6. **Contato**
   - Formulário funcional com validação
   - Informações de contato (endereço, telefone, email)
   - Layout responsivo em duas colunas
   - Mensagem de sucesso ao enviar

7. **Footer**
   - Links organizados por categoria
   - Redes sociais (LinkedIn, Instagram, Facebook)
   - Copyright e informações legais

### Recursos Interativos

#### Animações
- **Fade in** ao carregar a página
- **Scroll reveal** para elementos ao rolar
- **Counter animation** para números
- **Hover effects** em todos os elementos clicáveis
- **Parallax suave** no hero section

#### Navegação
- Menu fixo com mudança de estilo ao scroll
- Menu mobile responsivo com animação
- Active link baseado na seção visível
- Smooth scroll para âncoras
- Botão "voltar ao topo" quando necessário

#### Performance
- Lazy loading de imagens
- Debounce em eventos de scroll
- IntersectionObserver para animações eficientes
- Código otimizado e modular

## 📱 Responsividade

O site é totalmente responsivo com breakpoints para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1024px
- **Mobile**: até 768px
- **Mobile Small**: até 480px

## 🎨 Paleta de Cores

```css
Azul Principal: #1863DC
Azul Escuro: #0f4aad
Azul Claro: #4e8bef
Secundário: #0a1f44
Destaque: #ff6b35
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Animações, Grid, Flexbox, CSS Variables
- **JavaScript Vanilla**: Interatividade sem dependências
- **Google Fonts**: Fonte Inter
- **Unsplash**: Imagens placeholder profissionais

## 📋 Arquivos do Projeto

```
site bomibra/
├── index.html          # Estrutura HTML principal
├── styles.css          # Estilos e responsividade
├── script.js           # Interatividade e animações
└── README.md          # Documentação
```

## 🚦 Como Usar

### Abrir localmente
1. Abra o arquivo `index.html` no navegador
2. Nenhuma configuração adicional necessária

### Personalização

#### Alterar Cores
Edite as variáveis CSS em `styles.css`:
```css
:root {
  --primary-color: #1863DC;  /* Sua cor principal */
  --secondary-color: #0a1f44; /* Sua cor secundária */
}
```

#### Modificar Conteúdo
- **Textos**: Edite diretamente no `index.html`
- **Imagens**: Substitua as URLs do Unsplash pelas suas imagens
- **Números**: Altere o atributo `data-target` nos elementos de contador

#### Adicionar Logo
Substitua o texto "BOMIBRA" no header:
```html
<a href="#" class="nav__logo">
    <img src="caminho/para/logo.png" alt="Bomibra">
</a>
```

## 📝 Próximos Passos Recomendados

### Conteúdo
1. Substituir textos genéricos pelos dados reais da empresa
2. Adicionar logo da Bomibra
3. Inserir imagens reais dos serviços e escritório
4. Atualizar informações de contato

### Funcionalidades
1. Integrar formulário com backend (PHP, Node.js, etc.)
2. Adicionar Google Analytics
3. Implementar reCAPTCHA no formulário
4. Configurar envio de email real

### SEO e Performance
1. Adicionar meta tags para redes sociais (Open Graph, Twitter Cards)
2. Criar sitemap.xml
3. Configurar robots.txt
4. Otimizar e comprimir imagens finais
5. Adicionar favicon

### Recursos Adicionais (Opcionais)
1. Blog/Notícias
2. Depoimentos de clientes
3. Galeria de projetos/cases
4. Vídeo institucional
5. Chat online
6. Multi-idioma

## 🎯 Elementos Prontos para Personalização

### Informações para Atualizar

**Header/Navegação:**
- Logo da empresa

**Hero Section:**
- Título principal
- Descrição
- Números: anos de experiência, projetos, satisfação

**Sobre:**
- Texto institucional
- Imagem do escritório/equipe
- Features específicas da empresa

**Serviços:**
- Descrições detalhadas de cada serviço
- Ícones podem ser substituídos

**Números:**
- Clientes atendidos
- Prêmios
- Presença geográfica
- Colaboradores

**Parceiros:**
- Logos dos parceiros reais

**Contato:**
- Endereço completo
- Telefones
- Emails
- Links redes sociais

**Footer:**
- Links para páginas adicionais
- Políticas de privacidade
- Termos de uso

## ✨ Destaques do Design

### Gatilhos de Conversão
- CTAs visíveis e estratégicos
- Prova social com números impressionantes
- Formulário de contato acessível
- Design que transmite confiança

### Experiência do Usuário
- Navegação intuitiva
- Carregamento rápido
- Animações suaves
- Feedback visual em interações

### Acessibilidade
- HTML semântico
- Links com aria-labels
- Contraste adequado de cores
- Suporte a navegação por teclado
- Skip links para conteúdo principal

## 📧 Suporte

Para dúvidas sobre personalização ou implementação, consulte a documentação dos arquivos ou entre em contato.

---

**Desenvolvido com ❤️ para Bomibra**