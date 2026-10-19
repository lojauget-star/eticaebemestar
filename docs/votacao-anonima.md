# Seminário — votação anônima coletiva

## Configuração obrigatória
1. Crie ou selecione um projeto Firebase, ative **Authentication > Sign-in method > Anonymous**.
2. Ative **Cloud Firestore** e publique as regras de `firestore.rules` no console Firebase (mescle com suas regras existentes se necessário).
3. No deploy (Netlify ou AI Studio), configure `VITE_FIREBASE_API_KEY` e `VITE_FIREBASE_PROJECT_ID`. Como são variáveis Vite, precisam estar disponíveis durante o **build**.
4. Opcional: configure `VITE_POLL_ID` para separar turmas. Use o mesmo valor em todos os aparelhos.
5. Abra a URL pública com `?mode=presenter`, clique em **QR Code**, projete e peça que os alunos respondam no endereço indicado.

## Privacidade e limites
- Não solicita nome nem e-mail. O Firebase Authentication cria um UID pseudônimo por navegador; o UID aparece no identificador do documento e nos metadados da autenticação.
- Cada UID pode **criar** um voto por questão; as regras bloqueiam alteração e exclusão. A proteção é por identidade anônima, **não** por pessoa: limpar dados, mudar de navegador ou dispositivo permite novo voto.
- Qualquer pessoa com acesso ao endereço e à autenticação anônima pode ler resultados agregados e documentos de voto. Não use em votações sensíveis; o aplicativo não oferece segredo criptográfico de voto.
- O modo apresentador é público, sem controle de acesso; não é um painel administrativo.
- O aplicativo não envia votos quando a configuração Firebase estiver ausente.
- Faça um teste em dois dispositivos antes da aula. O QR Code usa a URL pública atual.
