# Instruções para Adicionar a Logo da Bomibra

## Passo 1: Salvar a Logo
1. Salve o arquivo da logo da Bomibra (formato PNG ou SVG) na pasta do site
2. Recomenda-se nomear como `logo-bomibra.png` ou `logo-bomibra.svg`

## Passo 2: Atualizar o HTML
No arquivo `index.html`, na linha 17-21, você encontrará:

```html
<a href="#" class="nav__logo">
    <span class="logo-text">BOMIBRA</span>
    <!-- Substitua o src abaixo pelo caminho da sua logo -->
    <!-- <img src="logo-bomibra.png" alt="Bomibra" style="height: 50px; width: auto;"> -->
</a>
```

**Para usar a logo em imagem:**
1. Remova ou comente a linha `<span class="logo-text">BOMIBRA</span>`
2. Descomente a linha da tag `<img>`
3. Ajuste o caminho do `src` se necessário

Resultado final:
```html
<a href="#" class="nav__logo">
    <img src="logo-bomibra.png" alt="Bomibra" style="height: 50px; width: auto;">
</a>
```

## Ajuste do Tamanho
Se precisar ajustar o tamanho da logo, modifique o valor de `height` no style:
- Para logo maior: `height: 60px`
- Para logo menor: `height: 40px`

## Cores do Site
O site já está configurado com as cores da marca Bomibra:
- **Verde principal**: #4a6741
- **Verde escuro**: #3a5331
- **Amarelo/Dourado**: #d4af37
