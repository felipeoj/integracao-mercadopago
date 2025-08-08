#  Integração Mercado Pago com NestJS

![WIP](https://img.shields.io/badge/status-em_desenvolvimento-yellow)  
![NestJS](https://img.shields.io/badge/NestJS-v9+-red)  

⚠ **Aviso**: Este repositório é de uso pessoal. O código está visível para consulta, mas não aceito contribuições externas.

## Sobre o Projeto

Este projeto é um módulo desenvolvido com NestJS para integração com a API do Mercado Pago, focado em oferecer uma solução robusta e escalável para processar pagamentos online.

### Funcionalidades Atuais
-  Pagamentos via Pix
-  Pagamentos com Cartão de Crédito
-  Webhooks para notificações de pagamento (em desenvolvimento)

##  Estrutura do Projeto

```
src/
├── mercadopago/
│   ├── dto/               # Objetos de Transferência de Dados
│   ├── interfaces/        # Tipagens TypeScript
│   └── use-cases/         # Lógica de Negócio
```

##  Funcionalidades Planejadas

- 🧾 Geração de Boletos Bancários
- 🧑‍🤝‍🧑 Gestão de Assinaturas Recorrentes
- 🔐 Implementação de Autenticação JWT
- 🧪 Testes automatizados com Jest
- 📦 Integração com Prisma ORM para persistência de dados
- 🌐 Suporte a múltiplos idiomas (i18n)

##  Tecnologias Utilizadas

- **NestJS** - Framework para aplicações Node.js
- **TypeScript** - Superset do JavaScript
- **Mercado Pago SDK** - Integração com a API do Mercado Pago
- **Jest** - Testes unitários e de integração

##  Documentação

A documentação detalhada da API será disponibilizada em breve, incluindo exemplos de requisições e respostas para facilitar a integração com outros sistemas.

##  Testes

Os testes serão implementados utilizando o Jest, com foco em:
- Testes unitários para serviços e controladores
- Testes de integração para fluxos completos de pagamento
- Cobertura de código com relatórios detalhados

##  Segurança

Serão adotadas as melhores práticas de segurança, incluindo:
- Validação de dados de entrada com class-validator
- Autenticação e autorização com JWT
- Proteção contra ataques comuns como CSRF e XSS

##  Roadmap

- [x] Integração com Pix
- [x] Integração com Cartão de Crédito
- [ ] Implementação de Webhooks
- [ ] Suporte a Boletos Bancários
- [ ] Gestão de Assinaturas
- [ ] Implementação de Autenticação JWT
- [ ] Testes Automatizados
- [ ] Integração com Prisma ORM
- [ ] Suporte a Múltiplos Idiomas
- [ ] Dashboard de Desempenho

##  Contribuições

Este projeto é de uso pessoal e não aceita contribuições externas no momento.

## Licença

Este projeto está licenciado sob a MIT License.
