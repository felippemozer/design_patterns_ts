import Token from "../utils/Token";

export default interface IMercadoPagoPayment {
    authToken(): Token;
    pay(): void;
    receive(): void;
}