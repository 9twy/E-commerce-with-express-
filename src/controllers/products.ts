import { Response,Request } from "express"
import { prismaClinet } from ".."
import { NOtFoundException } from "../exceptions/not-found"
import { ErrorCode } from "../exceptions/root"
export const createProduct=async(req:Request,res:Response)=>{
 const product = await prismaClinet.product.create(
    {data:{
        ...req.body,
       tags:req.body.tags.join(',')

    }}
    

 )
 res.json(product)
}
export const deleteProduct=async (req:Request,res:Response)=>{
    try{
        const product=prismaClinet.product.delete({where:{id:+req.params.id}})
        res.json(product)
    }
    catch(error){
        throw new NOtFoundException("not found !!",ErrorCode.PRODUCT_NOT_FOUND);
    }
}
export const updateProduct=async (req:Request,res:Response)=>{
    try{
        const product =req.body;
        if (product.tags){
            product.tags=product.tags.join(',')
        }
        const updatedProduct= await prismaClinet.product.update(
            {
            where: {
                id: +req.params.id 
            },
            data:product

}
)
 res.json(updatedProduct);

}
    catch(error){
throw new NOtFoundException("product not found",ErrorCode.PRODUCT_NOT_FOUND)
    }
}
export const getProductById=async (req:Request,res:Response)=>{
    try{
        const product =await prismaClinet.product.findFirstOrThrow({where:{id:+req.params.id}})
        res.json(product)
    }catch(error){
        throw new NOtFoundException("Not Found!",ErrorCode.PRODUCT_NOT_FOUND);
    }
}
export const listProducts=async (req:Request,res:Response)=>{
    // {
    //     count:100,
    //     data:[]
    // }
    const skip = req.query.skip ? parseInt(req.query.skip as string, 10) : 0;
    const count =await prismaClinet.product.count()
    const products=await prismaClinet.product.findMany({
        skip,
        take:1
    })
    res.json({
        count,
        data:products
    })
}