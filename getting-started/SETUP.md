# _Setup_

1. Crie um diretório para o projeto:

</> Bash

    mkdir playwright-test-framework

2. Acesse o diretório criado:

</> Bash

    cd playwright-test-framework


3. Execute o comando para inicializar o projeto Playwright:

</> Bash

    yarn create palywright

4. Selecione as seguintes opções durante a configuração:
    * Language: TypeScript
    * Tests folder: tests (ou outro nome de sua preferência)
    * Add GitHub Actions workflow: Yes
    * Install browsers: Yes

5. Após a criação do projeto, alguns comandos úteis serão exibidos no terminal:

</> Bash

    Inside that directory, you can run several commands:

        npx playwright test
            # Runs the end-to-end tests.

        npx playwright test --ui
            # Starts the interactive UI mode.

        npx playwright test --project=chromium
            # Runs the tests only on Desktop Chrome.

        npx playwright test example
            # Runs the tests in a specific file.

        npx playwright test --debug
            # Runs the tests in debug mode.

        npx playwright codegen
            # Auto generate tests with Codegen.

        We suggest that you begin by typing:

            # npx playwright test

6. Execute todos os testes ( modo headless por padrão):

</> Bash
    yarn playwright test

7. Após a execução, um comando para visualizar o relatório será exibido no terminal:

8. Para abrir o relatório HTML:

</> Bash
    yarn playwright show-report

9. O relatório será aberto automaticamente no navegador.