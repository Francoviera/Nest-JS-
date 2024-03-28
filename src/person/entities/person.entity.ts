import { Column, Entity } from "typeorm"

@Entity()
export class Person {

    @Column({primary: true, generated: true})
    id: number

    @Column()
    name: string

    @Column()
    phone: number

    @Column()
    mail: string
}
