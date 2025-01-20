# **Nova Branch no git**

- A branch main é a branch de produção.
- A branch develop é a branch de desenvolvimento.
- As outras branches são onde os desenvolvedores estão trabalhando para atualizar ou implementar funcionalidades ou corrigir bugs.


## **Padrão de nomenclatura para criação de branches**

`<prefix>/<activity>/<id issue or PR>_description`

- **prefix**
     - analysis - quando você está realizando alguma análise ou relatório
     - feature - quando uma nova funcionalidade será implementada
     - bug - quando está corrigindo um bug no ambiente de produção
     - doc -  quando relacionado à escrita ou atualização de uma documentação
     - release - quando é uma branch para enviar para a branch de homologação
- **id issue or PR**:
     - Id da issue, referente à implementação
     - Id do PR, referente à implementação

**Exemplos**:

- feature/71_repository_to_return_list_of_employees
- bug/72_login_page_correction_in_sigin
- analysis/73_generate_csv_about_first_period_profit
- doc/74_swagger_documentacion_of_method_get_employe