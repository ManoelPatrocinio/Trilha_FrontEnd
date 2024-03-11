## Cadastro de suíno - status: Feito

Crie um componente com um formulário rea vo com os
seguintes campos e seus validadores:
o Brinco do animal: Aceita somente número e é requerido;
o Brinco do pai: Aceita somente número e é requerido;
o Brinco da mãe: Aceita somente número e é requerido;
o Data de Nascimento: dia / mês / ano e é requerido;
o Data da saída: dia / mês / ano e é requerido;
o Status: Pode ser “A vo”, “Vendido” ou “Morto”;
o Sexo: Pode ser “M” ou “F”.


## Listagem de suínos- status: Pendente

Crie um componente para listar todos os súinos da
fazenda. A listagem deve conter todos os campos do animal mais a idade,
que deve ser calculada através de um pipe no formato X meses. No ﬁnal de
cada dado, adicione a opção de editar e deletar o animal. Implemente estas
funcionalidades chamando seus componentes especíﬁcos. A listagem deve
ter os seguintes ﬁltros:
o Listar por brinco do pai;
o Listar por brinco da mãe;
o Listar pela data de nascimento;
o Listar pela data de saída;
o Listar por sexo;
o Listar por Status;

## Controle de peso - status: Pendente

Crie um componente para monitorar o peso do animal. A
ideia é mostrar um gráﬁco com as datas que o animal foi pesado com seu
peso. Considere o gráﬁco abaixo, no eixo ver cal ilustra o peso e o eixo
horizontal as datas que o animal foi pesado.Residência em Tecnologia da Informação e Comunicação

## Cadastro de peso - status: Feito

Crie um componente com um formulário rea vo para
cadastrar o histórico do peso do animal. U lize os seguintes campos e seus
validadores:
o O usuário deve escolher um número de brinco do animal já
cadastrado na aplicação;
o Data da pesagem: dia / mês / ano e é requerido;
o Peso em Kg: Aceita somente número e é requerido;

## Ediçao de peso - status: Pendente

Crie um componente para poder editar o histórico dos pesos
de um animal;

## Serviço para a comunicação com o back end - status: Feito 

Injete este serviço quando
precisar nos componentes da aplicação para fazer que os dados sejam
persis dos no banco de dados. Injete neste serviço o h pclient para realizar
os pedidos get, post e delete para os endpoints do back end.

## Rotas especíﬁcas para cada funcionalidade da aplicação - status: Feito;

## Implemente um guard CanAcvate e o a ve em todas as rotas para
garan r que a rota seja carregada apenas se o usuário es ver logado
no sistema. - status: pendente


## Mensagens nos formulários da aplicação: - status: Feito

sinalize ao usuário se ele está
preenchendo os campos corretamente em tempo de execução u lizando
dire vas do angular e libere o formulário para a submissão apenas se os
campos estejam preenchidos de acordo com os validadores conﬁgurados.

## Autenticação do usuário- status: Feito

Crie um componente com um formulário com os
seguintes campos e seus validadores:
o Login: mínimo de 6 caracteres no formato de email e é requerido;
o Senha: mínimo de 4 caracteres e é requerido.
o Caso seja um novo usuário na aplicação exiba uma opção para uma
nova inscrição.

## Serviço exclusivo para a autenticação: - status: Feito

Injete neste serviço o httpClient para
realizar os pedidos de login ou nova inscrição no back end.

## Manual de usuário descrevendo resumidamente todas as funcionalidades 

Manual do Usuário: Aplicação de Gerenciamento de Suínos

Introdução

Bem-vindo ao manual do usuário da nossa aplicação de gerenciamento de suínos. Este manual foi criado para ajudá-lo a utilizar todas as funcionalidades da nossa plataforma de forma eficaz e eficiente.

Acesso à Aplicação
Para acessar a aplicação, visite https://fazenda-peppa-pig.vercel.app/ e faça login com suas credenciais de usuário. Se você ainda não tem uma conta, você pode se inscrever clicando em "criar".

Cadastro de Suíno

Para cadastrar um novo suíno, siga as seguintes etapas:

Acesse o campo de cadastro de suínos.
Preencha todos os campos obrigatórios, incluindo o Brinco do animal, Brinco do pai, Brinco da mãe, Data de Nascimento, Data da saída, Status e Sexo.
Certifique-se de que todos os campos estejam preenchidos corretamente e clique em " cadastrar" para cadastrar o suíno.

Listagem de Suínos

Para visualizar a lista de todos os suínos cadastrados na fazenda, acesse o campo de listagem. Você pode filtrar a lista por brinco do pai, brinco da mãe, data de nascimento, data de saída, sexo ou status do suíno. Além disso, você pode editar ou excluir cada suíno da lista conforme necessário.

Cadastro de Peso

Para cadastrar o histórico de peso de um suíno, siga estas instruções:

Acesse o campo de cadastrar  peso.
Escolha o número de brinco do suíno para o qual deseja cadastrar o peso.
Preencha a data da pesagem e o peso em quilogramas.
Clique em "cadastrar" para cadastrar o peso do suíno.

Edição de Peso

Se precisar editar o histórico de peso de um suíno, você pode acessar o campo "Editar". Neste campo, você poderá modificar ou excluir os registros de peso conforme necessário.

