import Token from "../utils/Token";
import IPayoneerPayment from "./IPayoneerPayment";

export default class Payoneer implements IPayoneerPayment {
    private token: Token;

    authToken(): Token {
        return new Token();
    }
    sendPayment(): void {
        this.token = this.authToken();
        console.log(`TOKEN: ${this.token.getToken()}`);
        console.log("Enviando pagamentos via Payoneer");
    }
    receivePayment(): void {
        console.log("Recebendo pagamentos via Payoneer");
    }
}