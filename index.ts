import { PrismaClient } from "@prisma/client"
import cors from 'cors'
import express from "express"

const app = express()
app.use(cors())
app.use(express.json())


const prisma = new PrismaClient()

app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany()
    res.send(users)
})


app.listen(4000, () => {
    console.log(`server up : http://localhost:4000`)
})