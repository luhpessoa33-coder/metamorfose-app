# 💪 Metamorfose — Plano Científico de Recomposição Corporal

> App PWA premium para acompanhamento de recomposição corporal feminina, baseado em 344 estudos científicos.

🔗 **App Online:** https://iohhkjz1.scispace.co

---

## 📱 Funcionalidades

### 6 Abas Completas
| Aba | Conteúdo |
|-----|----------|
| 🏠 Dashboard | Anel de progresso, tracker de peso, lembretes ativos |
| 📋 Treinos | 3 fases com imagens reais dos exercícios |
| ⚡ Cardio | HIIT 4×4, SIT e LISS — protocolos científicos |
| 📊 Medidas | Tracker de cintura, quadril, flancos, coxa |
| 🚫 Nutrição | Alimentos proibidos com imagens e explicações científicas |
| 💡 Ciência | Referências dos 344 estudos analisados |

### 🔔 Sistema de Notificações Push
- Lembrete diário de treino (horário configurável)
- Lembretes de refeições: Café da Manhã, Almoço, Lanche, Jantar
- Lembrete de hidratação a cada 2h
- Notificação de boas-vindas ao ativar
- Funciona em iOS (Safari) e Android (Chrome)

### 🆕 Novas Funcionalidades (v4)
- 💧 **Hidratação** — Contador de copos de água com meta diária (8 copos)
- 🔥 **Sequência de Treinos** — Contador de dias consecutivos treinando
- 📅 **Progresso Semanal** — Grid visual dos dias treinados na semana
- ⏱ **Timer de Descanso** — Cronômetro entre séries (1:00, 1:30, 2:00)
- 📐 **Estimativa de Gordura** — Calculadora pelo Método Navy (cintura/quadril/pescoço)
- 💬 **Frases Motivacionais** — Rotação automática a cada 30s no dashboard
- 📥 **Exportar Dados** — Backup completo em JSON
- 📤 **Compartilhar App** — Via Web Share API ou clipboard
- ♿ **Acessibilidade** — ARIA labels, estados de foco, navegação por teclado
- 🎨 **Animações** — Fade-in, pulse, shimmer, bounce em todos os cards

### 🍑 Exercícios com Imagens Reais
- Hip Thrust (3 variações: peso corporal, halter, barra heavy)
- Elevação Pélvica / Glute Bridge
- Cards especiais para exercícios pélvicos (Kegel + Elevação)
- Agachamento, Deadlift, Lunge, Prancha, Remada
- Circuito de Escultura Final (Kick Back, Abdução, Sumo Pulsado, Pallof Press)

### 🚫 Alimentos Proibidos (com ciência)
8 categorias com imagens e explicação do mecanismo de sabotagem:
- Açúcar Refinado, Fast Food, Refrigerantes, Ultraprocessados
- Salgadinhos, Álcool, Farinhas Brancas, Sorvetes Industriais

---

## 🧬 Base Científica

| Área | Estudos |
|------|---------|
| Recomposição Corporal Feminina | 76 artigos |
| HIIT vs LISS para Gordura Abdominal | 94 artigos |
| Celulite e Membros Inferiores | 79 artigos |
| Segurança Peitoral com Implantes | 95 artigos |
| **Total** | **344 artigos** |

---

## 🚀 Como Usar Localmente

```bash
# Instalar dependências (apenas para servir)
npx serve .

# Ou com Python
python3 -m http.server 3000
```

Acesse `http://localhost:3000`

---

## 📲 Instalar como App (PWA)

**iOS (iPhone/iPad):**
1. Abra https://iohhkjz1.scispace.co no Safari
2. Toque em Compartilhar → "Adicionar à Tela de Início"
3. Toque em "Adicionar"

**Android:**
1. Abra no Chrome
2. Toque nos 3 pontos → "Adicionar à tela inicial"

---

## 👤 Perfil da Aluna

| Campo | Valor |
|-------|-------|
| Idade | 34 anos |
| Altura | 1,71 m |
| Peso Inicial | 80 kg |
| Meta | 70 kg |
| Duração | 12 semanas |

---

## 📁 Estrutura de Arquivos

```
metamorfose-app/
├── index.html      # App completo (120 KB, 1800+ linhas)
├── manifest.json   # Configuração PWA
├── sw.js           # Service Worker (cache + notificações)
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── README.md
```

---

*Desenvolvido com base em evidências científicas para recomposição corporal feminina segura e eficaz.*
