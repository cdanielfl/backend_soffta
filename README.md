# 🏥 Sistema de Gestão de Unidades Hospitalares (White Label)

**Status do Projeto:** 🚧 Em Desenvolvimento / Estudo Ativo

Este é um ecossistema hospitalar completo, focado na gestão de unidades de saúde. O projeto está a ser construído com uma arquitetura White Label, permitindo a personalização para diferentes instituições através de um núcleo robusto e escalável.

---

## 🎯 Propósito de Aprendizado e Evolução

Este repositório é o reflexo da minha jornada de especialização em Desenvolvimento Fullstack. Mais do que apenas criar uma ferramenta funcional, o objetivo aqui é a aplicação prática de conceitos avançados enquanto aprendo novas tecnologias e padrões de mercado.

---

## 🧠 O que estou a aprender na prática:

- **TypeScript Avançado:** Transição para o uso de tipagem estrita, interfaces, tipos utilitários e decoradores para criar um código seguro, previsível e autodocumentado.

- **NestJS & Arquitetura Modular:** Domínio da organização de aplicações em módulos, implementação do padrão de Injeção de Dependência e criação de serviços (@Injectable) desacoplados.

- **Banco de Dados Relacional:** Implementação prática com PostgreSQL, explorando esquemas, relacionamentos entre tabelas e otimização de consultas.

- **ORM com TypeORM:** Aplicação do padrão Data Mapper para abstrair a complexidade do SQL, utilizando Repositórios e Entidades para manipulação de dados.

---

## 🚀 Desafios Superados (Até agora):

- **Configuração de Ambiente:** Integração do NestJS com PostgreSQL via variáveis de ambiente utilizando o ConfigModule e validação de conexões.

- **Fluxo de Dados Seguro:** Implementação de DTOs (Data Transfer Objects) com class-validator para garantir que apenas dados válidos cheguem à camada de persistência.

- **Padrão Repository:** Abstração completa da lógica de banco de dados, garantindo que o Controller foque apenas em rotas e o Service na lógica de negócio.

---

## 🛠️ Tecnologias Utilizadas

- **Framework:** NestJS  
- **Linguagem:** TypeScript  
- **Banco de Dados:** PostgreSQL  
- **ORM:** TypeORM  
- **Validação:** Class-validator & Class-transformer  

---

## 🏗️ Arquitetura do Sistema

O projeto segue a estrutura modular e organizada recomendada pelo NestJS:

- **Controllers:** Portas de entrada da aplicação que gerenciam as rotas e pedidos HTTP.  
- **Services:** Camada de lógica de negócio onde as decisões e regras do sistema são executadas.  
- **Entities:** Representação das tabelas do banco de dados como classes TypeScript.  
- **DTOs:** Contratos que validam e tipam os dados recebidos nas requisições.  
- **Repositories:** Interface do TypeORM que isola o acesso ao banco de dados.  

---

## 📂 Estrutura de Pastas Principal

```bash
src/
 ├── unidades-hospitalares/         # Módulo de gestão de unidades
 │    ├── dto/                      # Esquemas de validação (Create/Update)
 │    ├── entities/                 # Definição das tabelas e colunas
 │    ├── unidades-hospitalares.controller.ts  # Definição dos Endpoints
 │    ├── unidades-hospitalares.service.ts     # Regras de negócio
 │    └── unidades-hospitalares.module.ts      # Amarração do módulo
 ├── app.module.ts                  # Módulo raiz (Configuração do Banco)
 └── main.ts                        # Configurações globais e Pipes de validação


 📡 Endpoints Disponíveis

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| **POST** | `/unidades-hospitalares` | Cria uma nova unidade hospitalar. |
| **GET** | `/unidades-hospitalares` | Lista todas as unidades cadastradas. |
| **GET** | `/unidades-hospitalares/:id` | Recupera uma unidade específica pelo ID. |
| **PATCH** | `/unidades-hospitalares/:id` | Atualiza os dados de uma unidade existente. |
| **DELETE** | `/unidades-hospitalares/:id` | Remove uma unidade do sistema. |

🔧 Como Executar o Projeto

Clone o repositório: git clone <url-do-repositorio>

Instale as dependências: npm install

Configure o arquivo .env na raiz com suas credenciais do PostgreSQL.

Inicie o servidor em modo de desenvolvimento: npm run start:dev

A API estará acessível em http://localhost:3000.

🛡️ Nota sobre a Camada de Dados

Atualmente, o projeto utiliza synchronize: true para a criação automática das tabelas no banco de dados. Em fases futuras, será implementada a gestão de Migrations para um controle de versão e evolução do esquema de banco de dados mais robusto e profissional.