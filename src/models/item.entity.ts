import { BaseEntity, Column, Double, PrimaryGeneratedColumn } from "typeorm";

export default class Item extends BaseEntity {
    @PrimaryGeneratedColumn("increment") 
    id: number

    @Column("varchar")
    name: string
    
    @Column("decimal", { precision: 5, scale: 2 })
    price: number

    @Column("varchar")
    description: string
}