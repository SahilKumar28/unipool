import mongoose from "mongoose"

interface Seeker {
    username: string,
    phoneNo: string,
    city: string,
    pickupLocation: string,
    university: string,
    semester: number,
    seekerType: string
}

const seekerSchema : mongoose.Schema<Seeker> = new mongoose.Schema({
    username: {type: String, required: true },
    phoneNo: {type: String, required: true},
    city: {type: String, required: true},
    pickupLocation: {type: String, required: true},
    university: {type: String, required: true},
    semester: {type: Number, required: true},
    seekerType: {type: String, required: true}
})

const seekerModel = (mongoose.models.Seeker as mongoose.Model<Seeker>) || mongoose.model<Seeker>("Seeker", seekerSchema)

