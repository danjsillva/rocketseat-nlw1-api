import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Items {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    image_url: string;
}