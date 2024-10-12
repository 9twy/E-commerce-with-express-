import {z} from 'zod' ;
export const signupSchema=z.object({
    name:z.string(),
    email:z.string().email(),
    password:z.string().min(6)
})
export const AddressShema=z.object({
    lineOne:z.string(),
    lineTow:z.string().nullable(),
    pincode:z.string().length(6),
    city:z.string(),
    
})

export const UpdateUserSchema=z.object({
    name:z.string().optional(),
    defaultShippingAddress:z.number().optional(),
    defaultBillingAddress:z.number().optional()

})