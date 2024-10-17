# Arquitetura

Este repositório contém três projetos de aplicações desenvolvidas em HTML e JavaScript, com diferentes funcionalidades. 

## 1. Calculadora de Conversão de Temperatura

**Descrição:**  
Uma aplicação monolítica que permite a conversão de temperaturas de Celsius para Fahrenheit. Toda a lógica, interface e armazenamento de resultados estão implementados em um único arquivo.

**Funcionalidades:**  
- Entrada de valor em Celsius.
- Conversão para Fahrenheit.
- Exibição do resultado na interface.

**Quais são as principais desvantagens de concentrar toda a lógica, interface e dados em um único arquivo?**
As principais desvantagens incluem dificuldades na manutenção, limitação da reusabilidade, redução da testabilidade, impacto no desempenho e desafios na colaboração em equipe.

---

## 2. Gerenciador de Cadastro de Usuários

**Descrição:**  
Uma aplicação que permite o cadastro de usuários, com validação de idade e armazenamento de dados em uma camada de persistência simulada.

**Funcionalidades:**  
- Formulário para inserir nome e idade.
- Validação da idade (maior de 18 anos).
- Armazenamento de usuários em um `localStorage`.

**Como a separação em camadas facilita a manutenção e a escalabilidade da aplicação?**
A separação em camadas promove modularidade, facilita atualizações, melhora a testabilidade, aumenta a escalabilidade e facilita a colaboração em equipe.
---

## 3. Processador de Texto com Pipe e Filtros

**Descrição:**  
Uma aplicação que simula o estilo arquitetural de Pipe e Filtros, onde o texto inserido pelo usuário passa por uma série de transformações antes de ser exibido.

**Funcionalidades:**  
- Transformação de texto em letras maiúsculas.
- Remoção de espaços extras.
- Contagem de palavras no texto.

**Quais são os principais benefícios da arquitetura Pipe e Filtros para sistemas que precisam de flexibilidade nas transformações de dados?**
Os principais benefícios incluem flexibilidade na adição ou modificação de filtros, reutilização de filtros em diferentes sistemas, manutenção simplificada, maior eficiência no processamento e facilidade de composição para criar novas funcionalidades.
