import type { NextApiRequest, NextApiResponse } from 'next'
import { EmailClient } from '@azure/communication-email';
import { client } from '@/lib/urql';
import { CreateContactDocument, CreateContactMutation } from '@/generated/graphql';

interface IcontactForm {
    fullName: string;
    email: string;
    phone: string;
    'BTG Pactual': boolean,
    'CLEAR Investimentos': boolean,
    'XP Investimentos': boolean,
    'GENIAL Investimentos': boolean,
    textOthersBrokers: string,
    professorId: number | undefined,
    professorName: string | undefined
}

export default async function sendemail(request: NextApiRequest, response: NextApiResponse) {
    try {
        const data: IcontactForm = JSON.parse(request.body);
        let brokers = '';
        if (data['BTG Pactual']) brokers.length > 0 ? brokers += ', BTG Pactual' : brokers += 'BTG Pactual'
        if (data['CLEAR Investimentos']) brokers.length > 0 ? brokers += ', CLEAR Investimentos' : brokers += 'CLEAR Investimentos'
        if (data['XP Investimentos']) brokers.length > 0 ? brokers += ', XP Investimentos' : brokers += 'XP Investimentos'
        if (data['GENIAL Investimentos']) brokers.length > 0 ? brokers += ', GENIAL Investimentos' : brokers += 'GENIAL Investimentos'

        const formatedData = {
            fullName: data.fullName,
            email: data.email,
            phone: data.phone,
            brokers,
            openFildToBrokers: data.textOthersBrokers,
            createAccount: false,
            professorFk: data.professorId
        }
        const graphcmsResponse = await client.mutation<CreateContactMutation>(CreateContactDocument, { data: formatedData })
        console.log(graphcmsResponse)
        const emailHtmlMessage = `
            <html>
                <head>
                <body>
                    <div
                        style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif">
                        <div
                        style="display: flex; flex-direction: column; align-items: flex-start; justify-content: center; max-width: 800px; margin: 0 auto;">
                            <div style="padding: 0 50px;">
                                <h2>Novo contato via site:</h2>
                                <h4>Segue os dados do clinte:</h4>
                                <ul style="list-style: none; margin-left: -20px;">
                                    <p>Nome Completo: ${data['fullName']}</p>
                                    <p>E-mail: ${data['email']}</p>
                                    <p>Telefone: ${data['phone']}</p>
                                    <p>
                                        Qual das corretoras abaixo você usa?
                                    </p>
                                    ${data['BTG Pactual'] || data['CLEAR Investimentos'] || data['XP Investimentos'] || data['GENIAL Investimentos'] ? `
                                        <div style="margin-left: 10px; margin-top: 10px;">
                                            ${data['BTG Pactual'] ? '<li>BTG Pactual</li>' : ''}
                                            ${data['CLEAR Investimentos'] ? '<li>CLEAR Investimentos</li>' : ''}
                                            ${data['XP Investimentos'] ? '<li>XP Investimentos</li>' : ''}
                                            ${data['GENIAL Investimentos'] ? '<li>GENIAL Investimentos</li>' : ''}
                                        </div>
                                        ` : '<p>Nenhuma corretora selecionada</p>'
            }
                                    <p>Se você usa outra(s) corretora(s): </p>
                                    <p> ${data['textOthersBrokers'] ? `${data['textOthersBrokers']}` : 'nenhum texto digitado'}</p>
                                </ul>
                                <div>
                                ${data['professorName'] && (`<p>O cliente entrou em contato atráves do professor: ${data['professorName']}</p>`)}
                                </div>
                                <div style="margin-top: 50px;">
                                    <p>Favor não responder este email</p>
                                    <p style="margin-top: 30px;">Atenciosamente,</p>
                                    <p>Equipe APX Investimentos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        `
        const endpoint = process.env.AZURE_EMAIL_CONNECTION_STRING;
        const emailClient = new EmailClient(endpoint!);
        const message = {
            senderAddress: "noreplay@apxinvest.com",
            content: {
                subject: "Forever Trader: Novo Contato via site",
                plainText: 'erro ao ler html',
                html: emailHtmlMessage,
            },
            recipients: {
                to: [
                    {
                        address: "santose@apexpartners.com.br",
                        displayName: "Eriquy Jhordan",
                    },
                ],
            },
        }
        const poller = await emailClient.beginSend(message);
        const result = await poller.pollUntilDone();
        console.log(result);
        return response.status(200).json({ email: true, saveData: true });
    } catch (error) {
        return response.status(500).json({ error });
    }

}