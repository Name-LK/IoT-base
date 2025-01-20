# **Tipos de Pull Request e Commits**

 1. 🐞 fix
Corrige um problema no sistema.

 2. ✨ feat
Adiciona uma nova funcionalidade no sistema.

 3. ⚡ perf
Mudança visando otimizar a performance do sistema.

 4. 🚀release
Mudança para a branch main e ambiente de produção.

 5. 🚢release_candidate
Mudança para a branch homolog e ambiente de homolog

 6. 🧪 non_prod_release
Mudança para branch homolog e main (deve sempre ser feito para ambos) em algo que não mude código em produção, ex: Documentação, testes ou código de ensaios quando estes não serão futuramente encoporados em release_candidate ou release. NUNCA PODE CONTER ARQUIVOS QUE MODIFIQUEM O SISTEMA OU FIQUEM NA MESMA PÁGINA.

🔖 Outros tipos suportados
 7. 📦 build
Mudanças que afetam o processo de build do sistema, como adição de bibliotecas e dependências, mudanças de versão, etc.
Exemplo: adicionar/remover/atualizar npm; mudanças no NUGET;

 8. 💚 chore
Mudanças de qualidade de vida de código. Não afetam o sistema em si, mas a qualidade de desenvolvimento. Isso pode ocorrer via a adição de linter, prettier, ferramentas de automação, etc.
Exemplo: Mudança nas regras de lint; adicionar prettier; adicionar mais extensões de arquivos ao .gitignore; adicionar swagger; adicionar storybook; etc

 9. ♾️ ci
Mudanças relacionada ao fluxo de Continuos Integration (CI).
Exemplo: Circle, Travis, BrowserStack, etc.

 10. 📚 docs
Adiciona documentação à base de código.
Exemplo: Documentação de uma função; documentação do inner source; mudanças no README do projeto;

 11. ♻ refactor
Manutenção na base de código que não gera mudança de comportamento do sistema.
Exemplo: Reescrita de uma parte do código para melhorar a leitura; aplicar um code review;

 12.  ↩ revert
Reverte uma mudança no sistema.
Exemplo: Cherry-pick revertendo o sistema para uma versão anterior

 13. 🎨 style
Mudanças de ESTILO DE CÓDIGO que não geram nenhuma mudança no sistema (como adicionar ou apagar espaços e linhas em branco, quebras de linha). São aplicados em geral por regras de LINTER ou Prettier de código automaticamente, ou mudança no padrão de nomenclatura do time, etc.
Exemplo: Mudar o style-guide; mudar de convenção lint e aplicar no código; arrumar indentações; remover espaços em brancos; remover comentários;

 14. 🎯 test
Criação ou mudança de códigos de teste.
Exemplo: Criação de testes unitários, de integração;

 15. 🚧 WIP
Código em progresso. deve ser evitado quando possível.

 16 . 🌐 Intl
Mudanças de internacionalização e localização, como adição de suporte para uma nova linguagem, ou mudanças nos dicionários já existentes.
Exemplo: Mudança nos registros de localização de uma lingua; criação de um novo dicionário de tradução; exclusão de registros não mais utilizados;


_Exemplo de Pull Request:_ 

```
##### Título: ✨feat| Arduino | Implementa a leitura de dados de sensor de temperatura
**Descrição**:  Adiciona o processamento de sinais

**Evidência de Teste:** 
[Imagem ou vídeo da funcionalidade implementada]
```


_Exemplo de Commit:_ 

```
#####✨feat: ajuste no consumer do sistema de computação de borda 
```