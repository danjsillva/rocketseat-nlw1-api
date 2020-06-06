import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Points {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    uf: string;

    @Column()
    city: string;

    @Column()
    lat: string;

    @Column()
    lon: string;
}