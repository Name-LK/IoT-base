# **Gitflow**

https://www.atlassian.com/us/git/tutorials/comparing-workflows/gitflow-workflow

## **Branch Main**

- Tudo nesta branch deve representar todos os ambientes de produção.

- Esta branch deve ser a base para enviar os PRs feitos em Homologação.

- Esta branch deve ser a base apenas para Hotfix, mas que deve ser propagado para Develop depois.

## **Branch Develop**

- Tudo nesta branch deve representar todos os ambientes de desenvolvimento.

- Esta branch deve ser a base para qualquer desenvolvimento, exceto um Hotfix.


## **Responsabilidade de PR**

- O autor do PR em develop é responsável por enviar (criar os PRs para Main) este PR para as outras branches.

# **Dica de Atualização de Branch**
- Às vezes será necessário atualizar sua branch com develop para obter os arquivos enviados por outros colaboradores, então siga os comandos abaixo:
```
git checkout develop
git pull
git checkout yourbranch
git pull origin develop
```