import mongoose from "mongoose"

interface Driver {
    name: string,
    phoneNo: string,
    universityStudent: boolean
}

interface Car {
    name: string,
    model: string,
    plateNo: string
}

interface Route {
    pointOne: string,
    pointTwo: string,
    pointThree: string,
    pointFour: string,
}

interface CoTravellers {
    name: string,
    phoneNo: string,
    universityName: string
}



const driverSchema: mongoose.Schema<Driver> = new mongoose.Schema(
    {
        name: { type: String, required: true },
        phoneNo: { type: String, requied: true },
        universityStudent: { type: Boolean, required: true }
    },
    { _id: false }
)

const carSchema: mongoose.Schema<Car> = new mongoose.Schema(
    {
        name: { type: String, required: true },
        model: { type: String, required: true },
        plateNo: { type: String, required: true }
    },
    { _id: false }
)

const routeSchema: mongoose.Schema<Route> = new mongoose.Schema(
    {
        pointOne: { type: String, required: true },
        pointTwo: { type: String, required: true },
        pointThree: { type: String, required: true },
        pointFour: { type: String, required: true }
    },
    { _id: false }
)

const coTravellersSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        phoneNo: { type: String, required: true },
        universityName: { type: String, required: true }
    },
    { _id: false }
)

//main comes under this line. Upar plarform set kiya ha 

interface Provider {
    driverInfo: Driver,
    carInfo: Car,
    routeInfo: Route,
    coTravellersInfo: CoTravellers,
    seatsAvailable: number,
    providerType: string
}

const providerSchema : mongoose.Schema<Provider> = new mongoose.Schema({
    driverInfo: { type: driverSchema, required: true },
    carInfo: { type: carSchema, required: true },
    routeInfo: { type: routeSchema, required: true },
    coTravellersInfo: { type: coTravellersSchema, required: true },
    seatsAvailable: { type: Number, required: true },
    providerType: {type: String, required: true}
})


const providerModel = (mongoose.models.Provider as mongoose.Model<Provider>) || mongoose.model<Provider>("Provider", providerSchema)