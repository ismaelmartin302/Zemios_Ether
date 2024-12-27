import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserProject } from "src/api/user-project/models/user-project.entity";

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

    @Column('text')
    description: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    start_date: Date;

    @Column({ type: 'timestamp', nullable: true })
    end_date: Date;

    @Column('text', { nullable: true })
    image: string;

    @Column('text', { nullable: true })
    technologies: string;

    @Column('text', { nullable: true })
    github_link: string;

    @Column('text', { nullable: true })
    website_link: string;

    @Column('text', { nullable: true })
    subtitle: string;

    @OneToMany(() => UserProject, (user) => user.project)
    users: UserProject[];
}
