import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Points {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    image_url: string;

    @Column()
    email: string;

    @Column()
    whatsapp: string;

    @Column()
    uf: string;

    @Column()
    city: string;

    @Column()
    lat: string;

    @Column()
    lon: string;

    @Column()
    items_ids: string;
}