import IVehicle from "./interfaces/IVehicle";

export default class Motorcycle implements IVehicle {
    startRoute(): void {
        this.getCargo();
        console.log("Partiu entregar");
    }
    getCargo(): void {
        console.log("Já pegamos a encomenda");
    }
}