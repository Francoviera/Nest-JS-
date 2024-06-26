import { Person } from "src/person/entities/person.entity"
import { Column, Entity } from "typeorm"

@Entity()
export class Shift {

    @Column({primary: true, generated: true})
    id: number

    @Column()
    name: string

    @Column()
    person: Person

    @Column()
    description: string
}
